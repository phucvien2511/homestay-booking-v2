'use client';
import { randomNumberInRange } from '@/utils/helper';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import background1 from '../assets/images/backgrounds/background1.jpg';
import background10 from '../assets/images/backgrounds/background10.jpg';
import background11 from '../assets/images/backgrounds/background11.jpg';
import background12 from '../assets/images/backgrounds/background12.jpg';
import background13 from '../assets/images/backgrounds/background13.jpg';
import background14 from '../assets/images/backgrounds/background14.jpg';
import background2 from '../assets/images/backgrounds/background2.jpg';
import background3 from '../assets/images/backgrounds/background3.jpg';
import background4 from '../assets/images/backgrounds/background4.jpg';
import background5 from '../assets/images/backgrounds/background5.jpg';
import background6 from '../assets/images/backgrounds/background6.jpg';
import background7 from '../assets/images/backgrounds/background7.jpg';
import background8 from '../assets/images/backgrounds/background8.jpg';
import background9 from '../assets/images/backgrounds/background9.jpg';

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

  return (
    <div className="home mb-10 mt-10 flex flex-col space-y-10 min-[1200px]:mx-40 min-[800px]:mx-20 min-[600px]:mx-10 min-[500px]:mx-4 mx-2">
      <div className="relative h-screen mt-4">
        {/* Background image */}
        <Image
          priority={bgIndex === 0}
          src={backgroundImages[bgIndex]}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        {/* Content */}
        <div
          className="flex flex-col items-center justify-center h-full relative z-1 text-white
          min-[800px]:text-xl min-[600px]:text-base min-[400px]:text-sm text-[8px]"
        >
          <div className="flex flex-col min-[1200px]:space-y-24 min-[1000px]:space-y-16 min-[800px]:space-y-10 min-[600px]:space-y-8 min-[400px]:space-y-4 space-y-2">
            <div className=" text-center w-full">SHSC HOMESTAY TRAVELS</div>
            <div className="min-[800px]:text-6xl min-[600px]:text-4xl min-[400px]:text-2xl text-base font-semibold text-center w-full">
              <p className="w-2/3 mx-auto leading-normal">
                Let&apos;s embark on your dream journey
              </p>
            </div>
            <div className="text-center w-full">
              <p>
                Discover inspiring destinations, create unforgettable memories
              </p>
              <p>Travel with confidence - Your adventure starts here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
