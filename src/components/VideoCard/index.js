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
      <CustomImg src={thumbnailUrl} alt="" />
      <VideoDetails>
        <CustomChannelImg src={profileImageUrl} alt="" />
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
      </VideoDetails>
    </EachVideoCard>
  )
}

export default VideoCard
