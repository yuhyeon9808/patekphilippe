import Image from 'next/image';
import React from 'react';
import LinkBtn from '../ui/LinkBtn';

export default function HeroBanner() {
  return (
    <>
      <div className="relative w-full h-auto ">
        <Image
          src="/img/007.png"
          alt="007에디션"
          width={1640}
          height={908}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 md:bg-black/40 bg-black/60" />
        <div className="z-30 absolute top-1/2 -translate-y-1/2 left-10">
          <p className="text-14 pb-2">JAMES BOND’S CHOICE</p>
          <p className="md:text-32 text-24 font-semibold md:pb-10 pb-5">
            THE SEAMASTER DIVER
            <br />
            300M 007 EDITION
          </p>
          <LinkBtn link="/grandComplications" />
        </div>
      </div>
    </>
  );
}
