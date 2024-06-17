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
  CloseX,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

class SideBarSm extends Component {
  render() {
    const {location, closeSideBar} = this.props
    const {pathname} = location

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <SideBarContainer bgColor={isDarkTheme}>
              <SideBarListContainer>
                <CloseX color={isDarkTheme} onClick={closeSideBar}>
                  X
                </CloseX>
                <Link to="/" style={{textDecoration: 'none'}}>
                  <SideBarList bgColor={isDarkTheme} active={pathname === '/'}>
                    <StyledHomeLogo
                      color={isDarkTheme}
                      active={pathname === '/'}
                    />
                    <CustomMenu color={isDarkTheme}>Home</CustomMenu>
                  </SideBarList>
                </Link>
                <Link to="/trending" style={{textDecoration: 'none'}}>
                  <SideBarList
                    bgColor={isDarkTheme}
                    active={pathname === '/trending'}
                  >
                    <StyledTrendLogo
                      color={isDarkTheme}
                      active={pathname === '/trending'}
                    />
                    <CustomMenu color={isDarkTheme}>Trending</CustomMenu>
                  </SideBarList>
                </Link>
                <Link to="/gaming" style={{textDecoration: 'none'}}>
                  <SideBarList
                    bgColor={isDarkTheme}
                    active={pathname === '/gaming'}
                  >
                    <StyledGameLogo
                      color={isDarkTheme}
                      active={pathname === '/gaming'}
                    />
                    <CustomMenu color={isDarkTheme}>Gaming</CustomMenu>
                  </SideBarList>
                </Link>
                <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                  <SideBarList
                    bgColor={isDarkTheme}
                    active={pathname === '/saved-videos'}
                  >
                    <StyledSavedVLogo
                      color={isDarkTheme}
                      active={pathname === '/saved-videos'}
                    />
                    <CustomMenu color={isDarkTheme}>Saved videos</CustomMenu>
                  </SideBarList>
                </Link>
              </SideBarListContainer>
              <Footer>
                <FooterHeading color={isDarkTheme}>CONTACT US</FooterHeading>
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
                <FooterPara color={isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </FooterPara>
              </Footer>
            </SideBarContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default withRouter(SideBarSm)
