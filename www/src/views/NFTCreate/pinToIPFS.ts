const axios = require('axios')

export const PINATA_BASE_GATEWAY_URL = 'https://gateway.pinata.cloud/ipfs/'

export const pinFileToIPFS = (file: File) => {
  const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS'

  // we gather a local file for this example, but any valid readStream source will work here.
  const data = new FormData()
  data.append('file', file)

  return axios.post(url,
    data,
    {
      maxContentLength: 'Infinity', // this is needed to prevent axios from erroring out with large files
      headers: {
        'Content-Type': 'multipart/form-data;',
        pinata_api_key: '396411e5905829c35a90',
        pinata_secret_api_key: '98f8498d8baa49a2a19153973fb7bce3f19a3108d731b9670f7c9fd7858208cc',
      },
    })
}

interface pinJSONToIPFSInterface {
  name: string,
  description?: string,
  image: string,
}

export const pinJSONToIPFS = (JSONBody: pinJSONToIPFSInterface) => {
  const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS'
  return axios
    .post(
      url,
      JSONBody,
      {
        headers: {
          pinata_api_key: '396411e5905829c35a90',
          pinata_secret_api_key: '98f8498d8baa49a2a19153973fb7bce3f19a3108d731b9670f7c9fd7858208cc',
        },
      },
    )
}
