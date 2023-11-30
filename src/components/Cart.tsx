import styled from 'styled-components';
import { color, timer } from 'styles/constants';
import { ReactComponent as DeleteIcon } from 'assets/images/icon-delete.svg';
import { Button } from 'styles/elements';
import useAnimation from 'hooks/useAnimation';
import { useContext } from 'react';
import ProductContext from 'context/ProductContext';

export default function Cart() {
  const { animation } = useAnimation();
  const { cart, removeCart } = useContext(ProductContext);
  const isCartEmpty = cart.length === 0;

  return (
    <CartBox className={animation ? 'animated' : ''}>
      <CartHead>Cart</CartHead>
      {isCartEmpty ? (
        <NoCart>Yout cart is empty.</NoCart>
      ) : (
        cart.map(item => (
          <CartItemBox key={item.id}>
            <img src={item.thumbnail[0]} />
            <CartItemDescriptionBox>
              <p>{item.name}</p>
              <p>
                ${item.finalPrice} x {item.amount}{' '}
                <strong>${item.finalPrice * item.amount}</strong>
              </p>
            </CartItemDescriptionBox>
            <DeleteButton
              onClick={() => {
                removeCart(item.id);
              }}>
              <DeleteIcon />
            </DeleteButton>
          </CartItemBox>
        ))
      )}
      <Button disabled={isCartEmpty}>Checkout</Button>
    </CartBox>
  );
}

const CartBox = styled.div`
  position: absolute;
  top: 60px;
  left: -340px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${color.white};
  border-radius: 1rem;
  padding: 1rem;
  z-index: 10;
  width: 420px;
  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity ${timer.default};

  &.animated {
    opacity: 1;
  }
`;

const NoCart = styled.p`
  margin: 1rem 0;
  text-align: center;
  font-size: 0.8rem;
`;
const CartHead = styled.h1`
  font-size: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${color.lightGrayishBlue};
`;

const CartItemBox = styled.div`
  display: flex;
  gap: 1rem;

  img {
    width: 48px;
    height: 48px;
    border-radius: 0.4rem;
  }
`;

const CartItemDescriptionBox = styled.div`
  flex-grow: 1;
  p {
    font-size: 0.9rem;
  }

  strong {
    font-weight: 700;
    margin-left: 0.25rem;
  }
`;

const DeleteButton = styled.button`
  color: ${color.graylishBlue};
`;
