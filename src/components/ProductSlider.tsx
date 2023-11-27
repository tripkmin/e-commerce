import { useState } from 'react';
import styled from 'styled-components';
import SwiperCore from 'swiper';
import { ProductT } from 'types/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface SliderProps {
  product: ProductT;
}

export default function Slider({ product }: SliderProps) {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [currentSwiperIdx, setCurrentSwiperIdx] = useState<number>();

  const switchSwiperIdx = (idx: number) => {
    if (swiper) {
      swiper.slideTo(idx);
    }
  };

  return (
    <>
      <Image
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        onSwiper={setSwiper}
        onSlideChange={(swiper: SwiperCore) => {
          setCurrentSwiperIdx(swiper.realIndex);
        }}
      >
        {product.img.map(img => (
          <SwiperSlide key={img}>
            <img src={img} width="100%" alt={img}></img>
          </SwiperSlide>
        ))}
      </Image>
      <Thumbnail>
        {product.img.map((img, imgIdx) => (
          <img
            className={currentSwiperIdx === imgIdx ? 'active' : ''}
            key={img}
            src={img}
            alt={img}
            width="100%"
            onClick={() => {
              switchSwiperIdx(imgIdx);
            }}
          ></img>
        ))}
      </Thumbnail>
    </>
  );
}

const Image = styled(Swiper)`
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

const Thumbnail = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;

  img {
    width: 20%;
    border-radius: 0.5rem;
  }

  .active {
    opacity: 0.5;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      border: 2px solid orange;
      width: 100%;
      height: 100%;
    }
  }
`;
