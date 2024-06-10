import styled from 'styled-components'

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
  padding: 8px;
  width: 100%;
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
  width: 100%;
  margin-top: 10px;
  margin-bottom: 15px;
  @media screen and (min-width: 576px) {
    align-self: flex-start;
    width: 80%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  // padding:1px 13px 1px 3px;
`

export const SearchInput = styled.input`
  padding: 6px 10px;
  outline: none;
  border: none;
  width: 100%;
`

export const SearchIconContainer = styled.div`
  background-color: #ebebeb;
  padding: 6px 23px 4px 23px;
`
export const VideoCardContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  width: 100%;
  height: 120vh;
  overflow: auto;
  // flex-grow: 1;
  @media screen and (min-width: 576px) {
    display: flex;
    // justify-content:flex-start;
    gap: 18px;
    // justify-content:center;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    // justify-content:flex-start;
    gap: 18px;
    // justify-content:center;
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
  @media screen and (min-width: 576px) {
    padding-top: 70px;
  }
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    width: 79%;
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
