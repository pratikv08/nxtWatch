import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  EachVideoCard,
  CustomImg,
  VideoDetails,
  CustomChannelImg,
  TitleChannelContainer,
  Title,
  ChannelViewsDate,
  ChannelName,
  Views,
  Date,
  StyledBsDot1,
  StyledBsDot,
  ViewsDateContainer,
} from './styledComponents'

const VideoCard = props => {
  const {card} = props
  const {publishedAt, channel, id, thumbnailUrl, viewCount, title} = card
  const {profileImageUrl, name} = channel
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <EachVideoCard>
            <Link to={`/video/${id}`} style={{textDecoration: 'none'}}>
              <CustomImg src={thumbnailUrl} alt="" />
            </Link>
            <VideoDetails>
              <CustomChannelImg src={profileImageUrl} alt="" />
              <Link to={`/video/${id}`} style={{textDecoration: 'none'}}>
                <TitleChannelContainer>
                  <Title color={isDarkTheme}>{title}</Title>
                  <ChannelViewsDate color={isDarkTheme}>
                    <ChannelName>{name}</ChannelName>
                    <StyledBsDot1 />
                    <ViewsDateContainer>
                      <Views>{`${viewCount} views`}</Views>
                      <StyledBsDot />
                      <Date>{publishedAt}</Date>
                    </ViewsDateContainer>
                  </ChannelViewsDate>
                </TitleChannelContainer>
              </Link>
            </VideoDetails>
          </EachVideoCard>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoCard
