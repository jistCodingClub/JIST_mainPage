// components/Header.tsx
import Image from 'next/image'
import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'
const Header = () => {
  return (
    <>
      <header className="sfont h-[80px] w-full flex justify-between items-center px-4 py-2 border-dashed border-b-2">
        <div className="flex items-center gap-3 relative">
          {/* Logo with spinning background */}
          <div className="relative w-20 h-20 flex justify-center items-center">
            {/* Spinning Circle */}
            <div
              className="absolute inset-0 animate-spin"
              style={{ animation: 'spin 3s linear infinite' }}
            
            >
              <div className="w-full h-full bg-[url('/bg/circle-1.png')] bg-no-repeat bg-center [background-size:70%] md:[background-size:80%]" />
            </div>

            {/* Static Logo */}
            <Image
              src="/club-logo.svg"
              alt="Club Logo"
              width={60}
              height={60}
              className="h-10 md:h-20 relative z-10"
            />
          </div>

          {/* Heading */}
          <Link href="#">
            <h1 className="title hidden md:block md:text-4xl font-bold tracking-wide">
              JIST Coding Club
            </h1>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 font-semibold font-serif uppercase text-center items-center">

          <Link href="#about">About</Link>
          <Link href="#project">Projects</Link>
          <Link href="#team">Team</Link>
          <Link href="#events">Events</Link>
          <button className="top-button">
            Join Now
          </button>
        </nav>
        <nav className='ri-menu-line text-3xl md:hidden'></nav>
      </header>
    </>
  )
}

export default Header
