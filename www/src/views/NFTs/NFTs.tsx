import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useWallet } from 'use-wallet'
import useModal from '../../hooks/useModal'

import chadChef from '../../assets/img/chefchad.png'

import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import WalletProviderModal from '../../components/WalletProviderModal'
import NFTCards from './components/NFTCards'
import NFT from '../NFT'

import useNFTs from '../../hooks/useNFTs';

const NFTs: React.FC = () => {
  const { path } = useRouteMatch()
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />);
  const nfts = useNFTs();

  return (
    <Switch>
      <Page>
        {!!account ? (
          <>
            <Route exact path={path}>
              <PageHeader
                icon={<img src={chadChef} height="320" />}
                subtitle="bla bla bla"
                title="Pick an NFT to buy"
              />
              <NFTCards
                path="nfts"
                nfts={nfts}
              />
            </Route>
            <Route path={`${path}/:nftId`}>
              <NFT nfts={nfts} />
            </Route>
          </>
        ) : (
            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
              }}>
              <Button
                onClick={onPresentWalletProviderModal}
                text="🔓 Unlock Wallet"
              />
            </div>
          )}
      </Page>
    </Switch>
  )
};


export default NFTs;    