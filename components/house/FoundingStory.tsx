import Image from 'next/image';
import React from 'react';

export default function FoundingStory() {
  return (
    <>
      <section className="relative w-full h-auto flex justify-center max-h-[490px] mb-20">
        <div className="md:flex justify-center hidden w-full ">
          <Image
            src="/img/h_bg.png"
            alt="백그라운드"
            width={1400}
            height={485}
            className=" object-cover w-full h-auto min-w-[1400px] max-h-[490px]"
          />

          <div className="flex flex-row  lg:gap-16 gap-10 justify-center items-center absolute top-1/2 translate-y-[-50%]">
            <Image
              src="/img/EPIC.png"
              alt="EPIC"
              width={427}
              height={497}
              className="w-full object-cover h-[504px] pt-1"
            />
            <div className="text-background max-w-[500px] ">
              <p className="font-fair text-32 font-bold pb-3">
                THE EPIC
                <br />
                SAGA BEGINS
              </p>
              <p>
                When Constant Girard and Marie Perregaux married in 1854, they
                joined more than two Swiss watchmaking families in La
                Chaux-de-Fonds. They soon created an Atelier in 1856 at the
                vanguard of horological innovation that would set bold new
                standards for watchmakers worldwide in a tradition that
                continues today.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="md:hidden flex flex-col items-center">
        <Image
          src="/img/EPIC.png"
          alt="EPIC"
          width={427}
          height={497}
          className="object-cover  "
        />
        <div className=" max-w-[420px] mb-20 ">
          <p className="font-fair text-32 font-bold pt-5 pb-3">
            THE EPIC
            <br />
            SAGA BEGINS
          </p>
          <p>
            When Constant Girard and Marie Perregaux married in 1854, they
            joined more than two Swiss watchmaking families in La
            Chaux-de-Fonds. They soon created an Atelier in 1856 at the vanguard
            of horological innovation that would set bold new standards for
            watchmakers worldwide in a tradition that continues today.
          </p>
        </div>
      </div>
    </>
  );
}
