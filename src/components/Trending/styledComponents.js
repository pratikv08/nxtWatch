import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'

export const TrendingContainer = styled.div`
  min-height: 120vh;
  display: flex;
`

export const TrendingContainerSubContainer = styled.div`
  width: 79%;
`
export const TopSection = styled.div`
  display: flex;
  align-items: center;
  background-color: #ebebeb;
  padding: 4px 40px;
`
export const FireContainer = styled.div`
  // border: 1px red solid;
  border-radius: 100%;
  margin-right: 20px;
  padding: 12px 13px;
  background: #d7dfe9;
`
export const CustomHeading = styled.h1``
export const TrendingCardContainer = styled.ul`
  padding: 40px;
  padding-top: 32px;
  height:100vh;
  overflow:auto;
  margin-top: 0px;
}
`
export const TrendingCard = styled.li`
  display: flex;
  margin-bottom: 40px;
`

export const TrendingCardImg = styled.img`
  width: 250px;
  margin-right: 20px;
`
export const TrendingCardDetails = styled.div``
export const TrendingCardTitle = styled.div``
export const TrendingCardViewTime = styled.div`
  display: flex;
  align-items: center;
`
export const TrendingCardName = styled.div``
export const View = styled.p``
export const Name = styled.p``
export const Time = styled.p``
export const StyledBsDot = styled(BsDot)`
  font-size: 18px;
  margin-top: 4px;
`
