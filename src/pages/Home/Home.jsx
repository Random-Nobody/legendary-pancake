import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Wrapper } from './Home.styles';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination]
});


export default function Home() {
  return (
    <Wrapper>
      <img src="/placeholders/placehold.webp" alt="" />
    </Wrapper>
  )
}
