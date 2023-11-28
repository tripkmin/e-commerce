import { ReactNode } from 'react';
import styled from 'styled-components';
import { color, size } from 'styles/constants';

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return <HeaderBox>{children}</HeaderBox>;
}

const HeaderBox = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  margin: 0 auto;
  border-bottom: 1px solid ${color.graylishBlue};

  @media screen and (max-width: ${size.desktop}) {
    padding: 0.5rem 1.5rem;
  }
`;
