import useAnimation from 'hooks/useAnimation';
import useScrollLock from 'hooks/useScrollLock';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { color, size, timer } from 'styles/constants';

interface ModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

export default function Modal({ setIsModalOpen, children }: ModalProps) {
  const { animation } = useAnimation();
  useScrollLock();

  return createPortal(
    <Backdrop
      className={animation ? 'animated' : ''}
      onClick={() => setIsModalOpen(false)}
    >
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
  background-color: ${color.backdrop};
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity ${timer.default};
  z-index: 1;

  &.animated {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  width: 65%;
  z-index: 2;
`;
