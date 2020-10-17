import styled from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
  }

  & > * {
    margin-top: 20px;
  }
`

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 60vh;
  background-color: blue;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 40%;
  }
`

export const StyledInputContainer = styled.div`
  width: 100%;
  background-color: red;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-left: 20px;
    width: 60%;
  }
`

export const StyledCreateNFTContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

// to common components
export const StyledH1 = styled.h1`
  display: flex;
  margin: auto;
`

// to common components
export const StyledError = styled.p`
  color: red;
`
