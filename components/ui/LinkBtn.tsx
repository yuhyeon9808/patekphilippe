import Link from 'next/link';
import React from 'react';

export default function LinkBtn({ link }: { link: string }) {
  return (
    <Link
      href={link}
      className=" font-fair text-16 border border-foreground py-1 px-3 hover:bg-foreground/10"
    >
      VIEW MORE
    </Link>
  );
}
