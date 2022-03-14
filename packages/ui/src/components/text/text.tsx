import { ComponentChildren, h, JSX } from 'preact'

import { IconCircleHelp16 } from '../../icons/icon-16/icon-circle-help-16'
import { Props } from '../../types/types'
import { createClassName } from '../../utilities/create-class-name'
import styles from './text.module.css'

export type TextProps = {
  align?: TextAlignment
  children: ComponentChildren
  numeric?: boolean
  helplink?: string
}
export type TextAlignment = 'left' | 'center' | 'right'

export function Text({
  align = 'left',
  children,
  numeric = false,
  helplink = undefined,
  ...rest
}: Props<HTMLDivElement, TextProps>): JSX.Element {
  return (
    <div
      {...rest}
      class={createClassName([
        styles.text,
        styles[align],
        numeric === true ? styles.numeric : null
      ])}
    >
      {children}
      {helplink && (
        <a href={helplink} rel="noreferrer" target="_blank">
          <IconCircleHelp16 color="black-30" />
        </a>
      )}
    </div>
  );
}
