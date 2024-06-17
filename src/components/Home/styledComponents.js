import styled from 'styled-components'

export const HomeContainerMain = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`
export const HomeContainer = styled.div`
  display: flex;
  // align-items: center;
  // flex-direction: column;
  // background-color: red;
  min-height: 100vh;
  width: 100%;
`

export const HomeVideosList = styled.div`
  background-color: white;
  min-height: 100vh;
  padding: 0px;
  width: 100%;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 576px) {
    display: flex;
    // align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 16px;
  }
  @media screen and (min-width: 768px) {
    align-self: flex-start;
    width: 79%;
    padding: 5px 0px 5px 20px;
  }
`

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid grey;
  width: 95%;
  margin-top: 10px;
  margin-bottom: 14px;
  margin-left: 8px;
  margin-right: 8px;
  @media screen and (min-width: 576px) {
    align-self: flex-start;
    width: 80%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const SearchInput = styled.input`
  padding: 6px 10px;
  outline: none;
  border: none;
  width: 100%;
  background: transparent;
  color: ${props => (props.color ? '#f8fafc' : '#181818')};
  @media screen and (min-width: 768px) {
    padding: 10px 14px;
  }
`

export const SearchIconContainer = styled.button`
  padding: 6px 23px 4px 23px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${props => (props.bgColor ? '#606060' : '#ebebeb')};
  @media screen and (min-width: 768px) {
    padding: 10px 23px 4px 23px;
  }
`
export const VideoCardContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  width: 100%;
  height: 120vh;
  overflow: auto;
  @media screen and (min-width: 576px) {
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px;
  padding-top: 60px;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 576px) {
    padding-top: 70px;
  }
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    width: 100%;
  }
`
export const FailureImg = styled.img`
  width: 80%;
  @media screen and (min-width: 576px) {
    width: 60%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const FailureHeading = styled.h2`
  margin-top: 32px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  color: ${props => (props.color ? '#f8fafc' : '#181818')};
  @media screen and (min-width: 576px) {
    font-size: 28px;
  }
  @media screen and (min-width: 768px) {
    font-size: 29px;
  }
`
export const FailurePara = styled.p`
  margin-top: 0px;
  margin-bottom: 4px;
  font-size: 16px;
  text-align: center;
  color: ${props => (props.color ? '#94a3b8' : '#181818')};
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 21px;
  }
`
export const FailureRetryBtn = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 15px;
  cursor: pointer;
`

export const BannerContainer = styled.div`
  display:flex;
  align-items:flex:start;
  background-image:url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  background-size:cover;
  width:100%;
  padding:16px 12px 16px 16px;
  justify-content:space-between;
  margin-bottom: 16px;
   @media screen and (min-width: 576px) {
    padding:16px 16px 16px 16px;
  }
  @media screen and (min-width: 768px) {
    padding:16px 20px 16px 16px;
  }
`
export const BannerContent = styled.div``
export const BannerImg = styled.img`
  width: 160px;
  @media screen and (min-width: 576px) {
    width: 170px;
  }
  @media screen and (min-width: 768px) {
    width: 170px;
  }
`
export const BannerHeading = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.8;
  color: #1e293b;
  max-width: 400px;
`
export const BannerBtn = styled.button`
  margin-top: 16px;
  padding: 11px 18px;
  background-color: transparent;
  color: #1e293b;
  border: 1.7px #1e293b solid;
  // border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
`
export const BannerCloseBtn = styled.button`
  background: transparent;
  border: none;
  outline: none;
  align-self: flex-start;
  font-size: 20px;
  margin-top: 0px;
  padding-top: 0px;
  font-weight: 300;
  cursor: pointer;
`
