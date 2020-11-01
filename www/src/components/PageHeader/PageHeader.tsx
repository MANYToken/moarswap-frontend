import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import Card from '../Card'

interface PageHeaderProps {
  icon: React.ReactNode
  subtitle?: string
  title?: string
  // eslint-disable-next-line camelcase
  add_lp?: string
  // eslint-disable-next-line camelcase
  pair_url?: string
}

const More = styled(Card)`
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 100px;
`

const PageHeader: React.FC<PageHeaderProps> = ({
  icon,
  subtitle,
  title,
  // eslint-disable-next-line camelcase
  pair_url,
}) => (
  <Container size="md">
    <StyledPageHeader>
      <StyledIcon>{icon}</StyledIcon>
      <More>
        <StyledTitle>
          {/* eslint-disable-next-line camelcase */}
          <a href={pair_url}>{title}</a>
        </StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </More>
    </StyledPageHeader>
  </Container>
)

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  padding-top: ${(props) => props.theme.spacing[4]}px;
  margin: 0 auto;
`

const StyledIcon = styled.div`
  font-size: 120px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 120px;
  text-align: center;
`

const StyledTitle = styled.h1`
  font-family: 'Kaushan Script', sans-serif;
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  padding: 10px;
  text-align: center;
  > a {
    text-decoration: none;
  }
`

const StyledSubtitle = styled.h3`
  color: ${(props) => props.theme.color.grey[400]};
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 10px;
  text-align: center;
`

export default PageHeader
