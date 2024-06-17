import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <NotFoundContainer bgColor={isDarkTheme}>
            <NotFoundImg src={notFoundImg} alt="not found" />
            <NotFoundHeading color={isDarkTheme}>
              Page Not Found
            </NotFoundHeading>
            <NotFoundPara>
              We are sorry, the page you requested could not be found.
            </NotFoundPara>
          </NotFoundContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
