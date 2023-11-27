import { ReactNode } from 'react';
import styled from 'styled-components';
import { color } from 'styles/constants';

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
`;
