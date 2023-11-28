import { Dispatch, ReactNode, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

interface ModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

export default function Modal({ setIsModalOpen, children }: ModalProps) {
  return createPortal(
    <Backdrop onClick={() => setIsModalOpen(false)}>
      <Container
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {children}
      </Container>
    </Backdrop>,
    document.getElementById('modal') as HTMLElement
  );
}

const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00000090;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  z-index: 2;
`;
