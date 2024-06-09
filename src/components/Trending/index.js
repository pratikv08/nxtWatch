import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {AiFillFire} from 'react-icons/ai'
import SideBar from '../SideBar'
import Header from '../Header'
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
  Name,
  Time,
  StyledBsDot,
} from './styledComponents'

class Trending extends Component {
  state = {trendingData: []}

  componentDidMount() {
    this.getTrendingVideo()
  }

  getTrendingVideo = async () => {
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
    })
    console.log(trendingData)
  }

  render() {
    const {trendingData} = this.state
    console.log(trendingData)
    if (!trendingData) {
      return <p>Loading...</p>
    }
    return (
      <>
        <Header />
        <TrendingContainer>
          <SideBar />
          <TrendingContainerSubContainer>
            <TopSection>
              <FireContainer>
                <AiFillFire size={35} style={{color: 'red'}} />
              </FireContainer>
              <CustomHeading>Trending</CustomHeading>
            </TopSection>
            <TrendingCardContainer>
              {trendingData.map(vid => (
                <TrendingCard>
                  <Link to={`/video/${vid.id}`}>
                    <TrendingCardImg src={vid.thumbnailUrl} alt="" />
                  </Link>
                  <Link to={`/video/${vid.id}`}>
                    <TrendingCardDetails>
                      <TrendingCardTitle>{vid.title}</TrendingCardTitle>
                      <TrendingCardName>{vid.channel.name}</TrendingCardName>
                      <TrendingCardViewTime>
                        <View>{`${vid.viewCount} views`}</View>
                        <StyledBsDot />
                        <Time>{vid.publishedAt}</Time>
                      </TrendingCardViewTime>
                    </TrendingCardDetails>
                  </Link>
                </TrendingCard>
              ))}
            </TrendingCardContainer>
          </TrendingContainerSubContainer>
        </TrendingContainer>
      </>
    )
  }
}

export default Trending
