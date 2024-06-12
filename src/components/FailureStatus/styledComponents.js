import styled from 'styled-components'

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
