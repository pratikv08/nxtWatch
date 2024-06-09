import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
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
    const {location} = this.props
    const {pathname} = location

    return (
      <SideBarContainer>
        <SideBarListContainer>
          <Link to="/" style={{textDecoration: 'none'}}>
            <SideBarList section={pathname === '/'}>
              <StyledHomeLogo color={pathname === '/'} />
              <CustomMenu>Home</CustomMenu>
            </SideBarList>
          </Link>
          <Link to="/trending" style={{textDecoration: 'none'}}>
            <SideBarList section={pathname === '/trending'}>
              <StyledTrendLogo color={pathname === '/trending'} />
              <CustomMenu>Trending</CustomMenu>
            </SideBarList>
          </Link>
          <Link to="/gaming" style={{textDecoration: 'none'}}>
            <SideBarList section={pathname === '/gaming'}>
              <StyledGameLogo color={pathname === '/gaming'} />
              <CustomMenu>Gaming</CustomMenu>
            </SideBarList>
          </Link>
          <Link to="/saved-videos" style={{textDecoration: 'none'}}>
            <SideBarList section={pathname === '/saved-videos'}>
              <StyledSavedVLogo color={pathname === '/saved-videos'} />
              <CustomMenu>Saved videos</CustomMenu>
            </SideBarList>
          </Link>
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
export default withRouter(SideBar)
