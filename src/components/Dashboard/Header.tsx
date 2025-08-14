import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import Image from 'next/image'
import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'
import ClubImage from "../../../public/club-logo.svg"; 

gsap.registerPlugin(SplitText)

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#project', label: 'Projects' },
  { href: '#team', label: 'Team' },
  { href: '#events', label: 'Events' },
]

const Header = () => {
  const linkRefs = useRef<HTMLSpanElement[]>([])
  const mobileNavRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  useEffect(() => {
    animateHeader()
    setupHoverAnimations()
  }, [])

  useEffect(() => {
    if (isMobileNavOpen && mobileNavRef.current) {
      const links = mobileNavRef.current.querySelectorAll('a')

      // Slide in container
      gsap.fromTo(
        mobileNavRef.current,
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      )

      // Animate each link inside
      gsap.from(links, {
        xPercent: '100',
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.2,
      })

      // Animate close button separately
      if (closeBtnRef.current) {
        gsap.from(closeBtnRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.4,
          ease: 'back.out(1.7)',
          delay: 0.3,
        })
      }
    }
  }, [isMobileNavOpen])

  const animateHeader = () => {
    const headingSplit = new SplitText('#header', { type: 'chars, lines' })
    const navSplit = new SplitText('#navBar', { type: 'words' })

    gsap.from(headingSplit.chars, {
      yPercent: -120,
      xPercent: -400,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'bounce.inOut',
    })

    gsap.from(navSplit.words, {
      yPercent: -120,
      opacity: 0,
      duration: 1.6,
      stagger: 0.3,
      ease: 'bounce.out',
    })

    gsap.from('#navBar', {
      yPercent: -120,
      opacity: 0,
      backgroundColor: 'transparent',
      duration: 1.5,
      ease: 'bounce.out',
    })

    gsap.from('#logoHeading', {
      opacity: 0,
      yPercent: -120,
      duration: 2,
      ease: 'bounce.out',
    })
  }

  const setupHoverAnimations = () => {
    linkRefs.current.forEach((el) => {
      if (!el) return

      const hoverIn = () => {
        gsap.to(el, {
          scale: 1.2,
          yPercent: -10,
          color: '#ff6600',
          duration: 0.3,
          ease: 'power2.out',
        })
      }

      const hoverOut = () => {
        gsap.to(el, {
          scale: 1,
          yPercent: 0,
          color: '#000',
          duration: 0.3,
          ease: 'power2.inOut',
        })
      }

      el.addEventListener('mouseenter', hoverIn)
      el.addEventListener('mouseleave', hoverOut)
    })
  }

  return (
    <>
      <header className="sfont h-[80px] w-full flex justify-between items-center px-4 py-2 border-dashed border-b-2">
        {/* Logo + Heading */}
        <div className="flex items-center gap-3 relative">
          <div id="logoHeading" className="relative w-20 h-20 flex justify-center items-center">
            <div
              className="absolute inset-0 animate-spin"
              style={{ animation: 'spin 3s linear infinite' }}
            >
              <div className="w-full h-full bg-[url('/bg/circle-1.png')] bg-no-repeat bg-center [background-size:70%] md:[background-size:80%]" />
            </div>
            <Image
              src="/club-logo.svg"
              alt="Club Logo"
              width={60}
              height={60}
              className="h-10 md:h-20 relative z-10"
            />
          </div>

          <Link href="#">
            <h1 id="header" className="title hidden md:block md:text-4xl font-bold tracking-wide">
              JIST Coding Club
            </h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav
          id="navBar"
          className="hidden md:flex gap-6 font-semibold font-serif uppercase text-center items-center"
        >
          {navLinks.map((link, i) => (
            <span
              key={link.label}
              ref={(el) => {
                if (el) linkRefs.current[i] = el
              }}
              className="inline-block cursor-pointer"
            >
              <Link href={link.href}>{link.label}</Link>
            </span>
          ))}
          <button className="top-button">Join Now</button>
        </nav>

        {/* Mobile Menu Icon */}
        <div
          className="ri-menu-line text-3xl md:hidden cursor-pointer"
          onClick={() => setIsMobileNavOpen(true)}
        ></div>
      </header>

      {/* Mobile Slide-In Nav */}
      {isMobileNavOpen && (
        <div
          ref={mobileNavRef}
          className="fixed top-0 right-0 h-full w-2/3 bg-[#f3ecd2] shadow-lg z-50 p-6 flex flex-col gap-6 font-serif font-semibold uppercase text-lg"
        >
          <button
            ref={closeBtnRef}
            className="self-end text-2xl ri-close-line"
            onClick={() => setIsMobileNavOpen(false)}
          ></button>

          {navLinks.map((link) => (
            <Link className='border-1 rounded-2xl p-2' key={link.label} href={link.href} onClick={() => setIsMobileNavOpen(false)}>
              {link.label}
            </Link>
          ))}
          <button className="top-button mt-4">Join Now</button>
          <div className="relative w-50 h-50 rounded-2xl overflow-hidden shadow-[6px_6px_2px_rgba(0,0,0,0.4)]">
            <Image
              src={ClubImage}
              alt="JIST Coding Club Members"
              fill
              className="object-cover bg-black"
            />

          </div>

        </div>
      )}
    </>
  )
}

export default Header