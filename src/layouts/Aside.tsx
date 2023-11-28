import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { color } from 'styles/constants';
import { ReactComponent as IconClose } from 'assets/images/icon-close.svg';
interface AsideProps {
  setIsAsideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Aside({ setIsAsideMenuOpen }: AsideProps) {
  return createPortal(
    <Backdrop
      onClick={() => {
        setIsAsideMenuOpen(false);
      }}
    >
      <AsideMenuBox
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <CloseButton>
          <IconClose />
        </CloseButton>
        <MenuList>
          <MenuItem>Collections</MenuItem>
          <MenuItem>Mens</MenuItem>
          <MenuItem>Womens</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
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
  background-color: #11111144;
  z-index: 10;
`;

const AsideMenuBox = styled.div`
  width: 300px;
  height: 100vh;
  padding: 2rem;
  background-color: ${color.white};
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
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
