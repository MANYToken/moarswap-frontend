/* eslint-disable */
import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const getMasterChefAddress = (sushi) => sushi && sushi.masterChefAddress
export const getSushiAddress = (sushi) => sushi && sushi.sushiAddress
export const getWethContract = (sushi) => sushi && sushi.contracts && sushi.contracts.weth

export const getMasterChefContract = (sushi) => sushi && sushi.contracts && sushi.contracts.masterChef
export const getSushiContract = (sushi) => sushi && sushi.contracts && sushi.contracts.sushi

export const getFarms = (sushi) => (sushi
  ? sushi.contracts.pools.map(
    ({
      pid,
      name,
      symbol,
      icon,
      tokenAddress,
      tokenSymbol,
      tokenContract,
      lpAddress,
      lpContract,
      add_lp,
      pair_url,
    }) => ({
      pid,
      pair_url,
      id: symbol,
      name,
      lpToken: symbol,
      lpTokenAddress: lpAddress,
      lpContract,
      tokenAddress,
      tokenSymbol,
      tokenContract,
      earnToken: 'moar',
      earnTokenAddress: sushi.contracts.sushi.options.address,
      icon,
      add_lp,
    }),
  )
  : [])

export const getPoolWeight = async (masterChefContract, pid) => {
  const { allocPoint } = await masterChefContract.methods.poolInfo(pid).call()
  const totalAllocPoint = await masterChefContract.methods
    .totalAllocPoint()
    .call()
  return new BigNumber(allocPoint).div(new BigNumber(totalAllocPoint))
}

export const getEarned = async (masterChefContract, pid, account) => masterChefContract.methods.pendingSushi(pid, account).call()

export const getTotalLPWethValue = async (
  masterChefContract,
  wethContract,
  lpContract,
  tokenContract,
  pid,
) => {
  // Get balance of the token address
  const tokenAmountWholeLP = await tokenContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  const tokenDecimals = await tokenContract.methods.decimals().call()
  // Get the share of lpContract that masterChefContract owns
  const balance = await lpContract.methods
    .balanceOf(masterChefContract.options.address)
    .call()
  // Convert that into the portion of total lpContract = p1
  const totalSupply = await lpContract.methods.totalSupply().call()
  // Get total weth value for the lpContract = w1
  const lpContractWeth = await wethContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  // Return p1 * w1 * 2
  const portionLp = new BigNumber(balance).div(new BigNumber(totalSupply))
  const lpWethWorth = new BigNumber(lpContractWeth)
  const totalLpWethValue = portionLp.times(lpWethWorth).times(new BigNumber(2))
  // Calculate
  const tokenAmount = new BigNumber(tokenAmountWholeLP)
    .times(portionLp)
    .div(new BigNumber(10).pow(tokenDecimals))

  const wethAmount = new BigNumber(lpContractWeth)
    .times(portionLp)
    .div(new BigNumber(10).pow(18))
  return {
    tokenAmount,
    wethAmount,
    totalWethValue: totalLpWethValue.div(new BigNumber(10).pow(18)),
    tokenPriceInWeth: wethAmount.div(tokenAmount),
    poolWeight: await getPoolWeight(masterChefContract, pid),
  }
}

export const approve = async (lpContract, masterChefContract, account) => lpContract.methods
  .approve(masterChefContract.options.address, ethers.constants.MaxUint256)
  .send({ from: account })

export const getSushiSupply = async (sushi) => new BigNumber(await sushi.contracts.sushi.methods.totalSupply().call())

export const stake = async (masterChefContract, pid, amount, account) => masterChefContract.methods
  .deposit(
    pid,
    new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
  )
  .send({ from: account })
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  })

export const unstake = async (masterChefContract, pid, amount, account) => masterChefContract.methods
  .withdraw(
    pid,
    new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
  )
  .send({ from: account })
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  })
export const harvest = async (masterChefContract, pid, account) => masterChefContract.methods
  .deposit(pid, '0')
  .send({ from: account })
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  })

export const getStaked = async (masterChefContract, pid, account) => {
  try {
    const { amount } = await masterChefContract.methods
      .userInfo(pid, account)
      .call()
    return new BigNumber(amount)
  } catch {
    return new BigNumber(0)
  }
}
