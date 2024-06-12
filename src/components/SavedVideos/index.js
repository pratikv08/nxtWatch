import {Component} from 'react'
import {IoBookmarks} from 'react-icons/io5'
import SideBar from '../SideBar'
import Header from '../Header'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SavedVideosContainer,
  SavedVideosSubContainer,
  TopSection,
  FireContainer,
  CustomHeading,
  SavedVideoCardContainer,
  SavedVideoCard,
  SavedVideosCardImg,
  SavedVideoCardDetails,
  SavedVideoCardTitle,
  SavedVideoCardName,
  SavedVideoCardViewTime,
  View,
  Time,
  NoSavedVideosContainer,
  NoSavedVideosImg,
  NoSavedVideosHeading,
  NoSavedVideosPara,
  SavedVideoCardChannelImg,
  SavedVideoCardTitleNameViewTimeContainer,
  SavedVideoCardNameViewTimeContainer,
  StyledBsDot1,
  StyledBsDot,
} from './styledComponents'

class SavedVideos extends Component {
  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <NoSavedVideosContainer bgColor={isDarkTheme}>
            <NoSavedVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no-saved-videos"
            />
            <NoSavedVideosHeading color={isDarkTheme}>
              No saved videos found
            </NoSavedVideosHeading>
            <NoSavedVideosPara color={isDarkTheme}>
              You can save your videos while watching them
            </NoSavedVideosPara>
          </NoSavedVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        <SavedVideosContainer>
          <SideBar />
          <NxtWatchContext.Consumer>
            {value => {
              const {savedVideos, isDarkTheme} = value
              return savedVideos.length > 0 ? (
                <SavedVideosSubContainer bgColor={isDarkTheme}>
                  <TopSection bgColor={isDarkTheme}>
                    <FireContainer bgColor={isDarkTheme}>
                      <IoBookmarks size={35} style={{color: 'red'}} />
                    </FireContainer>
                    <CustomHeading color={isDarkTheme}>
                      Saved Videos
                    </CustomHeading>
                  </TopSection>
                  <SavedVideoCardContainer bgColor={isDarkTheme}>
                    {savedVideos.map(vid => (
                      <SavedVideoCard>
                        <SavedVideosCardImg src={vid.thumbnailUrl} alt="" />
                        <SavedVideoCardDetails>
                          <SavedVideoCardChannelImg
                            src={vid.channel.profileImageUrl}
                            alt=""
                          />
                          <SavedVideoCardTitleNameViewTimeContainer>
                            <SavedVideoCardTitle color={isDarkTheme}>
                              {vid.title}
                            </SavedVideoCardTitle>
                            <SavedVideoCardNameViewTimeContainer>
                              <SavedVideoCardName>
                                {vid.channel.name}
                              </SavedVideoCardName>
                              <StyledBsDot1 />
                              <SavedVideoCardViewTime>
                                <View>{`${vid.viewCount} views`}</View>
                                <StyledBsDot />
                                <Time>{vid.publishedAt}</Time>
                              </SavedVideoCardViewTime>
                            </SavedVideoCardNameViewTimeContainer>
                          </SavedVideoCardTitleNameViewTimeContainer>
                        </SavedVideoCardDetails>
                      </SavedVideoCard>
                    ))}
                  </SavedVideoCardContainer>
                </SavedVideosSubContainer>
              ) : (
                this.renderFailureView()
              )
            }}
          </NxtWatchContext.Consumer>
        </SavedVideosContainer>
      </>
    )
  }
}

export default SavedVideos
