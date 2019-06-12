import React, { Ref } from 'react'

type IProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export default (className: string) =>
  React.memo(
    React.forwardRef(
      ({ className: userClassName, 'aria-hidden': ariaHidden, role, ...props }: IProps, ref: Ref<HTMLElement>) => (
        <i
          aria-Hidden={ariaHidden || 'true'}
          role={role || 'presentation'}
          className={[className, userClassName].filter(e => e).join(' ')}
          {...props}
          ref={ref}>
          {props.children}
        </i>
      )
    )
  )
