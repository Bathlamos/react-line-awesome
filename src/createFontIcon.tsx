import React, { ElementType, forwardRef, ForwardRefExoticComponent, PropsWithoutRef, Ref, RefAttributes } from 'react'

export interface IconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  component?: ElementType
  size?: 'lg' | 'xs' | 'sm' | 'lx' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | 'fw'
  variant?: 'regular' | 'brand' | 'solid'
}

// Explicitly defined so the compiler doesn't regenerate it per component and bloats index.d.ts
export type IconType = ForwardRefExoticComponent<PropsWithoutRef<IconProps> & RefAttributes<HTMLElement>>

export default (faClassName: string, defaultVariant: 'la' | 'lab' | 'las'): IconType =>
  forwardRef((props: IconProps, ref: Ref<HTMLElement>) => {
    const {
      className: userClassName,
      'aria-hidden': ariaHidden,
      role,
      children,
      component,
      size,
      variant,
      ...remainder
    } = props

    const classFromVariant = {
      regular: 'la',
      brand: 'lab',
      solid: 'las',
    }

    const CustomTag = component || 'i'

    return (
      <CustomTag
        aria-hidden={ariaHidden || 'true'}
        role={role || 'presentation'}
        className={[
          variant ? classFromVariant[variant] : defaultVariant,
          size && `la-${size}`,
          faClassName,
          userClassName,
        ]
          .filter(Boolean)
          .join(' ')}
        {...remainder}
        ref={ref}>
        {children}
      </CustomTag>
    )
  })
