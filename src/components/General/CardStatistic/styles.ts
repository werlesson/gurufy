import Card from '../Card'
import styled from 'styled-components'

export const CardStatisticContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`
export const CardStatistic = styled(Card)`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 16px !important;
  position: relative;
  overflow: hidden;
  transition: color 0.5s ease 0s;

  &:hover {
    transition: color 0.5s ease 0s;
    color: #fff !important;
    h3,
    span {
      color: #fff !important;
    }
  }

  &::before {
    content: '';
    width: 100%;
    padding-top: 100%;
    border-radius: 50%;
    background-image: linear-gradient(to top right, white, #ce1459);
    position: absolute;
    left: -50%;
    top: 4rem;
    transform: scale(0);
    transition: transform 0.8s ease 0s;
  }

  &:hover::before {
    transform: scale(3);
  }
`
