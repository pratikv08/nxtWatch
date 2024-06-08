import styled from 'styled-components'
import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

export const SideBarContainer = styled.div`
  width: 21%;
  padding-left: 27px;
  background-color: #f9f9f9;
  height: 115vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const SideBarListContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
`
export const SideBarList = styled.li`
  display: flex;
  align-items: center;
`
export const CustomMenu = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
`
export const StyledHomeLogo = styled(IoMdHome)`
  font-size: 19px;
  margin-right: 30px;
`
export const StyledTrendLogo = styled(FaFire)`
  font-size: 19px;
  margin-right: 30px;
`
export const StyledGameLogo = styled(SiYoutubegaming)`
  font-size: 19px;
  margin-right: 30px;
`
export const StyledSavedVLogo = styled(CgPlayListAdd)`
  font-size: 23px;
  margin-right: 27px;
  margin-top: 6px;
`

export const Footer = styled.div`
  margin-bottom: 20px;
`
export const FooterHeading = styled.h2`
  font-size: 17px;
`
export const FollowList = styled.div``
export const FooterImg = styled.img`
  width: 30px;
  margin-right: 13px;
`
export const FooterPara = styled.p``