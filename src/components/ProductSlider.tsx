import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import SwiperCore from 'swiper';
import { ProductT } from 'types/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { color, size, timer } from 'styles/constants';
import { ReactComponent as LeftArrow } from 'assets/images/icon-previous.svg';
import { ReactComponent as RightArrow } from 'assets/images/icon-next.svg';

interface SliderProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  product: ProductT;
}

export default function Slider({ setIsModalOpen, product }: SliderProps) {
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
        onClick={() => {
          setIsModalOpen(prev => !prev);
        }}
        spaceBetween={10}
        loop={true}
        onSwiper={setSwiper}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        onSlideChange={(swiper: SwiperCore) => {
          // 드래그로 onSlideChange를 실행하면 thumbnail 클릭 제대로 안 먹는 버그 있음.
          setCurrentSwiperIdx(swiper.realIndex);
        }}
      >
        <PrevButton
          onClick={() => {
            swiper && swiper.slidePrev();
          }}
        >
          <LeftArrow />
        </PrevButton>
        {product.img.map(img => (
          <SwiperSlide key={img}>
            <img src={img} width="100%" alt={img}></img>
          </SwiperSlide>
        ))}
        <NextButton
          onClick={() => {
            swiper && swiper.slideNext();
          }}
        >
          <RightArrow />
        </NextButton>
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
  position: relative;

  @media screen and (max-width: ${size.desktop}) {
    border-radius: 0;
  }
`;

const RoundButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${color.white};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transition: color ${timer.default};
  }

  &:hover {
    color: ${color.orange};
  }
`;

const PrevButton = styled(RoundButton)`
  position: absolute;
  top: 50%;
  left: 1.5rem;
  transform: translateY(-50%);
  z-index: 1;
  display: none;

  @media screen and (max-width: ${size.desktop}) {
    display: block;
  }
`;

const NextButton = styled(RoundButton)`
  position: absolute;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%);
  z-index: 1;
  display: none;

  @media screen and (max-width: ${size.desktop}) {
    display: block;
  }
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

  @media screen and (max-width: ${size.desktop}) {
    display: none;
  }
`;
