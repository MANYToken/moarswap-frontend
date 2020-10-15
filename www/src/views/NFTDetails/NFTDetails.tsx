import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Spacer from '../../components/Spacer'
import Button from '../../components/Button'
import Card from '../../components/Card'

interface NFTProps {
  nfts: Array<NFTDetails>
}

interface NFTDetails {
  id: number,
  title: string,
  price?: any,
  image: string,
  subtitle: string
}

const NFTDetails: React.FC<NFTProps> = ({ nfts }) => {
  const { nftId } = useParams()
  const {
    price,
    title,
    subtitle,
    image,
  } = nfts.find((nft) => nft.id === +nftId)

  return (
    <>
      <Spacer size="lg" />
      <img
        src={image}
        alt="nft details"
        style={{
          maxWidth: '500px',
        }}
      />
      <StyledContainer>
        <Spacer size="lg" />
        <More>
          <StyledTitle>
            {title}
          </StyledTitle>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
        </More>
        <Spacer size="lg" />
      </StyledContainer>

      {
        price
          ? (
            <div>
              <Button
                text={`Purchase for  Ξ ${price}`}
              />
            </div>
          ) : null
      }
    </>
  )
}

const More = styled(Card)`
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 100px;
`

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
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

export default NFTDetails
