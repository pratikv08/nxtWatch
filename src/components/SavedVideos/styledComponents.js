import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  min-height: 120vh;
  display: flex;
`
export const SavedVideosSubContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 79%;
  }
`

export const TrendingContainerSubContainer = styled.div``
export const TopSection = styled.div`
  display: flex;
  align-items: center;
  background-color: #ebebeb;
  padding: 12px 28px;
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
export const SavedVideoCardContainer = styled.ul`
  list-style-type: none;
  padding-top: 24px;
  padding: 24px 16px;
  @media screen and (min-width: 576px) {
    padding: 24px 24px;
  }
  @media screen and (min-width: 768px) {
    padding: 24px 36px;
  }
`
export const SavedVideoCard = styled.li`
  display: flex;
  margin-bottom: 28px;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
  }
`
export const SavedVideosCardImg = styled.img`
  width: 100%;
  margin-right: 20px;
  @media screen and (min-width: 576px) {
    width: 300px;
  }
`
export const SavedVideoCardDetails = styled.div`
  display: flex;
  margin-top: 12px;
  flex-direction: row;
  align-items: flex-start;
  @media screen and (min-width: 576px) {
    margin-top: 0px;
  }
`

export const SavedVideoCardChannelImg = styled.img`
  width: 45px;
  margin-right: 16px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const SavedVideoCardTitleNameViewTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const SavedVideoCardNameViewTimeContainer = styled.div`
  display: flex;
  // align-items: flex-start;
  margin-top: 4px;
  @media screen and (min-width: 576px) {
    flex-direction: column;
  }
`

export const SavedVideoCardTitle = styled.h4`
  margin-bottom: 8px;
  margin-top: 0px;
  font-size: 17px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`
export const SavedVideoCardName = styled.p`
  margin-bottom: 0px;
  margin-top: 0px;
  margin-right: 18px;
`
export const SavedVideoCardViewTime = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    margin-top: 10px;
  }
`
export const View = styled.p`
  margin-right: 18px;
  margin-top: 0px;
`
export const Time = styled.p`
  margin-top: 0px;
`

export const NoSavedVideosContainer = styled.div`
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
export const NoSavedVideosImg = styled.img`
  width: 80%;
  @media screen and (min-width: 576px) {
    width: 60%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const NoSavedVideosHeading = styled.h2`
  margin-top: 32px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 23px;
  text-align: center;
  @media screen and (min-width: 576px) {
    font-size: 28px;
  }
  @media screen and (min-width: 768px) {
    font-size: 29px;
  }
`
export const NoSavedVideosPara = styled.p`
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
