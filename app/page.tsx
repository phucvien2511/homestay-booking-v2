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

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="nav-link text-lg font-semibold hover:gradient-text transition-all"
  >
    {children}
  </a>
);

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
    <main className="min-h-screen">
      {/* Header/Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center text-white backdrop-blur-sm bg-black/10">
        <div className="flex items-center">
          <Image 
            src="/logo.png"
            alt="SHSC Homestay"
            width={40}
            height={40}
          />
          <span className="ml-2 text-xl font-bold gradient-text">SHSC Homestay</span>
        </div>
        <div className="flex gap-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/booking">Booking</NavLink>
          <NavLink href="/management">Management</NavLink>
          <NavLink href="/history">History</NavLink>
          <NavLink href="/marketplace">Marketplace</NavLink>
          <button className="px-6 py-2 gradient-bg text-white rounded-lg text-lg font-semibold hover:opacity-90 transition-all">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <section className="relative h-screen">
        {/* Background image with overlay */}
        <Image
          priority={bgIndex === 0}
          src={backgroundImages[bgIndex]}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
          fill
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-4 text-white">
          <div className="container mx-auto">
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
              <button className="px-8 py-4 gradient-bg text-white rounded-lg text-lg font-semibold hover:opacity-90 transition-all">
                Explore Homestays
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Featured Homestays</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Property Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cozy Mountain Retreat</h3>
                <p className="text-gray-600 mb-4">
                  Perfect for nature lovers and peaceful getaways
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">$85/night</span>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Beachside Family Home</h3>
                <p className="text-gray-600 mb-4">
                  Spacious accommodation with ocean views
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">$120/night</span>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-semibold mb-12">
            Why Choose Our Homestays
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="mb-4">
                <Image 
                  src="/icons/home.svg"
                  alt="Authentic Experience"
                  width={48}
                  height={48}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Authentic Experience</h3>
              <p className="text-gray-600">
                Live like a local with carefully selected host families
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="mb-4">
                <Image 
                  src="/icons/shield.svg"
                  alt="Verified Hosts"
                  width={48}
                  height={48}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Hosts</h3>
              <p className="text-gray-600">
                All our hosts are thoroughly vetted for your safety
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="mb-4">
                <Image 
                  src="/icons/support.svg"
                  alt="24/7 Support"
                  width={48}
                  height={48}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock assistance for peace of mind
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
