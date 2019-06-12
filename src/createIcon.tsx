
import React, { Ref } from 'react'

type IProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export default (className: string, displayName: string) => {
  const Component = React.memo(
    React.forwardRef((props: IProps, ref: Ref<HTMLElement>) => (
      <i aria-Hidden="true" role="presentation" className={className} {...props} ref={ref}>
        {props.children}
      </i>
    )),
  )

  return Component
}