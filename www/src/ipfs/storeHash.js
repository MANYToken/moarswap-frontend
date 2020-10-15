import web3 from './web3'

// Your contract address
const address = '0x4C6cfeC5Cf90CC76F91aee241d63698EEcd2dd72'
// Your contract ABI

const abi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'x',
        type: 'string',
      },
    ],
    name: 'setHash',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getHash',
    outputs: [
      {
        internalType: 'string',
        name: 'x',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

export default new web3.eth.Contract(abi, address)
