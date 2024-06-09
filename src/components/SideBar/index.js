import {Component} from 'react'
import {
  SideBarContainer,
  SideBarListContainer,
  SideBarList,
  CustomMenu,
  StyledHomeLogo,
  StyledTrendLogo,
  StyledGameLogo,
  StyledSavedVLogo,
  Footer,
  FooterHeading,
  FollowList,
  FooterImg,
  FooterPara,
} from './styledComponents'

class SideBar extends Component {
  state = {
    activeSection: 'Home',
  }

  handleItemClick = item => {
    this.setState({activeSection: item})
  }

  render() {
    const {activeSection} = this.state
    return (
      <SideBarContainer>
        <SideBarListContainer>
          <SideBarList
            onClick={() => this.handleItemClick('Home')}
            section={activeSection === 'Home'}
          >
            <StyledHomeLogo />
            <CustomMenu>Home</CustomMenu>
          </SideBarList>
          <SideBarList
            onClick={() => this.handleItemClick('Trending')}
            section={activeSection === 'Trending'}
          >
            <StyledTrendLogo />
            <CustomMenu>Trending</CustomMenu>
          </SideBarList>
          <SideBarList
            onClick={() => this.handleItemClick('Gaming')}
            section={activeSection === 'Gaming'}
          >
            <StyledGameLogo />
            <CustomMenu>Gaming</CustomMenu>
          </SideBarList>
          <SideBarList
            onClick={() => this.handleItemClick('SavedVideos')}
            section={activeSection === 'SavedVideos'}
          >
            <StyledSavedVLogo />
            <CustomMenu>Saved videos</CustomMenu>
          </SideBarList>
        </SideBarListContainer>
        <Footer>
          <FooterHeading>CONTACT US</FooterHeading>
          <FollowList>
            <FooterImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <FooterImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <FooterImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </FollowList>
          <FooterPara>
            Enjoy! Now to see your channels recommendations!
          </FooterPara>
        </Footer>
      </SideBarContainer>
    )
  }
}
export default SideBar
