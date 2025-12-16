import Image from 'next/image';
import React from 'react';

export default function SignatureMechanism() {
  return (
    <section className="w-full  flex justify-center pb-30">
      <div className="lg:border-y border-goldColor flex  flex-col lg:flex-row justify-between items-center gap-20 max-w-[960px]">
        <p className="max-w-[500px] px-10 pt-10 lg:pt-0">
          featured in the Bridges collection. It solved a problem occupyingour
          profession for over five centuries: that of constant force. Since our
          founding we have audaciously turned the world of watchmakingupside
          down – literally – to reveal the art in precision engineering.
          OurTourbillon ‘With Three Gold Bridges’ transformed Bridges in the
          1860sfrom just a technicalelement into a visible and integral partof
          thetimepiece,a first in watchmaking. Presented as a first prototype in
          2008
        </p>
        <Image
          src="/img/featured.png"
          width={457}
          height={393}
          alt="시계"
          className="border-y border-goldColor lg:border-none"
        />
      </div>
    </section>
  );
}
