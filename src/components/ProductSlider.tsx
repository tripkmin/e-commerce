import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import SwiperCore from 'swiper';
import { ProductT } from 'types/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { color, size, timer } from 'styles/constants';
import { ReactComponent as LeftArrow } from 'assets/images/icon-previous.svg';
import { ReactComponent as RightArrow } from 'assets/images/icon-next.svg';
import { RoundButton } from 'styles/elements';

interface SliderProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  product: ProductT;
}

export default function Slider({ setIsModalOpen, product }: SliderProps) {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [currentSwiperIdx, setCurrentSwiperIdx] = useState<number>();

  const switchSwiperIdx = (idx: number) => {
    if (swiper) {
      swiper.slideToLoop(idx);
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
          setCurrentSwiperIdx(swiper.realIndex);
        }}>
        <PrevButton
          onClick={() => {
            swiper && swiper.slidePrev();
          }}>
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
          }}>
          <RightArrow />
        </NextButton>
      </Image>
      <Thumbnail>
        {product.img.map((img, imgIdx) => (
          <ImageBox
            key={img}
            className={currentSwiperIdx === imgIdx ? 'active' : ''}
            onClick={() => {
              switchSwiperIdx(imgIdx);
            }}>
            <img src={img} alt={img} width="100%"></img>
          </ImageBox>
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

  @media screen and (max-width: ${size.desktop}) {
    display: none;
  }
`;

const ImageBox = styled.div`
  width: 20%;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid ${color.orange};
    border-radius: 0.5rem;
    box-sizing: border-box;
    opacity: 0;
    transition: opacity ${timer.default};
  }

  &.active {
    &::after {
      opacity: 1;
    }
  }
`;
