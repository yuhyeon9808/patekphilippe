'use client';
import { useFetchProducts } from '@/hooks/useFetchProducts';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Bridges() {
  const WATCH_MENU = [
    'ALL',
    'GRAND COMPLICATIONS',
    'COMPLICATIONS',
    'CALATRAVA',
  ];
  const { data } = useFetchProducts();
  const pathName = usePathname();
  const filtering = React.useMemo(() => {
    if (!data) return [];

    if (pathName.startsWith('/bridges/grand')) {
      return data.filter(
        (item) => item.categoryName.trim().toUpperCase() === WATCH_MENU[1]
      );
    }

    if (pathName.startsWith('/bridges/complications')) {
      return data.filter(
        (item) => item.categoryName.trim().toUpperCase() === WATCH_MENU[2]
      );
    }

    if (pathName.startsWith('/bridges/calatrava')) {
      return data.filter(
        (item) => item.categoryName.trim().toUpperCase() === WATCH_MENU[3]
      );
    }

    return data;
  }, [data, pathName]);

  const BASE_URL =
    'https://lmizujqllfopzyzeurkc.supabase.co/storage/v1/object/public/watch/';
  return (
    <div className="min-h-[800px]">
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-20  md:mx-20 mx-10 md:my-20 my-10">
        {filtering?.map((item) => (
          <li key={item.id} className="flex flex-col items-center">
            <Link href="/5270">
              <Image
                src={BASE_URL + item.img}
                alt={item.productName}
                width={250}
                height={350}
              />
              <div className="text-center">
                <p className="font-bold text-16 pt-5">{item.categoryName}</p>
                <p className="font-bold text-16 pb-2">{item.productName}</p>
                <p className="text-14 text-subText">
                  ₩ {item.price.toLocaleString()}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
