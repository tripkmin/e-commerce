import styled from 'styled-components';
import logo from 'assets/images/logo.svg';
import cartIcon from 'assets/images/icon-cart.svg';
import avatar from 'assets/images/image-avatar.png';
import { color, size } from 'styles/constants';
import menuIcon from 'assets/images/icon-menu.svg';
import { useEffect, useRef, useState } from 'react';
import { Button } from 'styles/elements';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  const clickOutside = (e: Event) => {
    if (isCartOpen && cartRef.current && !cartRef.current.contains(e.target as Node)) {
      setIsCartOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('click', clickOutside);
    };
  }, [isCartOpen]);

  return (
    <>
      <NavbarLeft>
        <Menu>
          <img src={menuIcon}></img>
        </Menu>
        <Logo>
          <img src={logo}></img>
        </Logo>
        <ListBox>
          <List>
            <a href="#collections">
              <li>Collections</li>
            </a>
            <a href="#men">
              <li>Men</li>
            </a>
            <a href="#women">
              <li>Women</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </List>
        </ListBox>
      </NavbarLeft>
      <NavbarRight>
        <CartBoxWrapper ref={cartRef}>
          {isCartOpen && (
            <CartBox>
              <CartHead>Cart</CartHead>
              <CartItemBox>
                <img src="./image-product-1.jpg" width="48px" height="48px" />
                <CartItemDescriptionBox>
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    $125 x 3 <strong>$375</strong>
                  </p>
                </CartItemDescriptionBox>
                <button>🗑️</button>
              </CartItemBox>
              <Button>Checkout</Button>
              {/* <p>Yout cart is empty.</p> */}
            </CartBox>
          )}
          <button
            onClick={() => {
              setIsCartOpen(prev => !prev);
            }}
          >
            <img src={cartIcon}></img>
          </button>
        </CartBoxWrapper>

        <button>
          <img src={avatar} width={48}></img>
        </button>
      </NavbarRight>
    </>
  );
}
const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const CartBoxWrapper = styled.div`
  position: relative;
`;

const CartBox = styled.div`
  position: absolute;
  bottom: -200px;
  left: -220px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${color.white};
  border-radius: 1rem;
  padding: 1rem;
  z-index: 10;
  width: 340px;
  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.2);
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
  p {
    font-size: 0.9rem;
  }

  strong {
    font-weight: 700;
  }
`;

const Menu = styled.button``;
const Logo = styled.div`
  margin-right: 4rem;
  font-size: 2rem;
  font-weight: 700;
`;

const ListBox = styled.div`
  flex-grow: 1;
`;

const List = styled.ul`
  display: flex;
  gap: 1.5rem;
  color: ${color.darkGraylishBlue};
  font-weight: 500;

  @media screen and (max-width: ${size.desktop}) {
    display: none;
  }
`;
