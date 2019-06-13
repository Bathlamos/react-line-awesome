import React, { ElementType, Ref } from 'react'

type IProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { component?: ElementType }

export default (className: string) =>
  React.memo(
    React.forwardRef((props: IProps, ref: Ref<HTMLElement>) => {
      const { className: userClassName, 'aria-hidden': ariaHidden, role, children, component, ...remainder } = props

      const CustomTag = component || 'i'

      return (
        <CustomTag
          aria-hidden={ariaHidden || 'true'}
          role={role || 'presentation'}
          className={[className, userClassName].filter(e => e).join(' ')}
          {...remainder}
          ref={ref}>
          {children}
        </CustomTag>
      )
    })
  )
