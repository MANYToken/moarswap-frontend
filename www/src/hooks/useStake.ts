import { useCallback } from 'react'

import { useWallet } from 'use-wallet'
import useSushi from './useSushi'

import { stake, getMasterChefContract } from '../sushi/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const sushi = useSushi()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(sushi),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, sushi],
  )

  return { onStake: handleStake }
}

export default useStake
