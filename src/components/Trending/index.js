import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {AiFillFire} from 'react-icons/ai'
import SideBar from '../SideBar'
import Header from '../Header'
import FailureStatus from '../FailureStatus'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  TrendingContainer,
  TrendingContainerSubContainer,
  TopSection,
  FireContainer,
  CustomHeading,
  TrendingCardContainer,
  TrendingCard,
  TrendingCardImg,
  TrendingCardDetails,
  TrendingCardTitle,
  TrendingCardViewTime,
  TrendingCardName,
  View,
  Time,
  StyledBsDot,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  FailureRetryBtn,
  TrendingCardChannelImg,
  TrendingCardViewTimeNameTitleContainer,
  TrendingCardViewTimeNameContainer,
  StyledBsDot1,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideo()
  }

  getTrendingVideo = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(
      'https://apis.ccbp.in/videos/trending',
      options,
    )
    if (response.ok === true) {
      const responseObj = await response.json()
      const trendingData = responseObj.videos.map(vid => ({
        id: vid.id,
        publishedAt: vid.published_at,
        thumbnailUrl: vid.thumbnail_url,
        title: vid.title,
        viewCount: vid.view_count,
        channel: {
          name: vid.channel.name,
          profileImageUrl: vid.channel.profile_image_url,
        },
      }))
      this.setState({
        trendingData,
        apiStatus: apiStatusConstants.success,
      })
    } else if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  trendingListSection = () => {
    const {trendingData} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <TrendingContainerSubContainer>
              <TopSection bgColor={isDarkTheme}>
                <FireContainer bgColor={isDarkTheme}>
                  <AiFillFire size={35} style={{color: 'red'}} />
                </FireContainer>
                <CustomHeading color={isDarkTheme}>Trending</CustomHeading>
              </TopSection>
              <TrendingCardContainer bgColor={isDarkTheme}>
                {trendingData.map(vid => (
                  <TrendingCard>
                    <Link
                      to={`/video/${vid.id}`}
                      style={{textDecoration: 'none'}}
                    >
                      <TrendingCardImg src={vid.thumbnailUrl} alt="" />
                    </Link>
                    <Link
                      to={`/video/${vid.id}`}
                      style={{textDecoration: 'none'}}
                    >
                      <TrendingCardDetails>
                        <TrendingCardChannelImg
                          src={vid.channel.profileImageUrl}
                          alt=""
                        />
                        <TrendingCardViewTimeNameTitleContainer>
                          <TrendingCardTitle color={isDarkTheme}>
                            {vid.title}
                          </TrendingCardTitle>
                          <TrendingCardViewTimeNameContainer>
                            <TrendingCardName>
                              {vid.channel.name}
                            </TrendingCardName>
                            <StyledBsDot1 />
                            <TrendingCardViewTime>
                              <View>{`${vid.viewCount} views`}</View>
                              <StyledBsDot />
                              <Time>{vid.publishedAt}</Time>
                            </TrendingCardViewTime>
                          </TrendingCardViewTimeNameContainer>
                        </TrendingCardViewTimeNameTitleContainer>
                      </TrendingCardDetails>
                    </Link>
                  </TrendingCard>
                ))}
              </TrendingCardContainer>
            </TrendingContainerSubContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  retryAgain = () => {
    this.getTrendingVideo()
  }

  renderFailureView = () => <FailureStatus onRetry={this.retryAgain} />

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderTrendingSection = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.trendingListSection()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <TrendingContainer>
          <SideBar />
          {this.renderTrendingSection()}
        </TrendingContainer>
      </>
    )
  }
}

export default Trending
