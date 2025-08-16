
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return

      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power3.out",
      })
    }

    document.addEventListener("mousemove", moveCursor)

    return () => {
      document.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        body {
          cursor: none;
        }
      `}</style>

      {/* Custom cursor image */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: "30px",
          height: "30px",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Image
          src="/cursor/cursor-3.png" // ✅ Put your image in public/cursor/
          alt="Custom Cursor"
          width={40}
          height={40}
        />
      </div>
    </>
  )
}

export default CustomCursor