import React from 'react'
import styled from 'styled-components'

const CardImage: React.FC = ({ children }) => (
  <StyledCardIcon>
    {children}
  </StyledCardIcon>
)

const StyledCardIcon = styled.div`
  background-color: ${(props) => props.theme.color.grey[200]};
  height: 250;
  width: 200px;
  align-items: center;
  display: flex;
  justify-content: center;
//   box-shadow: inset 4px 4px 8px ${(props) => props.theme.color.grey[300]},
//     inset -6px -6px 12px ${(props) => props.theme.color.grey[100]};
  margin: 0 auto ${(props) => props.theme.spacing[3]}px;
`

export default CardImage
