import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useWallet } from 'use-wallet'
import useModal from '../../hooks/useModal'

import chadChef from '../../assets/img/chefchad.png'

import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import WalletProviderModal from '../../components/WalletProviderModal'
import NFTCards from '../NFTs/components/NFTCards'
import NFTDetails from '../NFTDetails'

import useCollectibles from '../../hooks/useCollectibles'

const MyCollectibles: React.FC = () => {
  const { path } = useRouteMatch()
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  const nfts = useCollectibles()

  return (
    <Switch>
      <Page>
        {account ? (
          <>
            <Route exact path={path}>
              <PageHeader
                icon={<img src={chadChef} alt="Chad Chef" height="320" />}
                subtitle="Click on the one to show info"
                title="Here are your collectibles!"
              />
              <NFTCards
                path="my"
                nfts={nfts}
              />
            </Route>
            <Route path={`${path}/:nftId`}>
              <NFTDetails nfts={nfts} />
            </Route>
          </>
        ) : (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={onPresentWalletProviderModal}
              text="🔓 Unlock Wallet"
            />
          </div>
        )}
      </Page>
    </Switch>
  )
}

export default MyCollectibles
