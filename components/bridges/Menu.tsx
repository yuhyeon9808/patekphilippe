import { WATCH } from '@/constant/menu';
import Link from 'next/link';
import React from 'react';

export default function Menu() {
  return (
    <div className="md:mx-20 md:px-5 mx-4  px-0">
      <p className="font-fair font-bold text-32  mt-20 mb-7">
        {'Bridges'.toUpperCase()}
      </p>
      <div className="border-y border-foreground py-5">
        <ul className="grid lg:grid-cols-4 text-center whitespace-nowrap gap-3">
          {WATCH.map((item) => (
            <li key={item.id} className="hover:text-foreground/80 ">
              <Link href={item.href}>{item.menu.trim().toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
