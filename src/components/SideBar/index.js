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
} from './styledComponents'

const SideBar = () => (
  <SideBarContainer>
    <SideBarListContainer>
      <SideBarList>
        <StyledHomeLogo />
        <CustomMenu>Home</CustomMenu>
      </SideBarList>
      <SideBarList>
        <StyledTrendLogo />
        <CustomMenu>Trending</CustomMenu>
      </SideBarList>
      <SideBarList>
        <StyledGameLogo />
        <CustomMenu>Gaming</CustomMenu>
      </SideBarList>
      <SideBarList>
        <StyledSavedVLogo />
        <CustomMenu>Saved videos</CustomMenu>
      </SideBarList>
    </SideBarListContainer>
    <Footer>
      <FooterHeading>CONTACT US</FooterHeading>
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
      <FooterPara>Enjoy! Now to see your channels recommendations!</FooterPara>
    </Footer>
  </SideBarContainer>
)

export default SideBar
