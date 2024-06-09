import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'
import SideBar from '../SideBar'
import Header from '../Header'
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
} from './styledComponents'

class Gaming extends Component {
  state = {gamingData: []}

  componentDidMount() {
    this.getGamingVideoData()
  }

  getGamingVideoData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch('https://apis.ccbp.in/videos/gaming', options)
    const responseObj = await response.json()
    const gamingData = responseObj.videos.map(vid => ({
      id: vid.id,
      thumbnailUrl: vid.thumbnail_url,
      title: vid.title,
      viewCount: vid.view_count,
    }))

    this.setState({gamingData})
  }

  render() {
    const {gamingData} = this.state
    console.log(gamingData)
    return (
      <>
        <Header />
        <GamingContainer>
          <SideBar />
          <GamingSubContainer>
            <TopSection>
              <FireContainer>
                <SiYoutubegaming size={35} style={{color: 'red'}} />
              </FireContainer>
              <CustomHeading>Gaming</CustomHeading>
            </TopSection>
            <GamingCardContainer>
              {gamingData.map(game => (
                <Link to={`/video/${game.id}`}>
                  <GamingCard>
                    <GamingCardImg src={game.thumbnailUrl} alt="" />
                    <GamingCardTitle>{game.title}</GamingCardTitle>
                    <View>{`${game.viewCount} Watching Worlwide`}</View>
                  </GamingCard>
                </Link>
              ))}
            </GamingCardContainer>
          </GamingSubContainer>
        </GamingContainer>
      </>
    )
  }
}

export default Gaming
