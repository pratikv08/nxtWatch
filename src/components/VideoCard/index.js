import {Link} from 'react-router-dom'
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
  StyledBsDot,
} from './styledComponents'

const VideoCard = props => {
  const {card} = props
  const {publishedAt, channel, id, thumbnailUrl, viewCount, title} = card
  const {profileImageUrl, name} = channel
  return (
    <EachVideoCard>
      <Link to={`/video/${id}`}>
        <CustomImg src={thumbnailUrl} alt="" />
      </Link>
      <VideoDetails>
        <CustomChannelImg src={profileImageUrl} alt="" />
        <Link to={`/video/${id}`}>
          <TitleChannelContainer>
            <Title>{title}</Title>
            <ChannelViewsDate>
              <ChannelName>{name}</ChannelName>
              <StyledBsDot />
              <Views>{viewCount}</Views>
              <StyledBsDot />
              <Date>{publishedAt}</Date>
            </ChannelViewsDate>
          </TitleChannelContainer>
        </Link>
      </VideoDetails>
    </EachVideoCard>
  )
}

export default VideoCard
