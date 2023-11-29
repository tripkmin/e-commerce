import styled from 'styled-components';
import { color, size, timer } from 'styles/constants';
import { Button } from 'styles/elements';
import { ProductT } from 'types/types';
import { ReactComponent as CartIcon } from 'assets/images/icon-cart.svg';
import { useContext, useState } from 'react';
import ProductContext from 'context/ProductContext';

interface ProductDescriptionProps {
  product: ProductT;
}

export default function ProductDescription({ product }: ProductDescriptionProps) {
  const [amount, setAmount] = useState(0);
  const { handleAddToCart } = useContext(ProductContext);

  const amountPlusHandler = () => {
    if (amount < 99) {
      setAmount(prev => (prev += 1));
    }
  };

  const amountMinusHandler = () => {
    if (amount > 0) {
      setAmount(prev => (prev -= 1));
    }
  };

  const amountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (String(amount).length >= 2) return;
    setAmount(Number(e.target.value));
  };

  const amountOnKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();
  };

  const addCartHandler = () => {
    const result = {
      id: product.id,
      name: product.name,
      amount,
      finalPrice: product.finalPrice,
      thumbnail: product.thumbnail,
    };
    handleAddToCart(result);
  };

  return (
    <>
      <DescriptionMain>
        <SubHead>{product.manufacturer}</SubHead>
        <Head>{product.name}</Head>
        <Description>{product.description}</Description>
        <PriceBox>
          <FinalPriceBox>
            <FinalPrice>${product.finalPrice}</FinalPrice>
            <DiscountPercentBox>
              <DiscountPercent>
                {(product.finalPrice / product.orginalPrice) * 100}%
              </DiscountPercent>
            </DiscountPercentBox>
          </FinalPriceBox>
          <OriginalPrice>${product.orginalPrice}</OriginalPrice>
        </PriceBox>
      </DescriptionMain>
      <DescriptionFooter>
        <AmountBox>
          <AmountButton onClick={amountMinusHandler}>-</AmountButton>
          <AmountInput
            onKeyDown={amountOnKeyDownHandler}
            type="number"
            value={Number(amount).toString()}
            onChange={amountChangeHandler}
          ></AmountInput>
          <AmountButton onClick={amountPlusHandler}>+</AmountButton>
        </AmountBox>
        <CartButton onClick={addCartHandler}>
          <CartIcon style={{ fill: 'white' }}></CartIcon>
          <span>Add to cart</span>
        </CartButton>
      </DescriptionFooter>
    </>
  );
}

const SubHead = styled.h6`
  color: ${color.orange};
  font-weight: 700;
  letter-spacing: 0.15rem;
`;

const Head = styled.h1`
  margin: 1rem 0;
`;

const Description = styled.p`
  color: ${color.darkGraylishBlue};
  margin: 1rem 0;
`;

const DescriptionMain = styled.div``;

const DescriptionFooter = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: ${size.desktop}) {
    flex-direction: column;
  }
`;

const PriceBox = styled.div`
  @media screen and (max-width: ${size.desktop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const FinalPriceBox = styled.div`
  display: flex;
  gap: 1rem;
`;

const FinalPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;

const DiscountPercentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DiscountPercent = styled.p`
  padding: 0;
  background-color: ${color.paleOrange};
  color: ${color.orange};
  font-weight: 700;
  border-radius: 0.2rem;
  padding: 0.1rem 0.5rem;
`;

const OriginalPrice = styled.p`
  color: ${color.graylishBlue};
  text-decoration: line-through;
`;

const AmountBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${color.lightGrayishBlue};
  border-radius: 1rem;
  padding: 1rem;
`;

const AmountButton = styled.button`
  font-weight: 700;
  transition: color ${timer.default};

  &:hover {
    color: ${color.orange};
  }
`;

const AmountInput = styled.input`
  background-color: transparent;
  text-align: center;
  width: 5rem;
  font-weight: 700;
`;

const CartButton = styled(Button)`
  gap: 1rem;
  flex-grow: 1;
`;
