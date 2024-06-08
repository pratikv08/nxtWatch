import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  font-family: 'Roboto';
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`
export const NotFoundImg = styled.img`
  width: 50%;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    width: 37%;
  }
`
export const NotFoundHeading = styled.h1`
  font-size: 21px;
  color: ${props => (props.color ? '#ffffff' : '#231f20')};
  font-weight: 600;
  margin-bottom: 0px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const NotFoundPara = styled.p`
  font-size: 13px;
  color: ${props => (props.color ? '#cbd5e1' : ' #64748b')};
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
