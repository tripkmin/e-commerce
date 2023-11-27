import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export default function Main({ children }: MainLayoutProps) {
  return <main>{children}</main>;
}
