/* eslint-disable */
import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const contractAddresses = {
  sushi: {
    1: '0xBf131dCbE3436dab8a7c82D9C3666d652ca38eaB',
  },
  masterChef: {
    1: '0xcFF6540c125f9dEc2C5427b60E89816e840b25Ec',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
}

// DO NOT CHANGE THESE PIDS
export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      1: '0x55a06945e79f2d6a14b5c4f18e8e73091e2e57d6',
    },
    tokenAddresses: {
      1: '0xab7aaf9e485a3bc885985184abe9fc6aba727bd6',
    },
    name: '$MANY MEN',
    symbol: 'MANY-ETH UNI-V2 LP',
    tokenSymbol: 'MOAR',
    icon: '🗿',
    add_lp: 'https://app.uniswap.org/#/add/0xab7aaf9e485a3bc885985184abe9fc6aba727bd6/ETH',
    pair_url: 'https://uniswap.info/pair/0x55a06945e79f2d6a14b5c4f18e8e73091e2e57d6',
  },
  {
    pid: 1,
    lpAddresses: {
      1: '0xb1a6876ad98fba649a66be916559039abdd3dbbe',
    },
    tokenAddresses: {
      1: '0xbf131dcbe3436dab8a7c82d9c3666d652ca38eab',
    },
    name: '$MANY MOAR',
    symbol: 'MANY-MOAR UNI-V2 LP',
    tokenSymbol: 'MOAR',
    icon: '🏋',
    pair_url: 'https://uniswap.info/pair/0xb1a6876ad98fba649a66be916559039abdd3dbbe',
    add_lp: 'https://app.uniswap.org/#/add/0xab7aaf9e485a3bc885985184abe9fc6aba727bd6/0xbf131dcbe3436dab8a7c82d9c3666d652ca38eab',
  },
]
