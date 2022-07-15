import { Wrapper, Banner, CarouselWrapper } from './Home.styles';
import Spacer from 'components/Spacer';

import Carousel from 'components/Carousel/Carousel';

export default function Home() {
  return (
    <Wrapper>
      <Banner backaground='url("/atlas/Generic-View.png")' >
        <img src="https://www.atlasdevelopment.io/wp-content/uploads/2022/06/red-brick.gif" alt="red brick" />
      </Banner>
      <Spacer h='10px' />
      <CarouselWrapper>
        <Spacer h='30px' />
        NFT Tiers
        <Spacer h='20px' />
        <Carousel>
          <img src="https://www.atlasdevelopment.io/wp-content/uploads/2022/06/gold-brick.gif" alt='gold' />
          <img src="https://www.atlasdevelopment.io/wp-content/uploads/2022/06/silver-brick.gif" alt='silver' />
          <img src="https://www.atlasdevelopment.io/wp-content/uploads/2022/06/bronze-brick.gif" alt='bronze' />
          <img src="https://www.atlasdevelopment.io/wp-content/uploads/2022/06/red-brick.gif" alt='red' />
          <img src="https://www.atlasdevelopment.io/wp-content/uploads/2022/06/gold-brick.gif" alt='gold' />
          <img src="https://www.atlasdevelopment.io/wp-content/uploads/2022/06/silver-brick.gif" alt='silver' />
          <img src="https://www.atlasdevelopment.io/wp-content/uploads/2022/06/bronze-brick.gif" alt='bronze' />
          <img src="https://www.atlasdevelopment.io/wp-content/uploads/2022/06/red-brick.gif" alt='red' />
        </Carousel>
      </CarouselWrapper>
    </Wrapper>
  )
}
