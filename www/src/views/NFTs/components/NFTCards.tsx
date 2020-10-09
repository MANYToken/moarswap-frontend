import React from 'react';
import styled, { keyframes } from 'styled-components'
import Card from '../../../components/Card';
import CardImage from '../../../components/CardImage';
import CardContent from '../../../components/CardContent';
import Spacer from '../../../components/Spacer';
import Button from '../../../components/Button';
import Loader from '../../../components/Loader'

interface NFTCards {
  path: string,
  nfts: Array<NFT>
}

const NFTCards: React.FC<NFTCards> = ({path, nfts}) => {
  const nftRows = nfts.reduce((rows, nft, i) => (i % 3 === 0 ? rows.push([nft])
    : rows[rows.length - 1].push(nft)) && rows, []);

  return (
    <StyledCards>
      {!!nftRows.length ? (
        nftRows.map((nftRow, i) => (
          <StyledRow key={i}>
            {nftRow.map((nft: any, j: any) =>
              (<React.Fragment key={j}>
                <NFTCard nft={nft} path={path} />
                {(j === 0 || j === 1) && <StyledSpacer />}
              </React.Fragment>)
            )}
          </StyledRow>
        ))
      ) : (
          <StyledLoadingWrapper>
            <Loader text="MOAR MOAR ..." />
          </StyledLoadingWrapper>
        )}
    </StyledCards>
  )
}

interface NFT {
  id: number,
  title: string,
  price?: any,
  image: string,
  subtitle: string
}

interface NFTCardProps {
  nft: NFT,
  path: string
}

const NFTCard: React.FC<NFTCardProps> = ({ nft, path }) => {
  const { id, title, price, image } = nft;

  return (
    <StyledCardWrapper>
      <StyledCardAccent />
      <Card>
        <CardContent>
          <StyledContent>
            <CardImage>
              <img
                src={image}
                style={{
                  height: '200px',
                  maxWidth: '200px'
                }}
              />
            </CardImage>
            <StyledTitle>{title}</StyledTitle>
            { price ? <StyledPrice>{`Ξ ${price}`}</StyledPrice> : null  }
            <Spacer />
            <Button
              text={'Select'}
              to={`/${path}/${id}`}>
            </Button>
          </StyledContent>
        </CardContent>
      </Card>
    </StyledCardWrapper>
  )
}

const StyledPrice = styled.span`
  font-weight: bold
`

const RainbowLight = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`

const StyledCardAccent = styled.div`
background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
);
background-size: 300% 300%;
animation: ${RainbowLight} 2s linear infinite;
border-radius: 12px;
filter: blur(6px);
position: absolute;
top: -2px;
right: -2px;
bottom: -2px;
left: -2px;
z-index: -1;
`

const StyledCards = styled.div`
width: 900px;
@media (max-width: 768px) {
    width: 100%;
}
`

const StyledLoadingWrapper = styled.div`
align-items: center;
display: flex;
flex: 1;
justify-content: center;
`

const StyledRow = styled.div`
display: flex;
margin-bottom: ${(props) => props.theme.spacing[4]}px;
flex-flow: row wrap;
@media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
}
`

const StyledCardWrapper = styled.div`
display: flex;
width: calc((900px - ${(props) => props.theme.spacing[4]}px * 2) / 3);
position: relative;
`

const StyledTitle = styled.h4`
color: ${(props) => props.theme.color.grey[600]};
font-size: 24px;
font-weight: 700;
margin: ${(props) => props.theme.spacing[2]}px 0 0;
padding: 0;
`

const StyledContent = styled.div`
align-items: center;
display: flex;
flex-direction: column;
`

const StyledSpacer = styled.div`
height: ${(props) => props.theme.spacing[4]}px;
width: ${(props) => props.theme.spacing[4]}px;
`

export default NFTCards;