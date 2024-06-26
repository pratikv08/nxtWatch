import styled from 'styled-components'
import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

export const SideBarContainer = styled.div`
  // padding-left: 27px;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 0px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const SideBarListContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
`
export const CloseX = styled.h2`
  text-align: right;
  padding-right: 10px;
  font-weight: 400;
  margin-top: 0px;
  cursor: pointer;
  color: ${props => (props.color ? '#f8fafc' : '#181818')};
`
export const SideBarList = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  background: ${props => {
    if (props.active) {
      return props.bgColor ? '#383838' : '#d7dfe9'
    }
    return ''
  }};
  padding: 4px 36px;
  text-decoration: none;
`
export const CustomMenu = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${props => (props.color ? '#f8fafc' : '#181818')};
`
export const StyledHomeLogo = styled(IoMdHome)`
  font-size: 19px;
  margin-right: 30px;
  color: ${props => {
    if (props.active) {
      return 'red'
    }
    return props.color ? '#f8fafc' : '#181818'
  }};
`
export const StyledTrendLogo = styled(FaFire)`
  font-size: 19px;
  margin-right: 30px;
  color: ${props => {
    if (props.active) {
      return 'red'
    }
    return props.color ? '#f8fafc' : '#181818'
  }};
`
export const StyledGameLogo = styled(SiYoutubegaming)`
  font-size: 19px;
  margin-right: 30px;
  color: ${props => {
    if (props.active) {
      return 'red'
    }
    return props.color ? '#f8fafc' : '#181818'
  }};
`
export const StyledSavedVLogo = styled(CgPlayListAdd)`
  font-size: 23px;
  margin-right: 27px;
  margin-top: 6px;
  color: ${props => {
    if (props.active) {
      return 'red'
    }
    return props.color ? '#f8fafc' : '#181818'
  }};
`

export const Footer = styled.div`
  margin-bottom: 20px;
  padding-left: 24px;
`
export const FooterHeading = styled.p`
  font-size: 17px;
  color: ${props => (props.color ? '#f8fafc' : '#181818')};
`
export const FollowList = styled.div``
export const FooterImg = styled.img`
  width: 30px;
  margin-right: 13px;
`
export const FooterPara = styled.p`
  color: ${props => (props.color ? '#f8fafc' : '#181818')};
`
