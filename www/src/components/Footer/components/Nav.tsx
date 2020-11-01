import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => (
  <StyledNav>
    <StyledLink
      target="_blank"
      href="https://etherscan.io/address/0xcff6540c125f9dec2c5427b60e89816e840b25ec#code"
    >
      ChadChef Contract
    </StyledLink>
    <StyledLink
      target="_blank"
      href="https://uniswap.info/pair/0x55a06945E79F2d6a14b5C4f18E8E73091e2E57D6"
    >
      Uniswap MANY-ETH
    </StyledLink>
    <StyledLink target="_blank" href="https://t.me/manyunderstandthis">
      Telegram
    </StyledLink>
    <StyledLink target="_blank" href="https://github.com/MANYToken">
      Github
    </StyledLink>
    <StyledLink target="_blank" href="https://twitter.com/Chadmunity">
      Twitter
    </StyledLink>
  </StyledNav>
)

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  @media (max-width: 400px) {
    margin-top: 350px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: auto;
  }
`

// export as common styled component
const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.black};
  padding-left: ${({ theme }) => theme.spacing[3]}px;
  padding-right: ${({ theme }) => theme.spacing[3]}px;
  text-decoration: none;
  text-shadow:  ${({ theme }) => theme.color.yellow.golden} 1px 1px 5px;
  font-weight: 700;
  font-size: 24px;
  &:hover {
    color: ${({ theme }) => theme.color.grey[500]};
  }

  @media (max-width: 400px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export default Nav
