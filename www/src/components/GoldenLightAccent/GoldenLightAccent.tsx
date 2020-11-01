import styled, { keyframes } from 'styled-components'

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

interface GoldenLightAccent {
  container?: boolean,
}

const GoldenLightAccent = styled.div<GoldenLightAccent>`
  background: linear-gradient(
    45deg,
    rgba(250, 250, 210, 1) 0%,
    rgba(238, 232, 170, 1) 10%,
    rgba(240, 230, 140, 1) 20%,
    rgba(218, 165, 32, 1) 30%,
    rgba(255, 215, 0, 1) 40%,
    rgba(255, 165, 0, 1) 50%,
    rgba(255, 140, 0, 1) 60%,
    rgba(205, 133, 63, 1) 70%,
    rgba(210, 105, 30, 1) 80%,
    rgba(139, 69, 19, 1) 90%,
    rgba(255, 215, 0, 1) 100%
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
  margin: ${({ container }) => (container ? '-25px' : 0)};
`

export default GoldenLightAccent
