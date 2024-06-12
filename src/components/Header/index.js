import {Component} from 'react'
import {IoMoon, IoMenu} from 'react-icons/io5'
import {FiLogOut, FiSun} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import SideBarSm from '../SideBarSm'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  Navbar,
  NavImg,
  NavMenu,
  MenuList,
  NavMenuButton,
  LgMenuList,
  NavMenuProfileImg,
  NavMenuLogoutButton,
  Overlay,
  MobileSidebarContainer,
  PopupContainer,
  PopupWarning,
  CancelBtn,
  ConfirmBtn,
  CancelConfirmBtnContainer,
} from './styledComponents'

class Header extends Component {
  state = {isSideBarVisible: false}

  toggleSideBar = () => {
    this.setState(prevState => ({
      isSideBarVisible: !prevState.isSideBarVisible,
    }))
  }

  closeSideBar = () => {
    this.setState({isSideBarVisible: false})
  }

  onLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
    // console.log(history)
  }

  render() {
    const {isSideBarVisible} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {toggleTheme, isDarkTheme} = value
          const onToggleTheme = () => {
            toggleTheme()
          }
          const headerImg = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <>
              <Navbar bgColor={isDarkTheme}>
                <NavImg src={headerImg} alt="" />
                <NavMenu>
                  <MenuList>
                    <NavMenuButton type="button" color={isDarkTheme}>
                      {!isDarkTheme ? (
                        <IoMoon onClick={onToggleTheme} />
                      ) : (
                        <FiSun onClick={onToggleTheme} />
                      )}
                    </NavMenuButton>
                    <NavMenuButton
                      type="button"
                      color={isDarkTheme}
                      onClick={this.toggleSideBar}
                    >
                      <IoMenu />
                    </NavMenuButton>

                    <Popup
                      modal
                      trigger={
                        <NavMenuButton type="button" color={isDarkTheme}>
                          <FiLogOut />
                        </NavMenuButton>
                      }
                    >
                      {close => (
                        <>
                          <PopupContainer bgColor={isDarkTheme}>
                            <PopupWarning color={isDarkTheme}>
                              Are you sure you want to logout?
                            </PopupWarning>
                            <CancelConfirmBtnContainer>
                              <CancelBtn type="button" onClick={() => close()}>
                                Cancel
                              </CancelBtn>
                              <ConfirmBtn
                                type="button"
                                onClick={() => {
                                  this.onLogout()
                                  close()
                                }}
                              >
                                Confirm
                              </ConfirmBtn>
                            </CancelConfirmBtnContainer>
                          </PopupContainer>
                        </>
                      )}
                    </Popup>
                  </MenuList>
                </NavMenu>
                <LgMenuList>
                  <NavMenuButton type="button" color={isDarkTheme}>
                    {!isDarkTheme ? (
                      <IoMoon onClick={onToggleTheme} />
                    ) : (
                      <FiSun onClick={onToggleTheme} />
                    )}
                  </NavMenuButton>
                  <NavMenuProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />

                  <Popup
                    modal
                    trigger={
                      <NavMenuLogoutButton type="button">
                        Logout
                      </NavMenuLogoutButton>
                    }
                  >
                    {close => (
                      <>
                        <PopupContainer bgColor={isDarkTheme}>
                          <PopupWarning color={isDarkTheme}>
                            Are you sure you want to logout?
                          </PopupWarning>
                          <CancelConfirmBtnContainer>
                            <CancelBtn type="button" onClick={() => close()}>
                              Cancel
                            </CancelBtn>
                            <ConfirmBtn
                              type="button"
                              onClick={() => {
                                this.onLogout()
                                close()
                              }}
                            >
                              Confirm
                            </ConfirmBtn>
                          </CancelConfirmBtnContainer>
                        </PopupContainer>
                      </>
                    )}
                  </Popup>
                </LgMenuList>
              </Navbar>
              {isSideBarVisible && (
                <>
                  <Overlay onClick={this.toggleSideBar} />
                  <MobileSidebarContainer isVisible={isSideBarVisible}>
                    <SideBarSm closeSideBar={this.closeSideBar} />
                  </MobileSidebarContainer>
                </>
              )}
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default withRouter(Header)
