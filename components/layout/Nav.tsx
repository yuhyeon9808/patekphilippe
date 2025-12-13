import { MENU } from '@/constant/menu';
import { X } from 'lucide-react';
import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';

export default function Nav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <nav
      className={`px-4 w-[320px] min-h-[100dvh] bg-background absolute top-0 z-20  transition-transform duration-400 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-[-320px]'
      }`}
    >
      <ul className="flex flex-col gap-10">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex justify-end p-4 mt-3"
        >
          <X />
        </button>
        {MENU.map((item) => (
          <li key={item.id} className="pl-3">
            <Link href={item.href}>{item.menu}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
