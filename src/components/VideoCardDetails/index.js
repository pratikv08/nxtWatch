import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {IoBookmarksOutline} from 'react-icons/io5'
import Header from '../Header'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'
import FailureStatus from '../FailureStatus'
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
  DislikeContainer,
  SavedContainer,
  LikePara,
  DislikePara,
  SavePara,
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
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoCardDetails extends Component {
  state = {
    videoData: {},
    isLiked: false,
    isDisliked: false,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

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
    if (response.ok === true) {
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

      this.setState({
        videoData: videoDetailsData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
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

  retryAgain = () => {
    this.getVideoDetails()
  }

  viewCardDeatilsData = () => {
    const {videoData, isDisliked, isLiked} = this.state
    return (
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
              style={{background: isDarkTheme ? '#0f0f0f' : '#f9f9f9'}}
              key={videoData.id}
              id={videoData.id}
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
                <VideoCardDetailsDescriptionPara color={isDarkTheme}>
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
                      type="button"
                      color={isLiked}
                      onClick={this.handleLikes}
                    >
                      <AiOutlineLike size={26} />
                      <LikePara color={isLiked}>Like</LikePara>
                    </LikeContainer>
                    <DislikeContainer
                      type="button"
                      color={isDisliked}
                      onClick={this.handleDislikes}
                    >
                      <AiOutlineDislike size={26} />
                      <DislikePara color={isDisliked}>Dislike</DislikePara>
                    </DislikeContainer>
                    <SavedContainer
                      type="button"
                      color={isVideoSaved}
                      onClick={handleSaveVideo}
                    >
                      <IoBookmarksOutline size={22} />
                      <SavePara color={isVideoSaved}>
                        {isVideoSaved ? 'Saved' : 'Save'}
                      </SavePara>
                    </SavedContainer>
                  </VideoCardDetailsDescriptionDetailsContainerBottom>
                </VideoCardDetailsDescriptionDetailsContainer>
                <hr
                  style={{marginBottom: '32px', border: '1px solid #64748b'}}
                />
                <ChannelDetails>
                  <CustomChannelImg
                    src={videoData.channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <TitleChannelContainer>
                    <ChannelSubDetails>
                      <ChannelName color={isDarkTheme}>
                        {videoData.channel.name}
                      </ChannelName>
                      <Subscribers>{`${videoData.channel.subscriberCount} subscribers`}</Subscribers>
                    </ChannelSubDetails>
                    <TitleLg color={isDarkTheme}>
                      {videoData.description}
                    </TitleLg>
                  </TitleChannelContainer>
                </ChannelDetails>
                <TitleSm color={isDarkTheme}>{videoData.description}</TitleSm>
              </VideoCardDetailsDescriptionContainerTop>
            </VideoCardDetailsDescriptionContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderFailureView = () => <FailureStatus onRetry={this.retryAgain} />

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideoDetailSection = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.viewCardDeatilsData()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    // if (!videoData.channel) {
    //   return <p>Loading...</p>
    // }
    // console.log(videoData.channel.profileImageUrl)
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <Header />
        <NxtWatchContext.Consumer>
          {value => {
            const {isDarkTheme} = value
            return (
              <VideoCardDetailsContainer
                data-testid="videoItemDetails"
                bgColor={isDarkTheme}
              >
                <SideBar />
                {this.renderVideoDetailSection()}
              </VideoCardDetailsContainer>
            )
          }}
        </NxtWatchContext.Consumer>
      </>
    )
  }
}

export default VideoCardDetails
