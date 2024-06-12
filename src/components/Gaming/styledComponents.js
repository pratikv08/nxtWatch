import styled from 'styled-components'

export const GamingContainer = styled.div`
  min-height: 120vh;
  display: flex;
`
export const GamingSubContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 79%;
  }
`
export const TopSection = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.bgColor ? '#212121' : '#ebebeb')};
  padding: 12px 28px;
  @media screen and (min-width: 768px) {
    padding: 4px 40px;
  }
`
export const FireContainer = styled.div`
  // border: 1px red solid;
  border-radius: 100%;
  margin-right: 20px;
  padding: 4px 6px;
  background: ${props => (props.bgColor ? '#0f0f0f' : '#d7dfe9')};
  @media screen and (min-width: 768px) {
    padding: 12px 13px;
  }
`
export const CustomHeading = styled.h1`
  font-size: 20px;
  color: ${props => (props.color ? '#f1f5f9' : ' #181818')};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const GamingCardContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  overflow: auto;
  height: 100vh;
  margin-top: 0px;
  padding: 28px 16px;
  width: 100%;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 576px) {
    padding: 28px 24px;
    gap: 16px;
  }
  @media screen and (min-width: 768px) {
    padding: 28px 40px;
    gap: 18px;
  }
`
export const GamingCard = styled.li`
  width: 150px;
  flex-grow: 1;
  max-width: 300px;
  margin-bottom: 20px;
  @media screen and (min-width: 576px) {
    width: 170px;
  }
  @media screen and (min-width: 768px) {
    width: 180px;
  }
`
export const GamingCardImg = styled.img`
  width: 100%;
`
export const GamingCardTitle = styled.p`
  margin-bottom: 0px;
  font-weight: 600;
  color: ${props => (props.color ? '#f1f5f9' : ' #181818')};
`
export const View = styled.p`
  margin-top: 4px;
  color: #64748b;
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
  @media screen and (min-width: 768px) {
    width: 79%;
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
  font-size: 23px;
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
