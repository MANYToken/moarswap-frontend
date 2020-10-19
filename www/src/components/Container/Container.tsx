import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

interface ContainerProps {
  children?: React.ReactNode
  size?: 'sm' | 'md' | 'lg',
  transparent?: boolean,
}

const Container: React.FC<ContainerProps> = ({
  children,
  size = 'md',
  transparent = true,
}) => {
  const { siteWidth } = useContext<{siteWidth: number}>(ThemeContext)
  let width: number
  switch (size) {
    case 'sm':
      width = siteWidth / 2
      break
    case 'md':
      width = (siteWidth * 2) / 3
      break
    case 'lg':
    default:
      width = siteWidth
  }
  return <StyledContainer transparent={transparent} width={width}>{children}</StyledContainer>
}

interface StyledContainerProps {
  transparent: boolean,
  width: number
}

const StyledContainer = styled.div<StyledContainerProps>`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: ${(props) => props.width}px;
  background-color: ${({ theme, transparent }) => (transparent ? 'transparent' : theme.color.grey[100])};
  border-radius: ${({ theme, transparent }) => (transparent ? '0px' : '5px')};
  padding: ${(props) => props.theme.spacing[4]}px;
  width: 100%;
`

export default Container
