import { MENU } from '@/constant/menu';
import { X } from 'lucide-react';
import Link from 'next/link';
import React, { Dispatch, SetStateAction, useState } from 'react';

export default function Nav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [isSelected, setIsSelected] = useState<number>();
  return (
    <nav
      className={`px-4 w-[320px] min-h-dvh bg-background fixed top-0 z-20  transition-transform duration-400 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-[-320px]'
      }`}
    >
      <ul className="flex flex-col gap-8">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex justify-end p-4 mt-10"
        >
          <X />
        </button>
        {MENU.map((item) => (
          <li
            key={item.id}
            className={`w-full pl-3 rounded-md hover:bg-foreground/30 py-3 ${
              isSelected === item.id ? 'bg-foreground/30' : ''
            }`}
            onClick={() => setIsSelected(item.id)}
          >
            <Link href={item.href} className="block">
              {item.menu}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
