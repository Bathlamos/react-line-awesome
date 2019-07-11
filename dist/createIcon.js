'use strict'
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {}
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]]
      }
    return t
  }
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = __importDefault(require('react'))
exports.default = function(className) {
  return react_1.default.memo(
    react_1.default.forwardRef(function(props, ref) {
      var userClassName = props.className,
        ariaHidden = props['aria-hidden'],
        role = props.role,
        children = props.children,
        component = props.component,
        remainder = __rest(props, ['className', 'aria-hidden', 'role', 'children', 'component'])
      var CustomTag = component || 'i'
      return react_1.default.createElement(
        CustomTag,
        __assign(
          {
            'aria-hidden': ariaHidden || 'true',
            role: role || 'presentation',
            className: [className, userClassName]
              .filter(function(e) {
                return e
              })
              .join(' '),
          },
          remainder,
          { ref: ref }
        ),
        children
      )
    })
  )
}
//# sourceMappingURL=createIcon.js.map
