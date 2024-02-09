const program = require('commander')
const fs = require('fs')
const defaultVariants = require('../src/resources/line-awesome/defaultVariants.json')

const toPascalCase = s => s.replace(/(\w)(\w*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()).replace(/-/g, '')

const toComponentName = s => {
  switch (s) {
    case '500px':
      return 'FiveHundredPxIcon'
    default:
      return `${toPascalCase(s)}Icon`
  }
}

program
  .arguments('<cssFontPath>')
  .action(cssFontPath => {
    // Get Line Awesome class names
    const fontCSS = fs.readFileSync(cssFontPath, { encoding: 'utf8' })
    const classNameRegex = /\.la-(\S{2,}):before/g
    let match
    const iconNames = []
    const seen = {}
    while ((match = classNameRegex.exec(fontCSS))) {
      const alphaOnlyMatch = match[1].toLowerCase().replace(/[^a-z]/, '')
      if (!seen[alphaOnlyMatch])
        iconNames.push({
          className: `la-${match[1]}`,
          componentName: toComponentName(match[1]),
        })
      seen[alphaOnlyMatch] = true
    }

    // Write index.d.ts
    fs.writeFileSync(
      'src/exports.ts',
      `import createFontIcon from './createFontIcon'\n\nexport { IconProps, IconType } from './createFontIcon'\n\n` +
        iconNames
          .map(({ className, componentName }) => {
            if (!defaultVariants[className]) console.warn('Missing an default variant for', className)
            return `export const ${componentName} = createFontIcon('${className}', '${defaultVariants[className] ||
              'la'}')`
          })
          .join('\n'),
      'utf8'
    )
  })
  .parse(process.argv)
