import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => (
  <StyledNav>
    <StyledLink
      target="_blank"
      href="https://etherscan.io/address/0xcff6540c125f9dec2c5427b60e89816e840b25ec#code"
    >
   Many Contract 
    </StyledLink>
    <StyledLink
      target="_blank"
      href="https://etherscan.io/address/0xb1a6876ad98fba649a66be916559039abdd3dbbe"
    >
       Moar Contract
    </StyledLink>
    <StyledLink
      target="_blank"
      href="https://uniswap.info/pair/0x55a06945E79F2d6a14b5C4f18E8E73091e2E57D6"
    >
      Buy Many
    </StyledLink>
    <StyledLink target="_blank" href="https://t.me/manyunderstandthis">
      Telegram
    </StyledLink>
    <StyledLink target="_blank" href="https://github.com/MANYToken">
      Github
    </StyledLink>
    <StyledLink target="_blank" href="https://twitter.com/MANY_GLOBAL">
      Twitter
    </StyledLink>

    <StyledLink target="_blank" href="https://docs.google.com/document/d/16pigIkBs6D_aD8W9wBumB4ZJQGJAzLR_p3tl9rfdf6I/edit?usp=sharing">
    White Paper
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
