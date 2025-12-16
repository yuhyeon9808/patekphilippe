import Image from 'next/image';
import React from 'react';

export default function PlaceOfOrigin() {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="relative max-w-[960px]">
        <Image
          src="/img/FONDS.png"
          alt="LA CHAUX-DE-FONDS"
          width={1007}
          height={583}
          className=" object-contain"
        />

        <div className="md:bg-background md:w-[400px] md:h-[70px] md:absolute bottom-0 left-0 ">
          <p className="font-fair text-32 pl-3 pt-3">LA CHAUX-DE-FONDS</p>
        </div>
      </div>
      <div className="max-w-[960px]">
        <p className="pt-5 pb-30 px-4">
          When Constant Girard and Marie Perregaux married in 1854, they joined
          more than two Swiss watchmaking families in La Chaux-de-Fonds. They
          soon created an Atelier in 1856 at the vanguard of horological
          innovation that would set bold new standards for watchmakers worldwide
          in a tradition that continues today. Yet, there is another union in
          our epic saga. In 1906, Girard-Perregaux acquired the Maison of
          Jean-François Bautte of Geneva. We trace our roots back to Bautte’s
          first launch in 1791 with designs that revealed the beauty of time
          with extraordinarily thin, jewelled cases.
        </p>
      </div>
    </section>
  );
}
