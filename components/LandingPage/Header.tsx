import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import favicon from '@/app/favicon.ico';
import AppButton from '../common/AppButton';

type NavLinkProps = {
  href: string;
  children: ReactNode;
};
const NavLink = (props: NavLinkProps) => {
  const { href, children } = props;
  return (
    <Link
      href={href}
      className="nav-link hover:gradient-text transition-all flex items-center justify-center"
    >
      {children}
    </Link>
  );
};
const Header = () => {
  return (
    <nav className="bg-[#140F34] sticky top-0 z-[9999] flex items-center justify-between h-[64px] px-6">
      <div className="flex items-center">
        <Image src={favicon} alt="SHSC Homestay" width={40} height={40} />
        <span className="ml-2 text-xl font-semibold gradient-text">
          SHSC Homestay
        </span>
      </div>
      <div className="self-center flex gap-8">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/booking">Booking</NavLink>
        <NavLink href="/management">Management</NavLink>
        <NavLink href="/history">History</NavLink>
        <NavLink href="/marketplace">Marketplace</NavLink>
        <AppButton text="Book now" onClick={() => {}} />
      </div>
    </nav>
  );
};

export default Header;
