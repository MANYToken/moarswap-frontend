import React, {
  FormEvent, useState, useCallback, SyntheticEvent,
} from 'react'
import {
  Container,
  Button,
  RainbowLightAccent,
} from '../../components'
import {
  StyledForm,
  StyledCreateNFTContainer,
  StyledH1,
  StyledError,
  DropdownContainer,
  StyledInputContainer,
  ImagePreview,
  CenteredMessage,
  InputLabel,
  Input,
  TextArea,
  ButtonContainer,
  DetailsContainer,
} from './parts'
import {
  pinFileToIPFS,
  pinJSONToIPFS,
  PINATA_BASE_GATEWAY_URL,
} from './pinToIPFS'
import { StyledDropzone } from './DropZone'

declare const Buffer: any
declare const hash: any

const NFTCreate: React.FC = () => {
  const [formFile, setFormFile] = useState(null)
  const [fileSize, setFileSize] = useState(null)
  const [ipfsImageHash, setIpfsImageHash] = useState(null)
  const [ipfsMetadataHash, setIpfsMetadataHash] = useState(null)
  const [nftName, setNftName] = useState('')
  const [nftDescription, setNftDescription] = useState('')
  const [error, setError] = useState(null)
  const [imageSrc, setImageSrc] = useState('')

  const captureFile = useCallback((file: File) => {
    setFileSize(file.size)
    setFormFile(file)
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      // create url for preview
      const blob = new Blob([reader.result], { type: 'image/*' })
      const urlCreator = window.URL || window.webkitURL
      setImageSrc(urlCreator.createObjectURL(blob))
    }
  }, [])

  const constructJSON = useCallback((ipfsHash) => ({
    name: nftName,
    description: nftDescription,
    image: `${PINATA_BASE_GATEWAY_URL}${ipfsHash}`,
  }), [
    nftName,
    nftDescription,
  ])

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    // todo: form validation
    if (!formFile) {
      setError('Please upload picture')
    }
    if (!nftName) {
      setError('Please set NFT name')
    }
    let pinFileResult
    try {
      pinFileResult = await pinFileToIPFS(formFile)
    } catch (err) {
      setError(`Error on upload file to IPFS ${err}`)
      return
    }
    setIpfsImageHash(pinFileResult.data.IpfsHash)

    let pinJSONMetadataResult
    try {
      const metadataJSON = constructJSON(pinFileResult.data.IpfsHash)
      pinJSONMetadataResult = await pinJSONToIPFS(metadataJSON)
    } catch (err) {
      setError(`Error on upload metadata to IPFS ${err}`)
    }
    setIpfsMetadataHash(pinJSONMetadataResult.data.IpfsHash)

    console.log('pinJSONMetadataResult', pinJSONMetadataResult)
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

  const handleNameChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement
    setNftName(target.value)
  }

  const handleDescriptionChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement
    setNftDescription(target.value)
  }

  return (
    <Container transparent={false} size="lg">
      <StyledCreateNFTContainer>
        <RainbowLightAccent container />
        <StyledH1>Create your NFT!</StyledH1>
        <StyledForm onSubmit={handleSubmit}>
          <DropdownContainer>
            <StyledDropzone
              onDrop={onDrop}
              onDropRejected={onDropRejected}
            >
              {imageSrc
                ? <ImagePreview src={imageSrc} alt="NFT Create" />
                : <CenteredMessage>Select or Drop Image for NFT</CenteredMessage>}
            </StyledDropzone>
          </DropdownContainer>
          <StyledInputContainer>
            <InputLabel>Name</InputLabel>
            <Input type="text" name="nft-name" onChange={handleNameChange} />
            <InputLabel>Description (optional)</InputLabel>
            <TextArea name="nft-description" onChange={handleDescriptionChange} />
            <DetailsContainer>
              {error && <StyledError>{error}</StyledError>}
              <p>details:</p>
              {fileSize && (
              <>
                <span>fileSize: </span>
                <span>
                  {fileSize / 1000}
                  {' '}
                  KB
                </span>
                <br />
              </>
              )}
              {ipfsImageHash && (
                <>
                  <span>Image ipfsHash: </span>
                  <a href={`${PINATA_BASE_GATEWAY_URL}${ipfsImageHash}`} rel="noreferrer" target="_blank">
                    {ipfsImageHash}
                  </a>
                  <br />
                </>
              )}
              {ipfsMetadataHash && (
                <>
                  <span>Metadata ipfsHash: </span>
                  <a href={`${PINATA_BASE_GATEWAY_URL}${ipfsMetadataHash}`} rel="noreferrer" target="_blank">
                    {ipfsMetadataHash}
                  </a>
                </>
              )}
            </DetailsContainer>
            <ButtonContainer>
              <Button type="submit">
                Upload Your Metadata to IPFS
              </Button>
            </ButtonContainer>
          </StyledInputContainer>
        </StyledForm>
      </StyledCreateNFTContainer>
    </Container>
  )
}

export default NFTCreate
