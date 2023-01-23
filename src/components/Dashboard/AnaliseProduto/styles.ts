import { Skeleton as SkeletonAntd, Typography } from 'antd'
import Card from 'components/General/Card'
import styled from 'styled-components'

export const Wraper = styled.section`
  margin-top: 4rem;
`

export const Header = styled.article``

export const TitleSection = styled(Typography.Title)`
  color: #0007 !important;
  margin-bottom: 0 !important;
`

export const Skeleton = styled(SkeletonAntd.Node)`
  height: 250px;
  width: 100% !important;

  .ant-skeleton-image {
    height: 100% !important;
    width: 100% !important;
  }
`

export const Content = styled.article`
  display: grid;
  gap: 1rem;
  grid-template:
    'slot1 slot1 slot2'
    'slot3 slot3 slot3'
    'slot4 slot4 slot4';
  @media only screen and (max-width: 940px) {
    grid-template:
      'slot1'
      'slot2'
      'slot3'
      'slot4';
  }
`
export const Slot1 = styled(Card)`
  grid-area: slot1;
`
export const Slot2 = styled(Card)`
  grid-area: slot2;
`
export const Slot3 = styled(Card)`
  grid-area: slot3;
`
export const Slot4 = styled(Card)`
  grid-area: slot4;
`
