import Image from 'next/image';
import React from 'react';

export default function IconicReinvention() {
  return (
    <section className="w-full flex justify-center pb-30 px-4">
      <div className="max-w-[960px]">
        <Image
          src="/img/OURICONS.png"
          alt="OURICONS"
          width={1015}
          height={536}
        />
        <p className="font-fair text-32 py-5">
          IN THE SPIRIT OF REINVENTING OUR ICONS
        </p>
        <p>
          In 1975, Girard-Perregaux was one of the first companies to offer a
          sporty elegant model equippedwith an octagonal bezel and an integrated
          steel bracelet. The design of the Laureato has since become known for
          its enchanting interplay of straight lines and curves and blend of
          polished and satin-brushed surfaces. It embraces the notion of
          ‘sporty-chic’ while also complementing formal attire. Its
          extraordinary versatility has led to its iconic status. To celebrate
          our bicentenary in 1991, we presented a version of the Tourbillon with
          Three Gold Bridges, miniaturised to wristwatch size.In the spirit of
          reinventing our icons in 2016, we launched the sublime Haute
          Horlogerie piece La Esmeralda Tourbillon in tribute to our original
          19th century pocket chronometer. In 1889, the original La Esmeralda
          Tourbillon was awarded a gold medal at the Paris Universal Exhibition.
          The Tourbillon we reinvented in 2016 to mark our 225th anniversary is
          yet another watchmaking icon for all brands and for all
          ages.Continuing our tradition of bridging between technical mastery
          and iconic design, this year we revealed the Free Bridge. It pushes
          the boundaries of design and innovation with ‘aerial bridges’ and a
          sculptural movement featuring an escapement made of high-tech silicon.
        </p>
      </div>
    </section>
  );
}
