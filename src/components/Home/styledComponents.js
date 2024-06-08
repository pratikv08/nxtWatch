import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  // align-items: center;
  // flex-direction: column;
  //  background-color: #f9f9f9;
  min-height: 100vh;
  width: 100%;
`

export const HomeVideosList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f9f9f9;
  min-height: 100vh;
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
  width: 90%;
  margin-top: 10px;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    align-self: flex-start;
    width: 40%;
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
  display: flex;
  overflow: auto;
  gap: 18px;
  flex-grow: 1;
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
  }
`
