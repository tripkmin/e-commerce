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
import { color, size } from 'styles/constants';

interface SliderProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  product: ProductT;
}

export default function ModalSlider({ setIsModalOpen, product }: SliderProps) {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [currentSwiperIdx, setCurrentSwiperIdx] = useState<number>();

  const switchSwiperIdx = (idx: number) => {
    if (swiper) {
      swiper.slideTo(idx);
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
          }}
        >
          <LeftArrow />
        </PrevButton>
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
        <NextButton
          onClick={() => {
            swiper && swiper.slideNext();
          }}
        >
          <RightArrow />
        </NextButton>
      </ModalImageWrapper>
      <Thumbnail>
        {product.img.map((img, imgIdx) => (
          <img
            className={currentSwiperIdx === imgIdx ? 'active' : ''}
            key={img}
            src={img}
            alt={img}
            width="100%"
            onClick={() => {
              setCurrentSwiperIdx(imgIdx);
              switchSwiperIdx(imgIdx);
            }}
          ></img>
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
  }
`;

const ModalCloseButton = styled.button`
  padding: 0.5rem;
  color: ${color.graylishBlue};
`;
