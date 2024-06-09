import {Component} from 'react'
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
} from './styledComponents'

class Home extends Component {
  state = {
    filteredVideosList: [],
    activeSection: 'Home',
    searchInput: '',
  }

  componentDidMount() {
    this.fetchHomeVideoList()
  }

  fetchHomeVideoList = async () => {
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
    })
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
        <VideoCardContainer>
          {filteredVideosList.map(card => (
            <VideoCard card={card} key={card.id} />
          ))}
        </VideoCardContainer>
      </HomeVideosList>
    )
  }

  // handleTheSection = section => {
  //   this.setState({activeSection: section})
  // }

  // renderContent = () => {
  //   const {activeSection} = this.state
  //   switch (activeSection) {
  //     case 'Home':
  //       return this.homeListSection()
  //     case 'Trending':
  //       return <Trending />
  //     case 'Gaming':
  //       return <Gaming />
  //     case 'SavedVideos':
  //       return <h1>SavedVideos</h1>
  //     default:
  //       return <h1>Home</h1>
  //   }
  // }
  render() {
    return (
      <>
        <Header />
        <HomeContainer>
          <SideBar />
          {this.homeListSection()}
        </HomeContainer>
      </>
    )
  }
}

export default Home
