import Image from 'next/image';
import React from 'react';
import LinkBtn from '../ui/LinkBtn';

export default function BrandStory() {
  return (
    <div className="font-fair py-20 px-4">
      <p className="md:text-40  text-32 text-center">PATEK PHILIPPE</p>
      <p className="md:text-20 text-16 text-center pb-10">
        Experience Patek Philippe tradition by visiting museums and the houses
        where you can feel the passage of time.
      </p>
      <div className="flex md:flex-row flex-col justify-center items-center gap-5">
        <div className="relative group">
          <Image
            src="/img/museum.png"
            alt="박물관"
            width={410}
            height={410}
            className="md:w-[410px] md:h-[410px] w-[350px] :h-[350px] object-contain
          
          "
          />
          <div
            className="absolute inset-0 bg-black/40 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300"
          />
          <div
            className="absolute inset-0 flex items-center justify-center
               text-white opacity-0
               group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="flex flex-col">
              <div>
                <p className="text-32 font-bold pb-5">
                  PATEK PHILIPPE <br />
                  MUSEUM
                </p>
                <LinkBtn link="/house" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <Image
            src="/img/house.png"
            alt="하우스"
            width={410}
            height={410}
            className="md:w-[410px] md:h-[410px] w-[350px] :h-[350px] object-contain
          
          "
          />
          <div
            className="absolute inset-0 bg-black/40 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300"
          />
          <div
            className="absolute inset-0 flex items-center justify-center
               text-white opacity-0
               group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="flex flex-col">
              <div>
                <p className="text-32 font-bold pb-5">
                  PATEK PHILIPPE <br />
                  HOUSE
                </p>
                <LinkBtn link="/house" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
