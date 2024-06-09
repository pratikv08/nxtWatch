import styled from 'styled-components'

export const GamingContainer = styled.div`
  min-height: 120vh;
  display: flex;
`
export const GamingSubContainer = styled.div`
  width: 79%;
`
export const TopSection = styled.div`
  display: flex;
  align-items: center;
  background-color: #ebebeb;
  padding: 4px 40px;
`
export const FireContainer = styled.div`
  border-radius: 100%;
  margin-right: 20px;
  padding: 13px 14px;
  background: #d7dfe9;
`
export const CustomHeading = styled.h1``

export const GamingCardContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  overflow: auto;
  height: 100vh;
  margin-top: 0px;
  padding: 28px 40px;
`
export const GamingCard = styled.li``
export const GamingCardImg = styled.img`
  width: 200px;
`
export const GamingCardTitle = styled.p`
  margin-bottom: 0px;
`
export const View = styled.p`
  margin-top: 4px;
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 79%;
  height: 60vh;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 79%;
  padding-top: 28px;
`
export const FailureImg = styled.img`
  width: 50%;
`
export const FailureHeading = styled.h2`
  margin-top: 32px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 28px;
`
export const FailurePara = styled.p`
  margin-top: 0px;
  margin-bottom: 4px;
  font-size: 20px;
`
export const FailureRetryBtn = styled.button`
  margin-top: 16px;
  padding: 12px 24px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 15px;
  cursor: pointer;
`
