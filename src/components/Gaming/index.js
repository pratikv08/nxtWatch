import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'
import SideBar from '../SideBar'
import Header from '../Header'
import FailureStatus from '../FailureStatus'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  GamingContainer,
  GamingSubContainer,
  TopSection,
  FireContainer,
  CustomHeading,
  GamingCardContainer,
  GamingCard,
  GamingCardImg,
  GamingCardTitle,
  View,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  FailureRetryBtn,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {gamingData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideoData()
  }

  getGamingVideoData = async () => {
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

    const response = await fetch('https://apis.ccbp.in/videos/gaming', options)

    if (response.ok === true) {
      const responseObj = await response.json()
      const gamingData = responseObj.videos.map(vid => ({
        id: vid.id,
        thumbnailUrl: vid.thumbnail_url,
        title: vid.title,
        viewCount: vid.view_count,
      }))

      this.setState({gamingData, apiStatus: apiStatusConstants.success})
    } else if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  gamingListSection = () => {
    const {gamingData} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <GamingSubContainer bgColor={isDarkTheme}>
              <TopSection bgColor={isDarkTheme}>
                <FireContainer bgColor={isDarkTheme}>
                  <SiYoutubegaming size={35} style={{color: 'red'}} />
                </FireContainer>
                <CustomHeading color={isDarkTheme}>Gaming</CustomHeading>
              </TopSection>
              <GamingCardContainer bgColor={isDarkTheme}>
                {gamingData.map(game => (
                  <Link
                    to={`/video/${game.id}`}
                    style={{textDecoration: 'none'}}
                  >
                    <GamingCard>
                      <GamingCardImg src={game.thumbnailUrl} alt="" />
                      <GamingCardTitle color={isDarkTheme}>
                        {game.title}
                      </GamingCardTitle>
                      <View>{`${game.viewCount} Watching Worlwide`}</View>
                    </GamingCard>
                  </Link>
                ))}
              </GamingCardContainer>
            </GamingSubContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  retryAgain = () => {
    this.getGamingVideoData()
  }

  renderFailureView = () => <FailureStatus onRetry={this.retryAgain} />

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderGamingSection = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.gamingListSection()
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
        <GamingContainer>
          <SideBar />
          {this.renderGamingSection()}
        </GamingContainer>
      </>
    )
  }
}

export default Gaming
