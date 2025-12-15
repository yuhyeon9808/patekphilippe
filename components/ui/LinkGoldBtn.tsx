import Link from 'next/link';
import React from 'react';

export default function LinkGoldBtn({
  link,
  text,
}: {
  link: string;
  text: string;
}) {
  return (
    <Link
      href={link}
      className=" w-[250px] block font-fair text-16 border border-goldColor text-goldColor py-2  hover:bg-goldColor/10"
    >
      {text}
    </Link>
  );
}
