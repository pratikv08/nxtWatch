import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  padding: 0px 20px;
  align-items: center;
  justify-content: space-between;
  // margin-bottom: 15px;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    padding: 5px 30px;
  }
`
export const NavImg = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 115px;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MenuList = styled.li`
  display: flex;
`
export const NavMenuButton = styled.button`
  outline: none;
  border: none;
  font-size: 22px;
  background-color: transparent;
  cursor: pointer;
  margin-left: 2px;
  color: ${props => (props.color ? ' #f1f1f1' : '#181818')};
  @media screen and (min-width: 768px) {
    font-size: 27px;
    padding-top: 7px;
  }
`

export const LgMenuList = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
export const NavMenuProfileImg = styled.img`
  width: 30px;
  margin-left: 19px;
`
export const NavMenuLogoutButton = styled.button`
  outline: none;
  border: 1px solid #3b82f6;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
  padding: 5px 15px;
  margin-left: 19px;
  color: #3b82f6;
  font-weight: 500;
  border-radius: 2px;
`

export const MobileSidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 70%;
  background-color: #ffffff;
  z-index: 1000;
  transform: translateX(${props => (props.isVisible ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  @media (min-width: 768px) {
    display: none;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  @media (min-width: 768px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  width: 300px;
  height: 170px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 7px 36px ${props => (props.bgColor ? 'grey' : 'black')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    width: 350px;
  }
`

export const PopupWarning = styled.p`
  color: ${props => (props.color ? ' #f1f1f1' : '#181818')};
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 36px;
  text-align: center;
  font-weight: 500;
`
export const CancelConfirmBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
export const CancelBtn = styled.button`
  padding: 9px 20px;
  border-radius: 2px;
  background: transparent;
  font-size: 18px;
  font-weight: 500;
  border: 1.5px grey solid;
  cursor: pointer;
  color: grey;
  margin-right: 10px;
`
export const ConfirmBtn = styled.button`
  padding: 9px 20px;
  border-radius: 2px;
  background: #3b82f6;
  font-size: 18px;
  border: none;
  cursor: pointer;
  color: white;
  margin-left: 10px;
`
