import React, {useCallback, useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import {UseWalletProvider} from 'use-wallet'
import DisclaimerModal from './components/DisclaimerModal'
import MobileMenu from './components/MobileMenu'
import TopBar from './components/TopBar'
import FarmsProvider from './contexts/Farms'
import ModalsProvider from './contexts/Modals'
import TransactionProvider from './contexts/Transactions'
import SushiProvider from './contexts/SushiProvider'
import useModal from './hooks/useModal'
import theme from './theme'
import Farms from './views/Farms'
import Home from './views/Home'

import bgVid from './assets/img/background-vid.mp4'
import bgVidWebM from './assets/vid/background-vid.webm'
import bgVidPic from './assets/img/when-no-video.png'

const App: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])

  const handlePresentMobileMenu = useCallback(() => {
    setMobileMenu(true)
  }, [setMobileMenu])

  return (
    <Providers>
      <Router>
        <TopBar onPresentMobileMenu={handlePresentMobileMenu} />
        <MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
        <video
          playsInline={true}
          autoPlay={true}
          muted={false}
          loop={true}
          poster={bgVidPic}
          id="bgvid">
          <source src={bgVidWebM} type="video/webm" />
          <source src={bgVid} type="video/mp4" />
        </video>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/farms">
            <Farms />
          </Route>
        </Switch>
      </Router>
      <Disclaimer />
    </Providers>
  )
}

const Providers: React.FC = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <UseWalletProvider
        chainId={1}
        connectors={{
          walletconnect: {rpcUrl: 'https://mainnet.eth.aragon.network/'},
        }}>
        <SushiProvider>
          <TransactionProvider>
            <FarmsProvider>
              <ModalsProvider>{children}</ModalsProvider>
            </FarmsProvider>
          </TransactionProvider>
        </SushiProvider>
      </UseWalletProvider>
    </ThemeProvider>
  )
}

const Disclaimer: React.FC = () => {
  const markSeen = useCallback(() => {
    localStorage.setItem('disclaimer', 'seen')
  }, [])

  const [onPresentDisclaimerModal] = useModal(
    <DisclaimerModal onConfirm={markSeen} />
  )

  useEffect(() => {
    const seenDisclaimer = true // localStorage.getItem('disclaimer')
    if (!seenDisclaimer) {
      onPresentDisclaimerModal()
    }
  }, [])

  return <div />
}

export default App
