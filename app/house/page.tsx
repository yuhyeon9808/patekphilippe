import BrandHeritage from '@/components/house/BrandHeritage';
import FoundingStory from '@/components/house/FoundingStory';
import IconicReinvention from '@/components/house/IconicReinvention';
import PlaceOfOrigin from '@/components/house/PlaceOfOrigin';
import PursuitOfExcellence from '@/components/house/PursuitOfExcellence';
import SignatureMechanism from '@/components/house/SignatureMechanism';
import TimelessInnovation from '@/components/house/TimelessInnovation';
import WatchmakingCraft from '@/components/house/WatchmakingCraft';
import React from 'react';

export default function page() {
  return (
    <>
      <BrandHeritage />
      <WatchmakingCraft />
      <PursuitOfExcellence />
      <FoundingStory />
      <PlaceOfOrigin />
      <TimelessInnovation />
      <SignatureMechanism />
      <IconicReinvention />
    </>
  );
}
