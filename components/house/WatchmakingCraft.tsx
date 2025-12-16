import Image from 'next/image';
import React from 'react';

export default function WatchmakingCraft() {
  return (
    <section className="w-full flex flex-col items-center  ">
      <div className="max-w-[900px] ">
        <Image src="/img/SAGA_2.png" alt="시계" width={962} height={515} />
        <p className="pt-5 text-16 pb-30 px-4">
          Girard-Perregaux has given rise to genuine innovations from the Three
          Bridges of Constant Girard-Perregaux, to the iconic Constant
          Escapement L.M. The later enabled us to solve a problem occupying the
          watchmaking world for over five centuries: that of constant force. The
          boundless creativity of our master watchmakers continues to enrich
          Girard-Perregaux epic saga to this day.
        </p>
      </div>
    </section>
  );
}
