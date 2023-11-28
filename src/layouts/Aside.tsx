import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { color } from 'styles/constants';

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
        <button>❌</button>
        <ul>
          <li>Collections</li>
          <li>Mens</li>
          <li>Womens</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
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
  background-color: ${color.white};
  z-index: 20;
`;
