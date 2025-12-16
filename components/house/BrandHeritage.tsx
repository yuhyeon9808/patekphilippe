import Image from 'next/image';
import React from 'react';

export default function BrandHeritage() {
  return (
    <section className="w-full h-auto pb-40 lg:pb-0">
      <div className="relative w-full flex justify-center">
        <div className="bg-background lg:w-[600px] w-full  hh-[300px] absolute lg:bottom-[100px] bottom-[-100px] px-10 pt-10">
          <div className="flex flex-col items-center">
            <Image
              src="/img/Girardperregaux.png"
              alt="Girardperregaux"
              width={155}
              height={27}
              className="mb-[-15px]"
            />
            <p className="font-fair text-goldColor text-40 pb-3">
              AN EPIC SAGA
            </p>
            <p>
              Girard-Perregaux is one of the oldest fine watchmaking
              Manufactures still inoperation in Switzerland today. Our history
              is dotted with exceptional creations that bridge aesthetics and
              unctionality to reveal the value of time since 1791.
            </p>
          </div>
        </div>
        <Image
          src="/img/SAGA.png"
          alt="백그라운드"
          width={1400}
          height={769}
          className="object-cover pb-40 w-full h-auto"
        />
      </div>
    </section>
  );
}
