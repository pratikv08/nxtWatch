import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'

export const TrendingContainer = styled.div`
  min-height: 120vh;
  display: flex;
`

export const TrendingContainerSubContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 79%;
  }
`
export const TopSection = styled.div`
  display: flex;
  align-items: center;
  background-color: #ebebeb;
  padding: 12px 20px;
  @media screen and (min-width: 768px) {
    padding: 4px 40px;
  }
`
export const FireContainer = styled.div`
  // border: 1px red solid;
  border-radius: 100%;
  margin-right: 20px;
  padding: 4px 6px;
  background: #d7dfe9;
  @media screen and (min-width: 768px) {
    padding: 12px 13px;
  }
`
export const CustomHeading = styled.h1`
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const TrendingCardContainer = styled.ul`
  padding: 16px;
  padding-top: 32px;
  height:100vh;
  overflow:auto;
  margin-top: 0px;
  list-style-type:none;
  @media screen and (min-width:576px){
     padding: 20px;
  }
  @media screen and (min-width:768px){
     padding: 40px;
  }
}
`
export const TrendingCard = styled.li`
  margin-bottom: 30px;

  @media screen and (min-width: 576px) {
    display: flex;
    margin-bottom: 40px;
    align-items: flex-start;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`

export const TrendingCardImg = styled.img`
  width: 100%;
  margin-right: 14px;
  @media screen and (min-width: 576px) {
    width: 255px;
    margin-right: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
    margin-right: 20px;
  }
`
export const TrendingCardDetails = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 6px;
  @media screen and (min-width: 576px) {
    margin-top: 0px;
  }
`
export const TrendingCardChannelImg = styled.img`
  width: 45px;
  border-radius: 50%;
  margin-right: 16px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const TrendingCardViewTimeNameTitleContainer = styled.div``
export const TrendingCardViewTimeNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const TrendingCardTitle = styled.h3`
  font-size: 15px;
  font-weight: 500;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (min-width: 576px) {
    font-size: 18px;
    margin-bottom: 0px;
  }
  @media screen and (min-width: 768px) {
    font-size: 19px;
    margin-bottom: 0px;
  }
`
export const TrendingCardViewTime = styled.div`
  display: flex;
  align-items: center;
`
export const TrendingCardName = styled.p`
  font-size: 14px;
  margin-bottom: 2px;
  margin-top: 0px;

  @media screen and (min-width: 576px) {
    font-size: 18px;
    margin-bottom: 8px;
    margin-top: 8px;
  }
  @media screen and (min-width: 768px) {
    font-size: 19px;
    margin-bottom: 8px;
    margin-top: 8px;
  }
`
export const View = styled.p`
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const Time = styled.p`
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const StyledBsDot1 = styled(BsDot)`
  font-size: 18px;
  // margin-bottom: 8px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const StyledBsDot = styled(BsDot)`
  font-size: 18px;
  // margin-bottom: 8px;
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
  @media screen and (min-width: 768px) {
    width: 79%;
  }
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px;
  padding-top: 60px;
  @media screen and (min-width: 576px) {
    padding-top: 70px;
  }
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    width: 79%;
  }
`
export const FailureImg = styled.img`
  width: 80%;
  @media screen and (min-width: 576px) {
    width: 60%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const FailureHeading = styled.h2`
  margin-top: 32px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  @media screen and (min-width: 576px) {
    font-size: 28px;
  }
  @media screen and (min-width: 768px) {
    font-size: 29px;
  }
`
export const FailurePara = styled.p`
  margin-top: 0px;
  margin-bottom: 4px;
  font-size: 16px;
  text-align: center;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 21px;
  }
`
export const FailureRetryBtn = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 15px;
  cursor: pointer;
`
