import { ReactNode } from 'react';
import styled from 'styled-components';
import { size } from 'styles/constants';

interface ImageProps {
  children: ReactNode;
}

export default function Image({ children }: ImageProps) {
  return <ImageBox>{children}</ImageBox>;
}

const ImageBox = styled.div`
  width: 40%;

  @media screen and (max-width: ${size.desktop}) {
    width: 100%;
  }
`;
