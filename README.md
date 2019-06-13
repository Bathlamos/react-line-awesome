# Line Awesome Icons as Typescript React Components

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![View on npm](https://img.shields.io/npm/v/react-fontawesome.svg)](https://www.npmjs.com/package/react-line-awesome)

> Easily add and customize Line Awesome icons in your JS or Typescript React project without clashing with Font Awesome
> classes.

## Installation

1. **Add the library as a dependency from NPM:**

```bash
    # yarn
    yarn add react-line-awesome

    # npm
    npm install react-line-awesome
```

2. **Add a link to the font files in your project's HTML files:**

```html
<link rel="stylesheet" href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css" />
```

## Features

- No dependencies (other than React)
- Simple API that mirrors Font Awesome's class names.
- Add your own classNames, styles and other props (all additional props are passed directly to the component).
- Proper accessibility tags.

## Examples

```js
var React = require('react')
import { ThumbsUpIcon } from 'react-line-awesome'

function MinimalExample(props) {
  return <ThumbsUpIcon />
}

function LongerExample(props) {
  return (
    <ThumbsUpIcon className="custom-class" component="span" style="color: blue">
      <span>I am a child!</span>
    </ThumbsUpIcon>
  )
}
```

**See [the list of all icons available](https://icons8.com/line-awesome)**
