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
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <>
        <Header />
        <SavedVideosContainer>
          <SideBar />

          <NxtWatchContext.Consumer>
            {value => {
              const {savedVideos} = value
              return (
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
                          <SavedVideoCardTitle>{vid.title}</SavedVideoCardTitle>
                          <SavedVideoCardName>
                            {vid.channel.name}
                          </SavedVideoCardName>
                          <SavedVideoCardViewTime>
                            <View>{`${vid.viewCount} views`}</View>
                            <Time>{vid.publishedAt}</Time>
                          </SavedVideoCardViewTime>
                        </SavedVideoCardDetails>
                      </SavedVideoCard>
                    ))}
                  </SavedVideoCardContainer>
                </SavedVideosSubContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </SavedVideosContainer>
      </>
    )
  }
}

export default SavedVideos
