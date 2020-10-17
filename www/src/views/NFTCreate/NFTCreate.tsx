import React, { useState } from 'react'
import {
  Container,
  Button,
  RainbowLightAccent,
} from '../../components'
import {
  StyledForm,
  StyledCreateNFTContainer,
} from './parts'

declare const Buffer: any
declare const hash: any

const NFTCreate: React.FC = () => {
  const [state, setState] = useState({
    ethAddress: '',
    ipfsHash: Array,
    transactionHash: '',
    blockNumber: '',
    gasUsed: '',
    txReceipt: null,
  })
  const [bufferState, setBufferState] = useState(null)

  const convertToBuffer = (reader: any) => {
    // file is converted to a buffer for upload to IPFS

    const buffer = Buffer.from(reader.result)
    // set this buffer-using es6 syntax
    setBufferState(buffer)
  }

  const captureFile = (event: any) => {
    event.stopPropagation()
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => convertToBuffer(reader)
  }

  const handleSubmit = async (e: any) => {
    console.log('hey')
  }

  const setHash = async () => {
    try {
      setState({ ...state, blockNumber: 'waiting..' })
      setState({ ...state, gasUsed: 'waiting...' })
    } catch (error) {
      console.log(error)
    }
  }

  const getHash = async () => {
    try {
      console.log('result of hash from contract')
    } catch (error) {
      console.log(error)
    }
  }

  console.log('env', process.env)
  return (
    <Container transparent={false} size="lg">
      <StyledCreateNFTContainer>
        <RainbowLightAccent container />
        <h1>Create NFT</h1>
        <StyledForm onSubmit={handleSubmit}>
          <label id="imageUploadForm" htmlFor="imageUpload">please upload the file</label>
          <input type="file" name="upload new image" id="imageUpload" onChange={captureFile} />
          <Button type="submit" aria-labelledby="imageUploadForm">Upload Image</Button>
        </StyledForm>
        <Button onClick={setHash}> Get Transaction Receipt </Button>
        <Button onClick={getHash}> Get file hash </Button>
      </StyledCreateNFTContainer>
    </Container>
  )
}

export default NFTCreate
