import {Component} from 'react'
import {IoIosSearch} from 'react-icons/io'
import Cookies from 'js-cookie'
import Header from '../Header'
import VideoCard from '../VideoCard'
import SideBar from '../SideBar'
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
  }

  componentDidMount() {
    this.fetchHomeVideoList()
  }

  fetchHomeVideoList = async () => {
    const url = 'https://apis.ccbp.in/videos/all'
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

  render() {
    const {filteredVideosList} = this.state
    return (
      <>
        <Header />
        <HomeContainer>
          <SideBar />
          <HomeVideosList>
            <SearchBar>
              <SearchInput placeholder="Search" />
              <SearchIconContainer>
                <IoIosSearch />
              </SearchIconContainer>
            </SearchBar>
            <VideoCardContainer>
              {filteredVideosList.map(card => (
                <VideoCard card={card} key={card.id} />
              ))}
            </VideoCardContainer>
          </HomeVideosList>
        </HomeContainer>
      </>
    )
  }
}

export default Home
