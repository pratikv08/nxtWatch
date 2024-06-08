import {IoMoon, IoMenu} from 'react-icons/io5'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

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
} from './styledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value
      const onToggleTheme = () => {
        toggleTheme()
      }
      const headerImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const onLogout = () => {
        const {history} = props
        history.replace('/login')
        console.log(history)
      }

      return (
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
              <NavMenuButton type="button" color={isDarkTheme}>
                <IoMenu />
              </NavMenuButton>
              <NavMenuButton
                type="button"
                color={isDarkTheme}
                onClick={onLogout}
              >
                <FiLogOut />
              </NavMenuButton>
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
            <NavMenuLogoutButton type="button" onClick={onLogout}>
              Logout
            </NavMenuLogoutButton>
          </LgMenuList>
        </Navbar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
