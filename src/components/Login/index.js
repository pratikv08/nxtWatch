import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
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
    checkbox: false,
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

  onChangeCheckbox = () => {
    this.setState(prevState => ({
      checkbox: !prevState.checkbox,
    }))
  }

  render() {
    const {username, password, errMsg, checkbox} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
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
                  <LoginImg src={loginImg} alt="website logo" />
                </LoginImgContainer>
                <InpLabContainer>
                  <CustomLabel color={isDarkTheme} htmlFor="username">
                    USERNAME
                  </CustomLabel>
                  <CustomInput
                    bgColor={isDarkTheme}
                    placeholder="pratik"
                    id="username"
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
                    placeholder="pratik@2024"
                    id="password"
                    type={checkbox ? 'text' : 'password'}
                    value={password}
                    onChange={this.onChangePassword}
                  />
                </InpLabContainer>
                <CheckboxContainer>
                  <Checkbox
                    onChange={this.onChangeCheckbox}
                    type="checkbox"
                    id="checkbox"
                    checked={checkbox}
                  />
                  <CheckboxLabel color={isDarkTheme} htmlFor="checkbox">
                    Show Password
                  </CheckboxLabel>
                </CheckboxContainer>
                <LoginBtn type="submit">Login</LoginBtn>
                {errMsg && <ErrorLoginMsg>{errMsg}</ErrorLoginMsg>}
              </Form>
            </MainLoginContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
