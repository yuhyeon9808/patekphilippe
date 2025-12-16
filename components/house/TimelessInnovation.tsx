import Image from 'next/image';
import React from 'react';

export default function TimelessInnovation() {
  return (
    <section>
      <div className="w-full pb-30">
        <div className="relative flex flex-col items-center">
          <Image
            src="/img/INNOVATION.png"
            alt="INNOVATION"
            width={1399}
            height={478}
            className="object-cover w-full max-h-[530px]"
          />
          <div className="bg-background md:absolute md:w-[800px] md:h-[100px] md:bottom-0 text-center px-4">
            <p className="font-fair text-32 pb-3">
              A TIMELESS TRADITION OF INNOVATION
            </p>
            <p>
              Presented as a first prototype in 2008 and manufactured as of
              2013, the Constant Escapement L.M.is yet another technical
              revolution from Girard-Perregaux
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex  justify-center pb-20">
        <div className="flex md:flex-row flex-col gap-10">
          <Image
            src="/img/TIMELESS.png"
            alt="TIMELESS"
            width={300}
            height={200}
          />
          <Image
            src="/img/TIMELESS2.png"
            alt="TIMELESS"
            width={300}
            height={200}
          />
          <Image
            src="/img/TIMELESS3.png"
            alt="TIMELESS"
            width={300}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}
