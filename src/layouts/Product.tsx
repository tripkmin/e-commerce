import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { size } from 'styles/constants';
import { ProductT } from 'types/types';
import Modal from './Modal';
import ModalSlider from 'components/ModalSlider';
import Image from './Product/Image';
import Slider from 'components/ProductSlider';
import Description from './Product/Description';
import ProductDescription from 'components/ProductDesciption';

interface ProductProps {
  children?: ReactNode;
  product: ProductT;
}

export default function Product({ product }: ProductProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ProductBox>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <ModalSlider setIsModalOpen={setIsModalOpen} product={product}></ModalSlider>
        </Modal>
      )}
      <Image>
        <Slider setIsModalOpen={setIsModalOpen} product={product}></Slider>
      </Image>
      <Description>
        <ProductDescription product={product}></ProductDescription>
      </Description>
    </ProductBox>
  );
}

const ProductBox = styled.div`
  display: flex;
  padding: 6rem 4rem;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media screen and (max-width: ${size.desktop}) {
    padding: 0;
    flex-direction: column;
    gap: 2rem;
  }
`;
