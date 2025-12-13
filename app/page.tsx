import BrandStory from '@/components/home/BrandStory';
import HeroBanner from '@/components/home/HeroBanner';
import HeroShowcase from '@/components/home/HeroShowcase';
import MagazineHighlights from '@/components/home/MagazineHighlights';
import StoreLocator from '@/components/home/StoreLocator';

export default function Home() {
  return (
    <>
      <video
        src="/img/main1.mp4"
        autoPlay
        muted
        loop
        className="w-full h-auto"
      />
      <HeroShowcase />
      <HeroBanner />
      <BrandStory />
      <MagazineHighlights />
      <StoreLocator />
    </>
  );
}
