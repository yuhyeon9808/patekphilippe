import Image from 'next/image';
import React from 'react';
import LinkGoldBtn from '../ui/LinkGoldBtn';

export default function DetailPage() {
  return (
    <div className="w-full flex flex-col items-center bg-black">
      <section className="relative w-full ">
        <div className="relative w-full h-[760px] md:h-[760px] h-[640px]">
          <Image
            src="/img/top_bg.png"
            alt="백그라운드"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 flex justify-center px-6">
            <div className="w-full max-w-[720px]">
              <div className="relative mx-auto mt-[48px] md:mt-[60px]">
                <div className="relative flex justify-center">
                  <div className="relative z-10 w-[220px] md:w-[255px]">
                    <Image
                      src="/img/p_gold.png"
                      alt="5270"
                      width={255}
                      height={435}
                      className="w-full h-auto"
                    />
                  </div>

                  <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[250px] bg-black" />
                </div>

                <div className="bg-background pt-[26px] pb-[44px] px-6 text-center">
                  <p className="text-goldColor font-fair text-[32px] md:text-[40px] leading-tight">
                    GRAND COMPLICATIONS
                  </p>
                  <p className="text-goldColor font-fair text-[28px] md:text-[40px] leading-tight mt-2">
                    5270/1R-001
                  </p>

                  <p className="text-foreground text-16 mt-6 mx-auto max-w-[520px] leading-relaxed">
                    The men’s Reference 5270 perpetual calendar chronograph in
                    rose gold features a gold “Goutte” bracelet that literally
                    blends with the case: this design is exclusive to Patek
                    Philippe.
                  </p>

                  <div className="flex md:flex-row flex-col gap-5 justify-center items-center mt-10">
                    <LinkGoldBtn link="/" text="INSTRUCTION FOR USE" />
                    <LinkGoldBtn link="/cart" text="ADD TO CART" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full mt-40 flex flex-col items-center px-10 text-center max-w-[1100px]">
        <section>
          <Image
            src="/img/bg.png"
            width={1100}
            height={705}
            alt="시계 포스터"
          />
          <p className="text-goldColor font-fair text-24 pt-10">
            THE GLOBEMASTER ANNUAL CALENDAR
          </p>
          <p className="pt-2 pb-30">
            The Globemaster Annual Calendar collection adds an exciting
            selection of models to the original line. Along with an elegant
            design, each piece continues Patek Philippe’s Master Chronometer
            revolution, delivering the highest standards of precision and
            performance.
          </p>
        </section>
        <section>
          <Image
            src="/img/GRAND COMPLICATIONS_big.png"
            width={1100}
            height={705}
            alt="시계"
          />
          <p className="text-goldColor font-fair text-24 pt-10">
            LUXURIOUS AND STYLE
          </p>
          <p className="pt-2 pb-30">
            To accommodate the Annual Calendar feature, the cases are sized at
            41mm. The classic Pie Pan dial is presented in sun-brushed gold,
            black, opaline silver or two shades of grey. Meanwhile, the hands
            and indexes are either blued or crafted from gold.
          </p>
        </section>

        <section>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10 pb-30">
            <div className="max-w-[320px]">
              <Image
                src="/img/p_1img.png"
                width={320}
                height={320}
                alt="시계 "
              />
              <p className="text-goldColor font-fair text-24 pt-10">WATCH </p>
              <p className="pt-2 ">
                Manually wound mechanical movement. Caliber CH 29‑535 PS Q. Day,
                month, leap year and day/night display in apertures. Date by
                hand.
              </p>
            </div>
            <div className="max-w-[320px]">
              <Image
                src="/img/p_2img.png"
                width={320}
                height={320}
                alt="시계 "
              />
              <p className="text-goldColor font-fair text-24 pt-10">CASE </p>
              <p className="pt-2 ">
                Rose gold. Interchangeable full back and sapphire-crystal case
                back. Water resistant to 30 m. Diameter: 41 mm. Height: 12.4 mm.
              </p>
            </div>
            <div className="max-w-[320px]">
              <Image
                src="/img/p_3img.png"
                width={320}
                height={320}
                alt="시계 "
                className="object-contain"
              />
              <p className="text-goldColor font-fair text-24 pt-10">STRAP </p>
              <p className="pt-2 ">Rose gold. Fold-over clasp.</p>
            </div>
          </div>
        </section>

        <section className="flex lg:flex-row gap-10 flex-col text-left  pb-30">
          <Image src="/img/p_in.png" width={759} height={415} alt="시계" />
          <div>
            <p className="text-goldColor font-fair text-24 pt-10 ">
              CH 29-535 PS Q
            </p>
            <p className="pt-2">
              Chronograph. Center chronograph hand and instantaneous 30- minute
              counter. Perpetual calendar with day/night indication. Small
              seconds. Moon phases. Diameter: 32 mm. Height: 7 mm. Parts: 456.
              Jewels: 33. Power reserve: With the chronograph disengaged: min.
              55 hours - max. 65 hours. Balance: Gyromax®. Vibrations/hour: 28
              800 (4 Hz). Balance spring: Breguet. Hallmark: Patek Philippe
              Seal.
            </p>
          </div>
        </section>

        <video
          src="img/5270-1R.mp4"
          width="1000"
          poster="/img/video.png"
          controls
          className="pb-30"
        />
        <section className="pb-30 text-center">
          <p className="text-goldColor font-fair text-24 pt-10">YOUR CHOICE</p>
          <p className="pt-2 pb-10">
            Patek Philippe has delivered many exceptional Annual Calendar models
            that offer a tempting choice of materials and colours. And no matter
            which version you decide on, you will have the extra benefit of the
            industry’s highest certified movements. Find out more and then try
            them on at an Patek Philippe boutique.
          </p>
          <div className="flex md:flex-row md:gap-25 flex-col gap-5 justify-center items-center max-w-[1000px]">
            <Image
              src="/img/p_sliver.png"
              width={255}
              height={435}
              alt="시계"
              className="max-w-[200px]"
            />
            <Image
              src="/img/p_gold.png"
              width={255}
              height={435}
              alt="시계"
              className="max-w-[200px]"
            />
            <Image
              src="/img/p_an.png"
              width={255}
              height={435}
              alt="시계"
              className="max-w-[200px]"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
