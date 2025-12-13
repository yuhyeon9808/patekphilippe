import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function MagazineHighlights() {
  return (
    <section className="w-full md:px-7 px-4 pb-20 flex justify-center">
      <div>
        <ul className="max-w-[1280px] grid md:grid-cols-4 grid-cols-2 gap-5">
          <li className="max-w-[285px] pb-3 md:pb-0">
            <Link href="/">
              <Image src="/img/news1.png" width={285} height={230} alt="news" />

              <p className="text-16 font-semibold pt-3 pb-1">
                INTRODUCING THE NEW TWENTY
              </p>
              <p className="text-14 text-subText">
                Discover the new faces of the Twenty Refs.4910/1200A
              </p>
            </Link>
          </li>

          <li className="max-w-[285px] pb-3 md:pb-0">
            <Link href="/">
              <Image src="/img/news2.png" width={285} height={230} alt="news" />

              <p className="text-16 font-semibold pt-3 pb-1">
                PATEK PHILIPPE SETS SAIL WITH THE STARSY
              </p>
              <p className="text-14 text-subText">
                Alessandra Ambrosio and Eddie Redmayne set sail off the coast of
                Ibiza to capture the spirit of Aqua Terra.
              </p>
            </Link>
          </li>
          <li className="max-w-[285px] pb-3 md:pb-0">
            <Link href="/">
              <Image src="/img/news3.png" width={285} height={230} alt="news" />

              <p className="text-16 font-semibold pt-3 pb-1">
                SALUTING SCIENCE WITH A SPACE PIONEER
              </p>
              <p className="text-14 text-subText">
                Apollo legend and OMEGA ambassador Buzz Aldrin is among the
                medal winners at Starmus Festival
              </p>
            </Link>
          </li>

          <li className="max-w-[285px] pb-3 md:pb-0">
            <Link href="/">
              <Image src="/img/news4.png" width={285} height={230} alt="news" />

              <p className="text-16 font-semibold pt-3 pb-1">
                STARS OF THE CONSTELLATION
              </p>
              <p className="text-14 text-subText">
                Meet the inspiring women at the heart of the Manhattan campaign
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
