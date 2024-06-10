import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'

export const VideoCardDetailsContainer = styled.div`
  display: flex;
  // align-items: center;
  // flex-direction: column;
  //  background-color: #f9f9f9;
  min-height: 100vh;
  width: 100%;
`
export const VideoCardDetailsDescriptionContainer = styled.div`
  width: 100%;
  padding: 0px;
  padding-top: 16px;
  min-height: 150vh;
  @media screen and (min-width: 768px) {
    width: 79%;
    padding: 28px;
  }
`
export const VideoCardDetailsDescriptionContainerTop = styled.div`
  padding: 12px;
  @media screen and (min-width: 768px) {
    padding: 28px;
  }
`
export const VideoCardDetailsDescriptionVideo = styled.div`
  width: 100%;
  margin-bottom: 12px;
  height: 260px;
  @media screen and (min-width: 768px) {
    height: 400px;
  }
  @media screen and (min-width: 768px) {
    height: 500px;
  }
`

export const VideoCardDetailsDescriptionPara = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 20px;
`
export const VideoCardDetailsDescriptionDetailsContainer = styled.div`
  flex-direction: column;
  align-items: flex-start;
  display: flex;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const VideoCardDetailsDescriptionDetailsContainerTop = styled.div`
  display: flex;
  align-items: center;
`
export const Views = styled.p``
export const Time = styled.p``
export const VideoCardDetailsDescriptionDetailsContainerBottom = styled.div`
  display: flex;
  align-items: center;
`
export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
  margin-left: 12px;
  cursor: pointer;
  user-select: none;
`
export const LikePara = styled.p`
  margin-right: 4px;
  margin-left: 4px;
`

export const ChannelDetails = styled.div`
  display: flex;
  align-items: flex-start;
`
export const CustomChannelImg = styled.img`
  width: 50px;
  margin-right: 24px;

  @media screen and (min-width: 768px) {
    width: 60px;
    margin-right: 30px;
  }
`
export const TitleChannelContainer = styled.div``
export const ChannelSubDetails = styled.div``
export const ChannelName = styled.p`
  margin-bottom: 8px;
  margin-top: 2px;
`
export const Subscribers = styled.p`
  margin-top: 8px;
  margin-bottom: 24px;
`
export const TitleLg = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline;
  }
`
export const TitleSm = styled.p`
  display: inline;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const StyledBsDot = styled(BsDot)`
  font-size: 18px;
  margin-top: 4px;
`
