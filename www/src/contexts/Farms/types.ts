import { Contract } from 'web3-eth-contract'

export interface Farm {
  pid: number
  name: string
  lpToken: string
  lpTokenAddress: string
  lpContract: Contract
  tokenAddress: string
  earnToken: string
  earnTokenAddress: string
  icon: React.ReactNode
  id: string
  tokenSymbol: string
  // eslint-disable-next-line camelcase
  add_lp: string
  // eslint-disable-next-line camelcase
  pair_url: string
}

export interface FarmsContext {
  farms: Farm[]
  unharvested: number
}
