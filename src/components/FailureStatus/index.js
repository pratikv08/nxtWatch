import NxtWatchContext from '../../context/NxtWatchContext'
import {
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  FailureRetryBtn,
} from './styledComponents'

const FailureStatus = props => {
  const {onRetry} = props
  const onRetryAgain = () => onRetry()
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContainer bgColor={isDarkTheme}>
            <FailureImg src={failureImg} alt="failure" />
            <FailureHeading color={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailurePara color={isDarkTheme}>
              We are having some trouble to complete your request.
            </FailurePara>
            <FailurePara color={isDarkTheme}>Please try again.</FailurePara>
            <FailureRetryBtn onClick={onRetryAgain}>Retry</FailureRetryBtn>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureStatus
