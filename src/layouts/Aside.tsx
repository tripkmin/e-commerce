import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { color, timer } from 'styles/constants';
import { ReactComponent as IconClose } from 'assets/images/icon-close.svg';
import useAnimation from 'hooks/useAnimation';
import useScrollLock from 'hooks/useScrollLock';

interface AsideProps {
  setIsAsideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Aside({ setIsAsideMenuOpen }: AsideProps) {
  const { animation } = useAnimation();
  useScrollLock();

  return createPortal(
    <Backdrop
      className={animation ? 'animated' : ''}
      onClick={() => {
        setIsAsideMenuOpen(false);
      }}>
      <AsideMenuBox
        className={animation ? 'animated' : ''}
        onClick={e => {
          e.stopPropagation();
        }}>
        <CloseButton
          onClick={() => {
            setIsAsideMenuOpen(false);
          }}>
          <IconClose />
        </CloseButton>
        <MenuList>
          <a href="#collections">
            <MenuItem>Collections</MenuItem>
          </a>
          <a href="#mens">
            <MenuItem>Mens</MenuItem>
          </a>
          <a href="#womens">
            <MenuItem>Womens</MenuItem>
          </a>
          <a href="#about">
            <MenuItem>About</MenuItem>
          </a>
          <a href="#contact">
            <MenuItem>Contact</MenuItem>
          </a>
        </MenuList>
      </AsideMenuBox>
    </Backdrop>,
    document.getElementById('aside') as HTMLElement
  );
}

const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: ${color.backdrop};
  z-index: 10;
  opacity: 0;
  transition: opacity ${timer.default};

  &.animated {
    opacity: 1;
  }
`;

const AsideMenuBox = styled.div`
  width: 300px;
  height: 100vh;
  padding: 1.5rem 2rem;
  background-color: ${color.white};
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  transform: translateX(-300px);
  transition: transform ${timer.fast};

  &.animated {
    transform: translateX(0);
  }
`;

const CloseButton = styled.button`
  padding: 0;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MenuItem = styled.li`
  font-size: 1.2rem;
  font-weight: 700;
`;
