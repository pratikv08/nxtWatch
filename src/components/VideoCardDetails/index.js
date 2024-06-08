import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  VideoCardDetailsContainer,
  VideoCardDetailsDescriptionContainer,
  VideoCardDetailsDescriptionVideo,
  VideoCardDetailsDescriptionVideoSrc,
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
    console.log(videoData.videoUrl)
    return (
      <>
        <Header />
        <VideoCardDetailsContainer>
          <SideBar />
          <VideoCardDetailsDescriptionContainer>
            <VideoCardDetailsDescriptionVideo controls>
              <source src={videoData.videoUrl} type="video/mp4" />
            </VideoCardDetailsDescriptionVideo>
            {videoData.description}
          </VideoCardDetailsDescriptionContainer>
        </VideoCardDetailsContainer>
      </>
    )
  }
}

export default VideoCardDetails
