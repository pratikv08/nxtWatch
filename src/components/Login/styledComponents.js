import styled from 'styled-components'

export const MainLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto';
  padding: 20px;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`
export const Form = styled.form`
  box-shadow: 0px 6px 15px #475569;
  padding: 30px 17px;
  border-radius: 4px;
  width: 100%;
  background-color: ${props => (props.bgColor ? ' #000000' : '#ffffff')};
  @media screen and (min-width: 768px) {
    width: 38%;
    padding: 44px 36px;
  }
`
export const LoginImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`
export const LoginImg = styled.img`
  width: 120px;
  @media screen and (min-width: 768px) {
    width: 140px;
  }
`
export const InpLabContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-top: 15px;
`
export const CustomLabel = styled.label`
  font-size: 13px;
  color: ${props => (props.color ? '#ffffff' : '#616e7c')};
  margin-bottom: 5px;
  font-weight: 500;
`
export const CustomInput = styled.input`
  font-size: 15px;
  color: ;
  border: 0.5px solid #94a3b8;
  outline: none;
  padding: 10px 12px;
  border-radius: 3px;
  background-color: ${props => (props.bgColor ? ' #000000' : '#ffffff')};
  @media screen and (min-width: 768px) {
    padding: 11px 14px;
  }
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Checkbox = styled.input`
  margin-right: 11px;
  cursor: pointer;
`
export const CheckboxLabel = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: ${props => (props.color ? '#ffffff' : '#000000')};
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const LoginBtn = styled.button`
  font-size: 14px;
  color: #ffffff;
  outline: none;
  background-color: #3b82f6;
  border: none;
  cursor: pointer;
  padding: 9px 20px;
  width: 100%;
  margin-top: 16px;
  border-radius: 3px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 11px 20px;
    margin-top: 19px;
  }
`
export const ErrorLoginMsg = styled.p`
  color: #ff0000;
  margin-top: 9px;
  font-size: 13px;
`
