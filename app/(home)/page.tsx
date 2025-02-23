'use client';

import PropertyCategories from '@/components/Home/ PropertyCategories';
import background1 from '@/public/images/backgrounds/background1.jpg';
import background10 from '@/public/images/backgrounds/background10.jpg';
import background11 from '@/public/images/backgrounds/background11.jpg';
import background12 from '@/public/images/backgrounds/background12.jpg';
import background13 from '@/public/images/backgrounds/background13.jpg';
import background14 from '@/public/images/backgrounds/background14.jpg';
import background2 from '@/public/images/backgrounds/background2.jpg';
import background3 from '@/public/images/backgrounds/background3.jpg';
import background4 from '@/public/images/backgrounds/background4.jpg';
import background5 from '@/public/images/backgrounds/background5.jpg';
import background6 from '@/public/images/backgrounds/background6.jpg';
import background7 from '@/public/images/backgrounds/background7.jpg';
import background8 from '@/public/images/backgrounds/background8.jpg';
import background9 from '@/public/images/backgrounds/background9.jpg';
import { randomNumberInRange } from '@/utils/helper';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import Header from '@/components/LandingPage/Header';
import AppButton from '@/components/common/AppButton';
import homestay1 from '@/assets/images/homestays/homestay1.jpg';
import homestay3 from '@/assets/images/homestays/homestay3.jpg';
import homestay4 from '@/assets/images/homestays/homestay4.jpg';
import FeaturedCard from '@/components/LandingPage/FeaturedCard';
import ReviewCard from '@/components/LandingPage/ReviewCard';
import Marquee from 'react-fast-marquee';
import BrandCard from '@/components/LandingPage/BrandCard';
const Home = () => {
  const [bgIndex, setBgIndex] = useState<number>(0);
  const backgroundImages = useMemo(
    () => [
      background1,
      background2,
      background3,
      background4,
      background5,
      background6,
      background7,
      background8,
      background9,
      background10,
      background11,
      background12,
      background13,
      background14,
    ],
    []
  );
  useEffect(() => {
    // Change background every 7 seconds
    const interval = setInterval(() => {
      setBgIndex(() => randomNumberInRange(0, backgroundImages.length - 1));
    }, 7000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [backgroundImages.length]);
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <main className="min-h-screen bg-[#140F34]">
      <Header />
      {/* Hero Section with Background */}
      <section className="relative h-screen w-full">
        {/* Background image with overlay */}
        <Image
          priority={bgIndex === 0}
          src={backgroundImages[bgIndex]}
          alt="Background"
          className="absolute top-0 left-0 size-full object-cover"
          fill
        />
        <div className="absolute top-0 left-0 size-full bg-black/60" />

        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center px-4 text-white">
          <div className="container mx-auto transition-start">
            <div className="max-w-3xl space-y-6">
              <p className="text-lg gradient-text">SHSC HOMESTAY TRAVELS</p>
              <h1 className="text-6xl font-bold leading-tight">
                Let&apos;s embark on your
                <br />
                <span className="gradient-text">dream journey</span>
              </h1>
              <p className="text-xl">
                Discover inspiring destinations, create unforgettable memories
                <br />
                Travel with confidence - Your adventure starts here
              </p>
              <AppButton
                text="Explore Homestays"
                onClick={() => scrollTo('featured')}
                className="px-8 py-4 text-lg text-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section
        id="featured"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="container mx-auto">
          <h2 className="gradient-text text-4xl font-bold mb-8">
            Featured Homestays
            <div className="mt-3 text-base font-normal text-gray-400">
              Check out daily special offers from SHSC. Save cost and enjoy your
              wonderful trip.
            </div>
          </h2>

          <div className="flex items-stretch gap-6 justify-between">
            <FeaturedCard
              title="Terracotta Villa"
              description="Modern villa with a private accommodation"
              image={homestay3}
              rating={4.9}
              price={129}
              discountPrice={69}
              isHot
            />
            <FeaturedCard
              title="Beachside Family Home"
              description="Spacious accommodation with ocean views"
              image={homestay1}
              rating={4.4}
              price={59}
              discountPrice={39}
            />
            <FeaturedCard
              title="Cozy Mountain Retreat"
              description="Perfect for nature lovers and peaceful getaways"
              image={homestay4}
              rating={4.8}
              price={85}
              discountPrice={55}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="gradient-text text-4xl font-bold mb-4 text-center">
            Why choose our service
          </h2>
          <div className="text-white/40 text-center text-xl">
            Real users show real love for SDSC
          </div>
          <div className="space-y-4 my-8">
            <Marquee>
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </Marquee>
            <Marquee direction="right">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </Marquee>
          </div>
          <div className="text-white/40 text-center text-xl">
            Backed by the best in the industry
          </div>
          <div className="flex items-center justify-center gap-4 flex-wrap my-6">
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
            <BrandCard></BrandCard>
          </div>
        </div>
      </section>

      <PropertyCategories />
    </main>
  );
};

export default Home;
