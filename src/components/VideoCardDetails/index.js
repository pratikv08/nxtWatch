import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {IoBookmarksOutline} from 'react-icons/io5'
import Header from '../Header'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'
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
  TitleLg,
  TitleSm,
  StyledBsDot,
  VideoCardDetailsDescriptionContainerTop,
} from './styledComponents'

class VideoCardDetails extends Component {
  state = {videoData: {}, isLiked: false, isDisliked: false}

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

  handleLikes = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  handleDislikes = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  render() {
    const {videoData, isDisliked, isLiked} = this.state
    if (!videoData.channel) {
      return <p>Loading...</p>
    }
    console.log(videoData.channel.profileImageUrl)

    return (
      <>
        <Header />
        <VideoCardDetailsContainer>
          <SideBar />

          <NxtWatchContext.Consumer>
            {value => {
              const {
                isDarkTheme,
                savedVideos,
                addVideoToSaved,
                removeVideoFromSaved,
              } = value
              const isVideoSaved = savedVideos.some(
                video => video.id === videoData.id,
              )

              const handleSaveVideo = () => {
                if (isVideoSaved) {
                  removeVideoFromSaved(videoData.id)
                } else {
                  addVideoToSaved(videoData)
                }
              }
              console.log(savedVideos)
              return (
                <VideoCardDetailsDescriptionContainer
                  style={{background: isDarkTheme ? 'grey' : ''}}
                >
                  <VideoCardDetailsDescriptionVideo>
                    <ReactPlayer
                      url={videoData.videoUrl}
                      controls
                      width="100%"
                      height="100%"
                    />
                  </VideoCardDetailsDescriptionVideo>
                  <VideoCardDetailsDescriptionContainerTop>
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
                        <LikeContainer
                          onClick={this.handleLikes}
                          style={{color: isLiked ? '#3b82f6' : 'black'}}
                        >
                          <AiOutlineLike size={24} />
                          <LikePara>Like</LikePara>
                        </LikeContainer>
                        <LikeContainer
                          onClick={this.handleDislikes}
                          style={{color: isDisliked ? '#3b82f6' : 'black'}}
                        >
                          <AiOutlineDislike size={24} />
                          <LikePara>Dislike</LikePara>
                        </LikeContainer>
                        <LikeContainer
                          onClick={handleSaveVideo}
                          style={{color: isVideoSaved ? '#3b82f6' : 'black'}}
                        >
                          <IoBookmarksOutline size={22} />
                          <LikePara>{isVideoSaved ? 'Saved' : 'Save'}</LikePara>
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
                        <TitleLg>{videoData.description}</TitleLg>
                      </TitleChannelContainer>
                    </ChannelDetails>
                    <TitleSm>{videoData.description}</TitleSm>
                  </VideoCardDetailsDescriptionContainerTop>
                </VideoCardDetailsDescriptionContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </VideoCardDetailsContainer>
      </>
    )
  }
}

export default VideoCardDetails
