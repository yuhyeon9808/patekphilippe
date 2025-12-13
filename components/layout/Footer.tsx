import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full h-[70px] bg-footer flex justify-between px-7 items-center ">
      <div className="flex gap-3">
        <Link href="/">
          <Image src="/img/logo.png" width={76} height={18} alt="파텍필립" />
        </Link>
        <p className="text-[#303030] text-14 hidden md:block">
          [ LEGAL NOTICES ] - © 2025 PATEK PHILIPPE
        </p>
      </div>
      <div className="flex gap-3">
        <a href="https://www.instagram.com/patekphilippe/" target="_blank">
          <Image
            src="/img/instar.png"
            width={20}
            height={20}
            alt="instargram"
          />
        </a>
        <a href="#">
          <Image src="/img/youtube.png" width={29} height={20} alt="youtube" />
        </a>
      </div>
    </footer>
  );
}
