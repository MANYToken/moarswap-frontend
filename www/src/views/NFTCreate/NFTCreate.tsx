import React, {
  FormEvent, useState, useCallback,
} from 'react'
import {
  Container,
  Button,
  RainbowLightAccent,
  Input,
} from '../../components'
import {
  StyledForm,
  StyledCreateNFTContainer,
  StyledH1,
  StyledError,
  StyledImageContainer,
  StyledInputContainer,
} from './parts'
import { StyledDropzone } from './DropZone'

declare const Buffer: any
declare const hash: any

const NFTCreate: React.FC = () => {
  const [fileBuffer, setFileBuffer] = useState(null)
  const [error, setError] = useState(null)
  const [imageSrc, setImageSrc] = useState('')

  const convertToBuffer = useCallback((reader: FileReader) => {
    const buffer = Buffer.from(reader.result)
    setFileBuffer(buffer)
  }, [])

  const captureFile = useCallback((file: File) => {
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      // convert to buffer to send to ipfs later
      convertToBuffer(reader)
      // create url for preview
      const blob = new Blob([reader.result], { type: 'image/jpeg' })
      const urlCreator = window.URL || window.webkitURL
      setImageSrc(urlCreator.createObjectURL(blob))
    }
  }, [convertToBuffer])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log('hey form submit!')
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      setError(null)
      captureFile(file)
    })
  }, [captureFile])

  const onDropRejected = (file: any) => {
    setError(`${file[0]?.errors[0]?.message} - please try again`)
  }

  console.log('env', process.env)
  return (
    <Container transparent={false} size="lg">
      <StyledCreateNFTContainer>
        <RainbowLightAccent container />
        <StyledH1>Create your NFT!</StyledH1>
        <StyledForm onSubmit={handleSubmit}>
          <StyledImageContainer>
            <StyledDropzone
              onDrop={onDrop}
              onDropRejected={onDropRejected}
            />
            {imageSrc && <img src={imageSrc} alt="NFT Create" />}
          </StyledImageContainer>
          <StyledInputContainer>
            <p>hello</p>
          </StyledInputContainer>
        </StyledForm>
        {error && <StyledError>{error}</StyledError>}
      </StyledCreateNFTContainer>
    </Container>
  )
}

export default NFTCreate
