'use client';
import { WATCH } from '@/constant/menu';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Menu() {
  const [selected, setSelected] = useState<number>(1);
  return (
    <div className="md:mx-20 md:px-5 mx-4  px-0">
      <p className="font-fair font-bold text-32  mt-20 mb-7">
        {'Bridges'.toUpperCase()}
      </p>
      <div className="border-y border-foreground py-5">
        <ul className="grid lg:grid-cols-4 text-center whitespace-nowrap gap-3">
          {WATCH.map((item) => (
            <li key={item.id} onClick={() => setSelected(item.id)}>
              <Link
                href={item.href}
                className={` py-2 px-3 ${
                  selected === item.id ? 'text-foreground/60' : ''
                }`}
              >
                {item.menu.trim().toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
