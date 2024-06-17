import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'

export const EachVideoCard = styled.li`
  margin-bottom: 30px;
  width: 100%;

  @media screen and (min-width: 576px) {
    width: 48%;
  }
  @media screen and (min-width: 768px) {
    width: calc(50% - 18px);
    margin-bottom: 12px;
  }

  @media screen and (min-width: 1024px) {
    width: calc(33.333% - 18px);
  }
`
export const CustomImg = styled.img`
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 11px;
  padding: 2px 8px;
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
  color: ${props => (props.color ? '#f1f5f9' : ' #181818')};
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`
export const ChannelViewsDate = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  // justify-content:space-between;
  font-size: 13px;
  color: ${props => (props.color ? '#64748b' : '#1e293b')};
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ViewsDateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
  @media screen and (min-width: 576px) {
    margin-top: 6px;
  }
  // @media screen and (min-width: 768px) {
  //   font-size: 15px;
  // }
`
export const ChannelName = styled.p`
  margin-top: 0px;
  margin-right: 3px;
  font-size: 14px;
  @media screen and (min-width: 576px) {
    font-size: 15px;
    margin-bottom: 0px;
  }
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  @media screen and (min-width: 1250px) {
    font-size: 15px;
  }
`
export const Views = styled.p`
  margin-top: 0px;
  margin-right: 3px;
  margin-left: 3px;
  font-size: 14px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
    margin-left: 0px;
  }
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  @media screen and (min-width: 1250px) {
    font-size: 15px;
  }
`
export const Date = styled.p`
  margin-top: 0px;
  margin-right: 3px;
  margin-left: 3px;
  font-size: 14px;
  @media screen and (min-width: 576px) {
    font-size: 13px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1250px) {
    font-size: 14px;
  }
`
export const StyledBsDot1 = styled(BsDot)`
  font-size: 18px;
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const StyledBsDot = styled(BsDot)`
  font-size: 18px;
  margin-bottom: 10px;
`
