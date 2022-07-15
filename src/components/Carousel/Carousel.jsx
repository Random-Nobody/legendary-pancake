import { Swiper as SwiperUnstyled, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styled from 'styled-components';

const Swiper = styled(SwiperUnstyled)`
  width: 100%;

  .swiper-slide {
    width: 300px;
    height: 300px;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;

export default function Carousel(props) {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="Swiper"
    >
      {props.children.map((child, i)=><SwiperSlide key={i}>
        {child}
      </SwiperSlide>)}
    </Swiper>
  )
}
