import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => (
  <StyledNav>
    {/* <StyledLink exact activeClassName="active" to="/">
      Home
    </StyledLink> */}
    <StyledLink exact activeClassName="active" to="/">
      Menu
    </StyledLink>
    <StyledLink exact activeClassName="active" to="/create-nft">
      NFT
    </StyledLink>

    <StyledLink exact activeClassName="active" to="/comingsoons">
 
      Government 
    </StyledLink>

    {/*
    <StyledLink exact activeClassName="active" to="/comingsoons">
     Hall of fame
    </StyledLink> */}
    <StyledLink exact activeClassName="active" to="/roadmap">
      Road Map
    </StyledLink>
    {/*
    <StyledLink exact activeClassName="active" to="/my">
      My collectibles
    </StyledLink> */}
  </StyledNav>
)

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${({ theme }) => theme.spacing[3]}px;
  padding-right: ${({ theme }) => theme.spacing[3]}px;
  text-decoration: none;
  text-shadow: ${({ theme }) => theme.color.yellow.golden} -2px -1px 2px;
  font-size: 26px;
  &:hover {
    color: ${({ theme }) => theme.color.grey[500]};
  }
  &.active {
    color: ${({ theme }) => theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${({ theme }) => theme.spacing[2]}px;
    padding-right: ${({ theme }) => theme.spacing[2]}px;
  }
`

export default Nav
