import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {IoIosSearch} from 'react-icons/io'
import Cookies from 'js-cookie'
import Header from '../Header'
import VideoCard from '../VideoCard'
import SideBar from '../SideBar'
import Trending from '../Trending'
import Gaming from '../Gaming'
import {
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
    activeSection: 'Home',
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.fetchHomeVideoList()
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
    } else if (response.status !== 401) {
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

  homeListSection = () => {
    const {filteredVideosList, searchInput} = this.state
    console.log(searchInput)
    return (
      <VideoCardContainer>
        {filteredVideosList.map(card => (
          <VideoCard card={card} key={card.id} />
        ))}
      </VideoCardContainer>
    )
  }

  renderFailureView = () => (
    <FailureContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailurePara>
        We are having some trouble to complete your request.
      </FailurePara>
      <FailurePara>Please try again.</FailurePara>
      <FailureRetryBtn>Retry</FailureRetryBtn>
    </FailureContainer>
  )

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
    return (
      <>
        <Header />
        <HomeContainer>
          <SideBar />
          <HomeVideosList>
            <SearchBar>
              <SearchInput
                type="search"
                placeholder="Search"
                onChange={this.changeSearchInput}
                onKeyDown={this.handleKeyDown}
              />
              <SearchIconContainer onClick={this.searchVideos}>
                <IoIosSearch />
              </SearchIconContainer>
            </SearchBar>
            {this.renderHomeSection()}
          </HomeVideosList>
        </HomeContainer>
      </>
    )
  }
}

export default Home
