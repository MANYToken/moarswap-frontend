import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0xc2edad668740f1aa35e4d8f227fb8e17dca888cd#code">
        ChadChef Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0x55a06945E79F2d6a14b5C4f18E8E73091e2E57D6">
        Uniswap MOAR-ETH
      </StyledLink>
      <StyledLink target="_blank" href="https://t.me/manyunderstandthis">
        Telegram
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/MANYToken">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/MANYTOKEN">
        Twitter
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  @media (max-width: 400px) {
    padding-top: 350px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: auto;
  }
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  text-shadow: #5b3926 2px 3px 0px;
  font-weight: 700;
  font-size: 24px;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }

  @media (max-width: 400px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`

export default Nav
