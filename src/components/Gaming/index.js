import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import SideBar from '../SideBar'
import Header from '../Header'
import FailureStatus from '../FailureStatus'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  GamingContainerMain,
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
    } else {
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
              <TopSection bgColor={isDarkTheme} data-testid="banner">
                <FireContainer bgColor={isDarkTheme}>
                  <SiYoutubegaming size={35} style={{color: 'red'}} />
                </FireContainer>
                <CustomHeading color={isDarkTheme}>Gaming</CustomHeading>
              </TopSection>
              <GamingCardContainer bgColor={isDarkTheme}>
                {gamingData.map(game => (
                  <Link
                    to={`/videos/${game.id}`}
                    style={{textDecoration: 'none'}}
                  >
                    <GamingCard key={game.id}>
                      <GamingCardImg
                        src={game.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <GamingCardTitle color={isDarkTheme}>
                        {game.title}
                      </GamingCardTitle>
                      <View>{`${game.viewCount} Watching Worldwide`}</View>
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
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <GamingContainerMain data-testid="gaming" bgColor={isDarkTheme}>
              <Header />
              <GamingContainer bgColor={isDarkTheme}>
                <SideBar />
                {this.renderGamingSection()}
              </GamingContainer>
            </GamingContainerMain>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
