To regenerate `defaultVariants.json`, run the following script on [this webpage](https://icons8.com/line-awesome)

```javascript
JSON.stringify(
  [...document.getElementsByTagName('i')]
    .map(e => e.className)
    .reduce((map, className) => {
      const res = /^(la|las|lab) (la-[^ ]+)$/.exec(className)
      if (res) map[res[2]] = res[1]
      return map
    }, {})
)
```
