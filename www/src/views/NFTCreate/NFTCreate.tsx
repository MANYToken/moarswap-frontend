import React, { useState } from 'react'
import { TransactionReceipt } from 'web3-core'
import { Container, Button } from '../../components'
import { StyledForm } from './parts'
import { ipfs, web3, storeHash } from '../../ipfs'

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
    e.preventDefault()
    console.log('in submit')
    const accounts = await web3.eth.getAccounts()
    // obtain contract address from storehash.js
    const ethAddress = await storeHash.options.address
    console.log('ethAddress', ethAddress)
    setState({ ...state, ethAddress })
    // save document to IPFS,return its hash#, and set hash# to state
    const result = await ipfs.add(bufferState)
    console.log('result', result)
    storeHash.methods.setHash(result.path).send({
      from: accounts[0],
    },
    (error: Error, transactionHash: string) => {
      console.log(transactionHash)
      setState({
        ...state,
        transactionHash,
      })
    })
  }

  const setHash = async () => {
    try {
      setState({ ...state, blockNumber: 'waiting..' })
      setState({ ...state, gasUsed: 'waiting...' })
      await web3.eth.getTransactionReceipt(
        state.transactionHash,
        (err: Error, txReceipt: TransactionReceipt) => {
          console.log(err, txReceipt)
          setState({ ...state, txReceipt })
        },
      )
    } catch (error) {
      console.log(error)
    }
  }

  const getHash = async () => {
    const accounts = await web3.eth.getAccounts()
    try {
      const result = storeHash.methods.getHash().send({
        from: accounts[0],
      },
      (error: Error, transactionHash: string) => {
        console.log(transactionHash)
      })

      console.log('result of hash from contract', result)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <label id="imageUploadForm" htmlFor="imageUpload">please upload the file</label>
        <input type="file" name="upload new image" id="imageUpload" onChange={captureFile} />
        <Button type="submit" aria-labelledby="imageUploadForm">Upload Image</Button>
      </StyledForm>
      <>
        {Object.values(state).map((stateKey) => (<p>{stateKey}</p>))}
      </>
      <Button onClick={setHash}> Get Transaction Receipt </Button>
      <Button onClick={getHash}> Get file hash </Button>
    </Container>
  )
}

export default NFTCreate
