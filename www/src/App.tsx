import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { UseWalletProvider } from 'use-wallet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeOff, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
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
import ComingSoon from './views/ComingSoon'
import RoadMap from './views/RoadMap'
import NFTs from './views/NFTs'
import NFTCreate from './views/NFTCreate'
import MyCollectibles from './views/MyCollectibles'

import bgVidLoop from './assets/vid/background-vid-opening.mp4'
// import bgVidOpening from './assets/vid/background-vid-opening.mp4'
import bgVidWebMOpening from './assets/vid/background-vid-opening.webm'

import bgVidPic from './assets/img/when-no-video.png'

const App: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const [useLoopingVideo, setUseLoopingVid] = useState(false)

  // todo: make sound play only on certain pages
  const [muted, setMute] = useState(true)

  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])

  const handlePresentMobileMenu = useCallback(() => {
    setMobileMenu(true)
  }, [setMobileMenu])

  const otherVideo = (
    <video
      playsInline
      autoPlay
      preload="auto"
      muted={muted || useLoopingVideo === false}
      loop={false}
      poster={bgVidPic}
      controls={false}
      onEnded={(el) => {
        const element = el
        element.currentTarget.currentTime = 0.035
        element.currentTarget.play()
      }}
    >
      <source src={bgVidLoop} type="video/mp4" />
      <source src={bgVidLoop} type="video/webm" />
    </video>
  )

  return (
    <Providers>
      <Router basename={process.env.PUBLIC_URL}>
        <TopBar onPresentMobileMenu={handlePresentMobileMenu} />
        <MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
        <FontAwesomeIcon
          icon={muted ? faVolumeOff : faVolumeUp}
          border
          className="mute-icon"
          size="2x"
          onClick={() => {
            setMute(!muted)
          }}
        />
        {otherVideo}
        <video
          playsInline
          autoPlay
          preload="none"
          muted={muted}
          loop={false}
          controls={false}
          onEnded={(el) => {
            const element = el
            element.currentTarget.style.display = 'none'
            setUseLoopingVid(true)
          }}
        >
          <source src={bgVidLoop} type="video/mp4" />
          <source src={bgVidWebMOpening} type="video/webm" />
        </video>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/roadmap">
            <RoadMap />
          </Route>
          <Route path="/comingsoons">
            <ComingSoon />
          </Route>
          <Route path="/farms">
            <Farms />
          </Route>
          <Route path="/nfts">
            <NFTs />
          </Route>
          <Route path="/create-nft">
            <NFTCreate />
          </Route>
          <Route path="/my">
            <MyCollectibles />
          </Route>
        </Switch>
      </Router>
      <Disclaimer />
    </Providers>
  )
}

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <UseWalletProvider
      chainId={1}
      connectors={{
        walletconnect: { rpcUrl: 'https://mainnet.eth.aragon.network/' },
      }}
    >
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

const Disclaimer: React.FC = () => {
  const markSeen = useCallback(() => {
    localStorage.setItem('disclaimer', 'seen')
  }, [])

  const [onPresentDisclaimerModal] = useModal(
    <DisclaimerModal onConfirm={markSeen} />,
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
