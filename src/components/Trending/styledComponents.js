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
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 79%;
  height: 60vh;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 79%;
  padding-top: 28px;
`
export const FailureImg = styled.img`
  width: 50%;
`
export const FailureHeading = styled.h2`
  margin-top: 32px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 28px;
`
export const FailurePara = styled.p`
  margin-top: 0px;
  margin-bottom: 4px;
  font-size: 20px;
`
export const FailureRetryBtn = styled.button`
  margin-top: 16px;
  padding: 12px 24px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 15px;
  cursor: pointer;
`
