import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  VideoCardDetailsContainer,
  VideoCardDetailsDescriptionContainer,
  VideoCardDetailsDescriptionVideo,
  VideoCardDetailsDescriptionPara,
  VideoCardDetailsDescriptionDetailsContainerTop,
  Views,
  Time,
  VideoCardDetailsDescriptionDetailsContainerBottom,
  VideoCardDetailsDescriptionDetailsContainer,
  LikeContainer,
  LikePara,
  ChannelDetails,
  CustomChannelImg,
  TitleChannelContainer,
  ChannelSubDetails,
  ChannelName,
  Subscribers,
  Title,
  StyledBsDot,
} from './styledComponents'

class VideoCardDetails extends Component {
  state = {videoData: {}}

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const responseObj = await response.json()
    const videoDetails = responseObj.video_details
    const videoDetailsData = {
      channel: {
        name: videoDetails.channel.name,
        profileImageUrl: videoDetails.channel.profile_image_url,
        subscriberCount: videoDetails.channel.subscriber_count,
      },
      description: videoDetails.description,
      publishedAt: videoDetails.published_at,
      thumbnailUrl: videoDetails.thumbnail_url,
      id: videoDetails.id,
      title: videoDetails.title,
      videoUrl: videoDetails.video_url,
      viewCount: videoDetails.view_count,
    }

    this.setState({videoData: videoDetailsData})
  }

  render() {
    const {videoData} = this.state
    if (!videoData.channel) {
      return <p>Loading...</p>
    }
    console.log(videoData.channel.profileImageUrl)

    return (
      <>
        <Header />
        <VideoCardDetailsContainer>
          <SideBar />
          <VideoCardDetailsDescriptionContainer>
            <VideoCardDetailsDescriptionVideo>
              <ReactPlayer
                url={videoData.videoUrl}
                controls
                width="100%"
                height="500px"
              />
            </VideoCardDetailsDescriptionVideo>
            <VideoCardDetailsDescriptionPara>
              {videoData.title}
            </VideoCardDetailsDescriptionPara>
            <VideoCardDetailsDescriptionDetailsContainer>
              <VideoCardDetailsDescriptionDetailsContainerTop>
                <Views>{`${videoData.viewCount} views`}</Views>
                <StyledBsDot />
                <Time>{videoData.publishedAt}</Time>
              </VideoCardDetailsDescriptionDetailsContainerTop>
              <VideoCardDetailsDescriptionDetailsContainerBottom>
                <LikeContainer>
                  <AiOutlineLike size={24} />
                  <LikePara>Like</LikePara>
                </LikeContainer>
                <LikeContainer>
                  <AiOutlineDislike size={24} />
                  <LikePara>Dislike</LikePara>
                </LikeContainer>
                <LikeContainer>
                  <AiOutlineDislike size={24} />
                  <LikePara>Save</LikePara>
                </LikeContainer>
              </VideoCardDetailsDescriptionDetailsContainerBottom>
            </VideoCardDetailsDescriptionDetailsContainer>
            <hr />
            <ChannelDetails>
              <CustomChannelImg
                src={videoData.channel.profileImageUrl}
                alt=""
              />
              <TitleChannelContainer>
                <ChannelSubDetails>
                  <ChannelName>{videoData.channel.name}</ChannelName>
                  <Subscribers>{`${videoData.channel.subscriberCount} subscribers`}</Subscribers>
                </ChannelSubDetails>
                <Title>{videoData.title}</Title>
              </TitleChannelContainer>
            </ChannelDetails>
          </VideoCardDetailsDescriptionContainer>
        </VideoCardDetailsContainer>
      </>
    )
  }
}

export default VideoCardDetails
