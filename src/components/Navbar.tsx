import styled from 'styled-components';
import avatar from 'assets/images/image-avatar.png';
import { color, size, timer } from 'styles/constants';
import { ReactComponent as LogoIcon } from 'assets/images/logo.svg';
import { ReactComponent as MenuIcon } from 'assets/images/icon-menu.svg';
import { ReactComponent as CartIcon } from 'assets/images/icon-cart.svg';

import { useContext, useRef, useState } from 'react';
import Aside from 'layouts/Aside';
import useClickOutside from 'hooks/useClickOutside';
import Cart from './Cart';
import ProductContext from 'context/ProductContext';

export default function Navbar() {
  const [isAsideMenuOpen, setIsAsideMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, getAllAmount } = useContext(ProductContext);
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
          }}
        >
          <MenuIcon></MenuIcon>
        </Menu>
        <Logo href="#">
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
          {isCartOpen && <Cart />}
          <CartButton
            onClick={() => {
              setIsCartOpen(prev => !prev);
            }}
          >
            {cart.length !== 0 ? (
              <SmallBadge>
                <span>{getAllAmount() > 99 ? '99+' : getAllAmount()}</span>
              </SmallBadge>
            ) : null}
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

const SmallBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  background-color: ${color.orange};
  border-radius: 10px;
  position: absolute;
  top: -12px;
  right: -8px;

  span {
    font-size: 0.6rem;
    color: ${color.white};
  }
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

const Logo = styled.a`
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

  li {
    position: relative;

    &::after {
      position: absolute;
      top: 58px;
      left: 0;
      width: 0;
      height: 3px;
      content: '';
      background-color: orange;
      opacity: 0;
      transition: all ${timer.default};
    }

    &:hover {
      &::after {
        width: 100%;
        opacity: 1;
      }
    }
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
