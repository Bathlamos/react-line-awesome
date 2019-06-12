const program = require('commander');
const fs = require('fs');
const path = require('path');

const toPascalCase = (s) => s.replace(/(\w)(\w*)/g, 
  (g0,g1,g2) => g1.toUpperCase() + g2.toLowerCase()).replace(/-/g, '');

const toComponentName = (s) => {
  switch(s) {
    case '500px': return'FiveHundredPxIcon'
    default: return `${toPascalCase(s)}Icon`
  }
}

program
  .arguments('<cssFontPath> <outputDirectory>')
  .action((cssFontPath, outputDirectory) => {

    // Reset output directory
    fs.readdirSync(outputDirectory).forEach(file => fs.unlinkSync(path.join(outputDirectory, file)))

    // Get Line Awesome class names
    const fontCSS = fs.readFileSync(cssFontPath, {encoding: 'utf8'});
    const classNameRegex = /\.la-(\S+):before\s*\{/g
    let match;
    const iconNames = []
    while (match = classNameRegex.exec(fontCSS)) {
      iconNames.push({
        className: `la-${match[1]}`,
        componentName: toComponentName(match[1])
      });
    }

    // Write components files
    const templateIcon = fs.readFileSync('src/templateIcon.tsx', {encoding: 'utf8'});
    iconNames.forEach(({className, componentName}) => {
      const fileContent = templateIcon
        .replace('{{componentName}}', componentName)
        .replace('{{className}}', className)
      fs.writeFileSync(`${outputDirectory}/${componentName}.tsx`, fileContent, 'utf8')
    })

    // Write index.d.ts
    fs.writeFileSync('src/index.d.ts',
      iconNames.map(({_, componentName}) => `export { default as ${componentName} } from './icons/${componentName}'`).join('\n'),
      'utf8')
  })
  .parse(process.argv);