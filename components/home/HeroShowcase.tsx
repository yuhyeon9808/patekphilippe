import Image from 'next/image';
import React from 'react';
import LinkBtn from '../ui/LinkBtn';

export default function HeroShowcase() {
  return (
    <section className="w-full py-20 px-4">
      <p className="md:text-40 text-32 font-fair font-bold text-center pb-7">
        A LIFETIME OF ARTISTRY AND SKILL
      </p>
      <div className="flex justify-center items-center">
        <div className="md:flex md:gap-10 ">
          <Image
            src="/img/poster.png"
            width={410}
            height={410}
            alt="메인제품사진"
            className="object-contain md:w-[410px] md:h-[410px] w-[350px] h-[350px]"
          />
          <div className="md:w-[410px] md:h-[410px] w-[350px] h-[350px] flex flex-col justify-center">
            <div className="">
              <p className="pb-5 font-fair text-32 md:pt-0 pt-10">
                GRAND <br />
                COMPLICATIONS
              </p>
              <p className="text-16 pb-10">
                The men’s Reference 5270 perpetual calendar chronograph in rose
                gold features a gold “Goutte” bracelet that literally blends
                with the case: this design is exclusive to Patek Philippe. The
                ebony black sunburst dial is beautifully balanced and legible,
                with a double aperture for the day and the month at 12 o’clock
                and an analog date at 6 o’clock.
              </p>
              <LinkBtn link="/grandComplications" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
