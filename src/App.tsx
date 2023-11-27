import styled from 'styled-components';
import Header from './layouts/Header';
import Navbar from 'components/Navbar';
import Slider from 'components/ProductSlider';
import ProductDescription from 'components/ProductDesciption';
import Main from 'layouts/Main';

const product = {
  name: 'Fall Limited Edition Sneakers',
  manufacturer: 'SNEAKER COMPANY',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  orginalPrice: 250.0,
  finalPrice: 125.0,
  img: [
    './image-product-1.jpg',
    './image-product-2.jpg',
    './image-product-3.jpg',
    './image-product-4.jpg',
  ],
  thumbnail: [
    './image-product-1-thumbnail.jpg',
    './image-product-2-thumbnail.jpg',
    './image-product-3-thumbnail.jpg',
    './image-product-4-thumbnail.jpg',
  ],
};

export default function App() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <ProductBox>
          <ImageBox>
            <Slider product={product}></Slider>
          </ImageBox>
          <DescriptionBox>
            <ProductDescription product={product}></ProductDescription>
          </DescriptionBox>
        </ProductBox>
      </Main>
    </>
  );
}

const ProductBox = styled.div`
  display: flex;
  padding: 6rem 4rem;
  justify-content: space-between;
`;

const ImageBox = styled.div`
  width: 40%;
`;

const DescriptionBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
`;
