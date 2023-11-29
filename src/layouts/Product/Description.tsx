import { ReactNode } from 'react';
import styled from 'styled-components';
import { size } from 'styles/constants';

interface DescriptionProps {
  children: ReactNode;
}

export default function Description({ children }: DescriptionProps) {
  return <DescriptionBox>{children}</DescriptionBox>;
}

const DescriptionBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  @media screen and (max-width: ${size.desktop}) {
    width: 100%;
    padding: 0 1.5rem;
  }
`;
