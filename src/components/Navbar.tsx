import styled from 'styled-components';
import avatar from 'assets/images/image-avatar.png';
import { color, size } from 'styles/constants';
import { ReactComponent as LogoIcon } from 'assets/images/logo.svg';
import { ReactComponent as MenuIcon } from 'assets/images/icon-menu.svg';
import { ReactComponent as CartIcon } from 'assets/images/icon-cart.svg';
import { ReactComponent as DeleteIcon } from 'assets/images/icon-delete.svg';
import { useRef, useState } from 'react';
import { Button } from 'styles/elements';
import Aside from 'layouts/Aside';
import useClickOutside from 'hooks/useClickOutside';

export default function Navbar() {
  const [isAsideMenuOpen, setIsAsideMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  useClickOutside(() => {
    setIsCartOpen(false);
  }, cartRef);

  return (
    <>
      {isAsideMenuOpen && <Aside setIsAsideMenuOpen={setIsAsideMenuOpen}></Aside>}
      <NavbarLeft>
        <Menu
          onClick={() => {
            setIsAsideMenuOpen(prev => !prev);
          }}>
          <MenuIcon></MenuIcon>
        </Menu>
        <Logo>
          <LogoIcon />
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
                <img src="./image-product-1.jpg" />
                <CartItemDescriptionBox>
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    $125 x 3 <strong>$375</strong>
                  </p>
                </CartItemDescriptionBox>
                <DeleteButton>
                  <DeleteIcon />
                </DeleteButton>
              </CartItemBox>
              <Button>Checkout</Button>
              {/* <p>Yout cart is empty.</p> */}
            </CartBox>
          )}
          <CartButton
            onClick={() => {
              setIsCartOpen(prev => !prev);
            }}>
            <CartIcon></CartIcon>
          </CartButton>
        </CartBoxWrapper>
        <Avatar src={avatar}></Avatar>
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

  @media screen and (max-width: ${size.desktop}) {
    gap: 1rem;
  }
`;

const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const CartBoxWrapper = styled.div`
  position: relative;
`;

const CartBox = styled.div`
  position: absolute;
  bottom: -230px;
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
  }
`;

const DeleteButton = styled.button`
  color: ${color.graylishBlue};
`;
const Menu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  @media screen and (min-width: ${size.desktop}) {
    display: none;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4rem;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
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

const Avatar = styled.img`
  width: 40px;
  height: 40px;

  @media screen and (max-width: ${size.desktop}) {
    width: 32px;
    height: 32px;
  }
`;
