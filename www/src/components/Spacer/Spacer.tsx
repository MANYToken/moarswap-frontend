import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

interface SpacerProps {
  size?: 'sm' | 'md' | 'lg'
}

const Spacer: React.FC<SpacerProps> = ({ size = 'md' }) => {
  const { spacing } = useContext(ThemeContext)

  let s: number
  switch (size) {
    case 'lg':
      // eslint-disable-next-line prefer-destructuring
      s = spacing[6]
      break
    case 'sm':
      // eslint-disable-next-line prefer-destructuring
      s = spacing[2]
      break
    case 'md':
    default:
      // eslint-disable-next-line prefer-destructuring
      s = spacing[4]
  }

  return (
    <StyledSpacer size={s} />
  )
}

interface StyledSpacerProps {
  size: number,
}

const StyledSpacer = styled.div<StyledSpacerProps>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
`

export default Spacer
