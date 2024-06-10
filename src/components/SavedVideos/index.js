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
} from './styledComponents'

class SavedVideos extends Component {
  renderFailureView = () => (
    <NoSavedVideosContainer>
      <NoSavedVideosImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no-saved-videos"
      />
      <NoSavedVideosHeading>No saved videos found</NoSavedVideosHeading>
      <NoSavedVideosPara>
        You can save your videos while watching them
      </NoSavedVideosPara>
    </NoSavedVideosContainer>
  )

  render() {
    return (
      <>
        <Header />
        <SavedVideosContainer>
          <SideBar />
          <NxtWatchContext.Consumer>
            {value => {
              const {savedVideos} = value
              return savedVideos.length > 0 ? (
                <SavedVideosSubContainer>
                  <TopSection>
                    <FireContainer>
                      <IoBookmarks size={35} style={{color: 'red'}} />
                    </FireContainer>
                    <CustomHeading>Saved Videos</CustomHeading>
                  </TopSection>
                  <SavedVideoCardContainer>
                    {savedVideos.map(vid => (
                      <SavedVideoCard>
                        <SavedVideosCardImg src={vid.thumbnailUrl} alt="" />
                        <SavedVideoCardDetails>
                          <SavedVideoCardChannelImg
                            src={vid.channel.profileImageUrl}
                            alt=""
                          />
                          <SavedVideoCardTitleNameViewTimeContainer>
                            <SavedVideoCardTitle>
                              {vid.title}
                            </SavedVideoCardTitle>
                            <SavedVideoCardNameViewTimeContainer>
                              <SavedVideoCardName>
                                {vid.channel.name}
                              </SavedVideoCardName>
                              <SavedVideoCardViewTime>
                                <View>{`${vid.viewCount} views`}</View>
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
