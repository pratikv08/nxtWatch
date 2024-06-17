import React, {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {IoIosSearch} from 'react-icons/io'
import Header from '../Header'
import VideoCard from '../VideoCard'
import SideBar from '../SideBar'
import FailureStatus from '../FailureStatus'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HomeContainerMain,
  HomeVideosList,
  SearchBar,
  SearchInput,
  SearchIconContainer,
  VideoCardContainer,
  HomeContainer,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  FailureRetryBtn,
  BannerContainer,
  BannerContent,
  BannerImg,
  BannerHeading,
  BannerBtn,
  BannerCloseBtn,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    filteredVideosList: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    showBanner: true,
  }

  searchInputRef = React.createRef()

  componentDidMount() {
    this.fetchHomeVideoList()
    this.focusSearchInput()
  }

  focusSearchInput = () => {
    if (this.searchInputRef.current) {
      this.searchInputRef.current.focus()
    }
  }

  fetchHomeVideoList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {searchInput} = this.state

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      methods: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const videosList = fetchedData.videos
      const filteredVideosList = videosList.map(video => ({
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
      }))
      this.setState({
        filteredVideosList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  searchVideos = () => {
    this.fetchHomeVideoList()
  }

  handleKeyDown = event => {
    if (event.key === 'Enter') {
      this.fetchHomeVideoList()
    }
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  renderBanner = () => (
    <BannerContainer data-testid="banner">
      <BannerContent>
        <BannerImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerHeading>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerHeading>
        <BannerBtn>GET IT NOW</BannerBtn>
      </BannerContent>
      <BannerCloseBtn data-testid="close" onClick={this.closeBanner}>
        x
      </BannerCloseBtn>
    </BannerContainer>
  )

  homeListSection = () => {
    const {filteredVideosList, searchInput} = this.state
    console.log(searchInput)
    return filteredVideosList.length > 0 ? (
      <VideoCardContainer>
        {filteredVideosList.map(card => (
          <VideoCard card={card} key={card.id} />
        ))}
      </VideoCardContainer>
    ) : (
      this.renderNoSearchResultView()
    )
  }

  retryAgain = () => {
    this.fetchHomeVideoList()
  }

  retrySearchingAgain = () => {
    this.focusSearchInput()
    this.fetchHomeVideoList()
  }

  renderNoSearchResultView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImg =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'
        return (
          <FailureContainer bgColor={isDarkTheme}>
            <FailureImg src={failureImg} alt="no videos" />
            <FailureHeading color={isDarkTheme}>
              No Search results found
            </FailureHeading>
            <FailurePara color={isDarkTheme}>
              Try different key words or remove search filter
            </FailurePara>
            <FailureRetryBtn type="button" onClick={this.retrySearchingAgain}>
              Retry
            </FailureRetryBtn>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFailureView = () => <FailureStatus onRetry={this.retryAgain} />

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderHomeSection = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.homeListSection()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    const {showBanner} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <HomeContainerMain data-testid="home" bgColor={isDarkTheme}>
              <Header />
              <HomeContainer>
                <SideBar />
                <HomeVideosList bgColor={isDarkTheme}>
                  {showBanner && this.renderBanner()}
                  <SearchBar>
                    <SearchInput
                      ref={this.searchInputRef}
                      type="search"
                      placeholder="Search"
                      onChange={this.changeSearchInput}
                      onKeyDown={this.handleKeyDown}
                      color={isDarkTheme}
                    />
                    <SearchIconContainer
                      bgColor={isDarkTheme}
                      onClick={this.searchVideos}
                      data-testid="searchButton"
                      type="button"
                    >
                      <IoIosSearch size={23} />
                    </SearchIconContainer>
                  </SearchBar>
                  {this.renderHomeSection()}
                </HomeVideosList>
              </HomeContainer>
            </HomeContainerMain>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
