import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import SwiperCore from 'swiper';
import { ProductT } from 'types/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as LeftArrow } from 'assets/images/icon-previous.svg';
import { ReactComponent as RightArrow } from 'assets/images/icon-next.svg';
import { ReactComponent as IconClose } from 'assets/images/icon-close.svg';
import 'swiper/css';
import { RoundButton } from 'styles/elements';
import { color, size, timer } from 'styles/constants';

interface SliderProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  product: ProductT;
}

export default function ModalSlider({ setIsModalOpen, product }: SliderProps) {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [currentSwiperIdx, setCurrentSwiperIdx] = useState<number>();

  const switchSwiperIdx = (idx: number) => {
    if (swiper) {
      swiper.slideToLoop(idx);
    }
  };

  return (
    <>
      <ModalHeader>
        <ModalCloseButton>
          <IconClose
            onClick={() => {
              setIsModalOpen(false);
            }}
          />
        </ModalCloseButton>
      </ModalHeader>
      <ModalImageWrapper>
        <PrevButton
          onClick={() => {
            swiper && swiper.slidePrev();
          }}>
          <LeftArrow />
        </PrevButton>
        <Image
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          onSwiper={setSwiper}
          onSlideChange={(swiper: SwiperCore) => {
            setCurrentSwiperIdx(swiper.realIndex);
          }}>
          {product.img.map(img => (
            <SwiperSlide key={img}>
              <img src={img} width="100%" alt={img}></img>
            </SwiperSlide>
          ))}
        </Image>
        <NextButton
          onClick={() => {
            swiper && swiper.slideNext();
          }}>
          <RightArrow />
        </NextButton>
      </ModalImageWrapper>
      <Thumbnail>
        {product.img.map((img, imgIdx) => (
          <ImageBox
            className={currentSwiperIdx === imgIdx ? 'active' : ''}
            key={img}
            onClick={() => {
              // setCurrentSwiperIdx(imgIdx);
              switchSwiperIdx(imgIdx);
            }}>
            <img src={img} alt={img} width="100%"></img>
          </ImageBox>
        ))}
      </Thumbnail>
    </>
  );
}

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalImageWrapper = styled.div`
  position: relative;
`;

const Image = styled(Swiper)`
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  cursor: grab;
`;

const Thumbnail = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const PrevButton = styled(RoundButton)`
  position: absolute;
  top: 50%;
  left: -5rem;
  transform: translateY(-50%);
  z-index: 10;

  @media screen and (max-width: ${size.desktop}) {
    left: 0rem;
    background-color: transparent;
    color: ${color.white};
    width: 40px;
    height: 40px;
  }
`;

const NextButton = styled(RoundButton)`
  position: absolute;
  top: 50%;
  right: -5rem;
  transform: translateY(-50%);
  z-index: 10;

  @media screen and (max-width: ${size.desktop}) {
    right: 0rem;
    background-color: transparent;
    color: ${color.white};
    width: 40px;
    height: 40px;
  }
`;

const ModalCloseButton = styled.button`
  padding: 0.5rem;
  color: ${color.graylishBlue};
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
    border: 2px solid ${color.lightOrange};
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
