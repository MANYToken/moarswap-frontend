import React from 'react'
import styled from 'styled-components'

const ModalContent: React.FC = ({ children }) => <StyledModalContent>{children}</StyledModalContent>

const StyledModalContent = styled.div`
  padding: ${(props) => props.theme.spacing[4]}px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex: 1;
    overflow: auto;
  }
`

export default ModalContent
