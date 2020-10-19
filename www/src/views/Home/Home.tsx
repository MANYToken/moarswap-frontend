import React from 'react'
import styled from 'styled-components'
import chadChef from '../../assets/img/chefchad.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => (
  <Page>
    <PageHeader
      icon={<img src={chadChef} alt="Chad Chef" height={320} />}
      title="Moar is Ready"
      subtitle="Stake Uniswap LP tokens to claim your very own MOAR!"
    />
    <Container>
      <Balances />
    </Container>
    <Spacer size="lg" />
    <StyledInfo>
      {/* eslint-disable-next-line */}
      <span role="image">🏆</span>
      <b id="pro-tip">Pro Tip</b>
      : MOAR-MANY UNI-V2 LP token pool yields TWICE more token
      rewards per block.
    </StyledInfo>
    <Spacer size="lg" />
    <div
      style={{
        margin: '0 auto',
      }}
    >
      <Button text="🔪 See the Menu" to="/farms" variant="secondary" />
    </div>
  </Page>
)

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
  @media (max-width: 400px) {
    padding-left: 14px;
    padding-right: 14px;
  }
`

export default Home
