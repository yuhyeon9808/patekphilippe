import Image from 'next/image';
import React from 'react';
import LinkBtn from '../ui/LinkBtn';

export default function StoreLocator() {
  return (
    <section className="relative w-full">
      <Image
        src="/img/bg_store.png"
        alt="스토어 위치 찾기"
        width={1400}
        height={789}
        className="object-cover w-full"
      />
      <div className="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] flex flex-col items-center">
        <p className="text-14 text-center whitespace-nowrap ">
          where to buy a Patek Philippe
        </p>
        <p className="md:text-32 text-24 font-fair md:pb-5 pb-3 text-cente whitespace-nowrap">
          STORE LOCATOR
        </p>
        <LinkBtn link="/salons" />
      </div>
    </section>
  );
}
