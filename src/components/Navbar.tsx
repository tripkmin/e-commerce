import styled from 'styled-components';
import logo from 'assets/images/logo.svg';
import cartIcon from 'assets/images/icon-cart.svg';
import avatar from 'assets/images/image-avatar.png';
import { color, size } from 'styles/constants';
import menuIcon from 'assets/images/icon-menu.svg';

export default function Navbar() {
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
        <button>
          <img src={cartIcon}></img>
        </button>
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
