import BigNumber from 'bignumber.js'
import React, {useCallback, useState} from 'react'
import styled from 'styled-components'
import {Contract} from 'web3-eth-contract'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import IconButton from '../../../components/IconButton'
import {AddIcon} from '../../../components/icons'
import Label from '../../../components/Label'
import Value from '../../../components/Value'
import useAllowance from '../../../hooks/useAllowance'
import useApprove from '../../../hooks/useApprove'
import useModal from '../../../hooks/useModal'
import useStake from '../../../hooks/useStake'
import useStakedBalance from '../../../hooks/useStakedBalance'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useUnstake from '../../../hooks/useUnstake'
import {getBalanceNumber} from '../../../utils/formatBalance'
import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'

interface StakeProps {
  lpContract: Contract
  pid: number
  tokenName: string
}

const Stake: React.FC<StakeProps> = ({lpContract, pid, tokenName}) => {
  const [requestedApproval, setRequestedApproval] = useState(false)

  const allowance = useAllowance(lpContract)
  const {onApprove} = useApprove(lpContract)

  const tokenBalance = useTokenBalance(lpContract.options.address)
  const stakedBalance = useStakedBalance(pid)

  const {onStake} = useStake(pid)
  const {onUnstake} = useUnstake(pid)

  const [onPresentDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={onStake}
      tokenName={tokenName}
    />
  )

  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={onUnstake}
      tokenName={tokenName}
    />
  )

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false)
      }
    } catch (e) {
      console.log(e)
    }
  }, [onApprove, setRequestedApproval])

  // MOAR-ETH LP contract should not be allowed to stake
  const isAddingToPoolAllowed = lpContract.options.address !== '0x10B4Bbb2773AB474E9bCB4D71aCF5b8625DFF9f0';

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <CardIcon>
              <span role={'img'}>👨🏻‍🍳</span>
            </CardIcon>
            <Value value={getBalanceNumber(stakedBalance)} />
            <Label text={`${tokenName} Tokens Staked`} />
          </StyledCardHeader>
          {!isAddingToPoolAllowed && <InactivePool>
            Inactive Pool
          </InactivePool>}
          <StyledCardActions>
            {!allowance.toNumber() ? (
              <Button
                disabled={requestedApproval}
                onClick={handleApprove}
                text={`Approve ${tokenName}`}
              />
            ) : (
              <>
                <Button
                  disabled={stakedBalance.eq(new BigNumber(0))}
                  text="Unstake"
                  onClick={onPresentWithdraw}
                />
                {isAddingToPoolAllowed && (
                  <>
                    <StyledActionSpacer />
                    <IconButton onClick={onPresentDeposit}>
                      <AddIcon />
                    </IconButton>
                  </>
                )}
              </>
            )}
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  )
}

const InactivePool = styled.span`
  display: block;
  color: red;
  margin-bottom: -30px;
  margin-top: 10px;
  font-size: 25px;
`;

// move to parts.tsx
const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[6]}px;
  width: 100%;
`

const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default Stake
