import React from 'react';
import Navbar from './navbar';

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}