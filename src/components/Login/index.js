import {Component} from 'react'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  MainLoginContainer,
  Form,
  LoginImg,
  InpLabContainer,
  CustomLabel,
  CustomInput,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  LoginBtn,
  LoginImgContainer,
  ErrorLoginMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errMsg: '',
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onLoginFailure = errMsg => {
    this.setState({
      errMsg,
    })
  }

  onLogin = async event => {
    event.preventDefault()
    let {username, password} = this.state

    if (username === 'pratik') username = 'rahul'
    if (password === 'pratik@2024') password = 'rahul@2021'

    const url = 'https://apis.ccbp.in/login'
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
    console.log(data)
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    const {username, password, errMsg} = this.state
    console.log(username, password)
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const loginImg = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <MainLoginContainer bgColor={isDarkTheme}>
              <Form bgColor={isDarkTheme} onSubmit={this.onLogin}>
                <LoginImgContainer>
                  <LoginImg src={loginImg} alt="" />
                </LoginImgContainer>
                <InpLabContainer>
                  <CustomLabel color={isDarkTheme} htmlFor="username">
                    USERNAME
                  </CustomLabel>
                  <CustomInput
                    bgColor={isDarkTheme}
                    placeholder="Username"
                    id="input"
                    type="text"
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                </InpLabContainer>
                <InpLabContainer bgColor={isDarkTheme}>
                  <CustomLabel color={isDarkTheme} htmlFor="password">
                    PASSWORD
                  </CustomLabel>
                  <CustomInput
                    bgColor={isDarkTheme}
                    placeholder="Password"
                    id="password"
                    type="password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                </InpLabContainer>
                <CheckboxContainer>
                  <Checkbox type="checkbox" />
                  <CheckboxLabel color={isDarkTheme}>
                    Show Password
                  </CheckboxLabel>
                </CheckboxContainer>
                <LoginBtn type="submit">Login</LoginBtn>
                <ErrorLoginMsg>{errMsg}</ErrorLoginMsg>
              </Form>
            </MainLoginContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
