'use client';
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="px-4 w-full h-[70px] flex justify-between items-center">
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <Menu />
        </button>
        <Link href="/">
          <Image src="/img/logo.png" width={130} height={32} alt="파텍필립" />
        </Link>
        <Link href="/cart">
          <ShoppingCart />
        </Link>
      </header>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
