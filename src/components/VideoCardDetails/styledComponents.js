import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'

export const VideoCardDetailsContainer = styled.div`
  display: flex;
  // align-items: center;
  // flex-direction: column;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
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
  color: ${props => (props.color ? '#f1f5f9' : ' #181818')};
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
  color: #64748b;
`
export const Views = styled.p``
export const Time = styled.p``
export const VideoCardDetailsDescriptionDetailsContainerBottom = styled.div`
  display: flex;
  align-items: center;
`
export const LikeContainer = styled.button`
  display: flex;
  align-items: center;
  margin-right: 12px;
  margin-left: 12px;
  cursor: pointer;
  user-select: none;
  font-weight: 600;
  outline: none;
  border: none;
  background: transparent;
  color: ${props => (props.color ? '#2563eb' : '#64748b')};
`
export const DislikeContainer = styled.button`
  display: flex;
  align-items: center;
  margin-right: 12px;
  margin-left: 12px;
  cursor: pointer;
  user-select: none;
  font-weight: 600;
  outline: none;
  border: none;
  background: transparent;
  color: ${props => (props.color ? '#2563eb' : '#64748b')};
`
export const SavedContainer = styled.button`
  display: flex;
  align-items: center;
  margin-right: 12px;
  margin-left: 12px;
  cursor: pointer;
  user-select: none;
  font-weight: 600;
  outline: none;
  border: none;
  background: transparent;
  color: ${props => (props.color ? '#2563eb' : '#64748b')};
`
export const LikePara = styled.p`
  margin-right: 4px;
  margin-left: 4px;
  color: ${props => (props.color ? '#2563eb' : '#64748b')};
`

export const DislikePara = styled.p`
  margin-right: 4px;
  margin-left: 4px;
  color: ${props => (props.color ? '#2563eb' : '#64748b')};
`
export const SavePara = styled.p`
  margin-right: 4px;
  margin-left: 4px;
  color: ${props => (props.color ? '#2563eb' : '#64748b')};
`

export const ChannelDetails = styled.div`
  display: flex;
  align-items: flex-start;
`
export const CustomChannelImg = styled.img`
  width: 50px;
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    width: 55px;
    margin-right: 24px;
  }
`
export const TitleChannelContainer = styled.div``
export const ChannelSubDetails = styled.div``
export const ChannelName = styled.p`
  margin-bottom: 8px;
  margin-top: 2px;
  color: ${props => (props.color ? '#f1f5f9' : '#181818')};
`
export const Subscribers = styled.p`
  margin-top: 8px;
  margin-bottom: 24px;
  color: #64748b;
`
export const TitleLg = styled.p`
  display: none;
  color: ${props => (props.color ? '#f1f5f9' : '#64748b')};
  @media screen and (min-width: 768px) {
    display: inline;
    line-height: 1.7;
    font-size: 16px;
  }
`
export const TitleSm = styled.p`
  display: inline;
  line-height: 1.7;
  font-size: 15px;
  color: ${props => (props.color ? '#f1f5f9' : '#181818')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const StyledBsDot = styled(BsDot)`
  font-size: 18px;
  margin-top: 4px;
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
