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

export const DropdownContainer = styled.div`
  width: 100%;
  height: 60vh;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 40%;
  }
`

export const StyledInputContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

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

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const CenteredMessage = styled.p`
  margin: auto;
`

export const InputLabel = styled.label`
  margin: 0;
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 900;
  padding-bottom: 5px;
  padding-top: 10px;

  :first-child {
    padding-top: 0;
  }
`

export const Input = styled.input`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  color: #040405;
  padding: 10px 2px;
  background: 0 0;
  border: 0;
      border-bottom-color: currentcolor;
      border-bottom-style: none;
      border-bottom-width: 0px;
  border-bottom: 2px solid rgba(4,4,5,.1);
  outline: 0;
  resize: none;
  transition: .15s all cubic-bezier(.17,.67,.83,.67);

  & :focus {
    border: 2px solid ${({ theme }) => theme.color.blue[300]};
    border-radius: 2px;
  } 
`

export const TextArea = styled.textarea`
 width: 100%;
  font-size: 18px;
  font-weight: 500;
  color: #040405;
  padding: 10px 2px;
  background: 0 0;
  border: 0;
      border-bottom-color: currentcolor;
      border-bottom-style: none;
      border-bottom-width: 0px;
  border-bottom: 2px solid rgba(4,4,5,.1);
  outline: 0;
  resize: none;
  transition: .05s all cubic-bezier(.17,.67,.83,.67);

  & :focus {
    border: 2px solid ${({ theme }) => theme.color.blue[300]};
    border-radius: 2px;
  } 
`

export const ButtonContainer = styled.div`
  margin-top: auto;
`

export const DetailsContainer = styled.article`
  margin-top: 5px;
  font-style: italic;
  font-size: 14px;
  margin-bottom: 20px;
`
