import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'

export const EachVideoCard = styled.li`
  margin-bottom: 30px;
  width: 100%;
  // max-width: 320px;

  @media screen and (min-width: 576px) {
    width: 48%;
  }
  @media screen and (min-width: 768px) {
    width: calc(50% - 18px); // Adjust for gap
  }

  @media screen and (min-width: 1024px) {
    width: calc(33.333% - 18px); // Adjust for gap
  }
`
export const CustomImg = styled.img`
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 11px;
`
export const CustomChannelImg = styled.img`
  width: 40px;
  margin-right: 16px;
  @media screen and (min-width: 576px) {
    margin-right: 16px;
  }
`
export const TitleChannelContainer = styled.div``
export const Title = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 16px;
`
export const ChannelViewsDate = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  // justify-content:space-between;
  font-size: 13px;
`
export const ChannelName = styled.p`
  margin-top: 0px;
  margin-right: 5px;
  font-size: 14px;
  @media screen and (min-width: 576px) {
    font-size: 13px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const Views = styled.p`
  margin-top: 0px;
  margin-right: 5px;
  margin-left: 5px;
  font-size: 14px;
  @media screen and (min-width: 576px) {
    font-size: 13px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const Date = styled.p`
  margin-top: 0px;
  margin-right: 5px;
  margin-left: 5px;
  font-size: 14px;
  @media screen and (min-width: 576px) {
    font-size: 13px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const StyledBsDot = styled(BsDot)`
  font-size: 18px;
  margin-bottom: 10px;
`
