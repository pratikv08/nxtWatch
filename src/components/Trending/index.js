import {Component} from 'react'
import {
  TrendingContainer,
  TopSection,
  CustomHeading,
  TrendingCard,
} from './styledComponents'

class Trending extends Component {
  render() {
    return (
      <TrendingContainer>
        <TopSection>
          <CustomHeading>Trending</CustomHeading>
        </TopSection>
        <TrendingCard />
      </TrendingContainer>
    )
  }
}

export default Trending
