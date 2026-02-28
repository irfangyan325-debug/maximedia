// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { NAV_LINKS } from '@/lib/data'

// export default function Navbar() {
//   const [scrolled, setScrolled]     = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 60)
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   return (
//     <nav
//       className="fixed inset-x-0 top-0 z-50 h-[74px] transition-all duration-300"
//       style={{
//         background: 'rgba(8,12,24,0.92)',
//         backdropFilter: 'blur(20px)',
//         WebkitBackdropFilter: 'blur(20px)',
//         borderBottom: scrolled
//           ? '1px solid rgba(4,211,97,0.2)'
//           : '1px solid rgba(255,255,255,0.07)',
//       }}
//     >
//       <div className="container h-full flex items-center justify-between gap-6">

//         {/* ─── Logo ─── */}
//         <Link
//           href="/"
//           className="font-display text-[1.55rem] font-extrabold tracking-[-0.04em] whitespace-nowrap flex-shrink-0"
//         >
//           MAXI<span style={{ color: 'var(--green)' }}>MEDIA</span>
//         </Link>

//         {/* ─── Desktop Nav ─── */}
//         <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center">
//           {NAV_LINKS.map((link) => (
//             <li key={link.label} className="nav-item relative">
//               {link.children ? (
//                 <>
//                   <button className="nav-link">
//                     {link.label}
//                     <span
//                       className="transition-transform duration-200 group-hover:rotate-180"
//                       style={{ fontSize: '0.6rem', opacity: 0.55 }}
//                     >
//                       ▾
//                     </span>
//                   </button>
//                   <div className={`nav-dropdown ${link.children.length > 6 ? 'nav-dropdown--wide' : ''}`}>
//                     {link.children.map((child) => (
//                       <Link key={child.href} href={child.href} className="nav-dropdown-link">
//                         {child.label}
//                       </Link>
//                     ))}
//                   </div>
//                 </>
//               ) : (
//                 <Link href={link.href} className="nav-link">
//                   {link.label}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* ─── CTA ─── */}
//         <Link href="/contact" className="nav-link nav-cta hidden lg:flex flex-shrink-0">
//           Free Proposal
//         </Link>

//         {/* ─── Hamburger ─── */}
//         <button
//           className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer flex-shrink-0"
//           onClick={() => setMobileOpen(!mobileOpen)}
//           aria-label="Toggle menu"
//         >
//           <span
//             className="block w-[22px] h-[2px] rounded transition-all duration-200"
//             style={{
//               background: 'var(--white)',
//               transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none',
//             }}
//           />
//           <span
//             className="block w-[22px] h-[2px] rounded transition-all duration-200"
//             style={{
//               background: 'var(--white)',
//               opacity: mobileOpen ? 0 : 1,
//             }}
//           />
//           <span
//             className="block w-[22px] h-[2px] rounded transition-all duration-200"
//             style={{
//               background: 'var(--white)',
//               transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
//             }}
//           />
//         </button>
//       </div>

//       {/* ─── Mobile Menu ─── */}
//       {mobileOpen && (
//         <div
//           className="lg:hidden absolute inset-x-0 top-[74px]"
//           style={{
//             background: 'rgba(8,12,24,0.98)',
//             backdropFilter: 'blur(20px)',
//             borderBottom: '1px solid rgba(255,255,255,0.08)',
//           }}
//         >
//           <div className="container py-4 flex flex-col gap-1">
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 className="block px-4 py-3 rounded-xl text-sm font-medium transition-all"
//                 style={{ color: 'rgba(255,255,255,0.78)' }}
//                 onClick={() => setMobileOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <div className="pt-3 pb-1">
//               <Link
//                 href="/contact"
//                 className="btn btn--primary w-full justify-center"
//                 onClick={() => setMobileOpen(false)}
//               >
//                 Free Proposal
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }



'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 h-[74px] transition-all duration-300"
      style={{
        background: '#ffffff',
        borderBottom: scrolled
          ? '2px solid rgba(26,86,219,0.15)'
          : '1px solid rgba(26,86,219,0.08)',
        boxShadow: scrolled ? '0 4px 24px rgba(26,86,219,0.08)' : 'none',
      }}
    >
      <div className="container h-full flex items-center justify-between gap-6">

        {/* Logo — blue MAXI, yellow MEDIA */}
        <Link
          href="/"
          className="font-display text-[1.55rem] font-extrabold tracking-[-0.04em] whitespace-nowrap flex-shrink-0"
          style={{ color: 'var(--blue)' }}
        >
          MAXI<span style={{ color: 'var(--yellow)' }}>MEDIA</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="nav-item relative">
              {link.children ? (
                <>
                  <button className="nav-link">
                    {link.label}
                    <span style={{ fontSize: '0.6rem', opacity: 0.6 }}>▾</span>
                  </button>
                  <div className="nav-dropdown">
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href} className="nav-dropdown-link">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={link.href} className="nav-link">{link.label}</Link>
              )}
            </li>
          ))}
        </ul>

        {/* Yellow CTA */}
        <Link href="/contact" className="nav-link nav-cta hidden lg:flex flex-shrink-0">
          Free Proposal
        </Link>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer flex-shrink-0"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-[22px] h-[2.5px] rounded transition-all duration-200" style={{ background: 'var(--blue)', transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span className="block w-[22px] h-[2.5px] rounded transition-all duration-200" style={{ background: 'var(--blue)', opacity: mobileOpen ? 0 : 1 }} />
          <span className="block w-[22px] h-[2.5px] rounded transition-all duration-200" style={{ background: 'var(--blue)', transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden absolute inset-x-0 top-[74px]"
          style={{
            background: '#ffffff',
            borderBottom: '1px solid rgba(26,86,219,0.1)',
            boxShadow: '0 8px 28px rgba(26,86,219,0.1)',
          }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-4 py-3 rounded-xl text-sm font-bold transition-all"
                style={{ color: 'var(--blue)' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1">
              <Link href="/contact" className="btn btn--primary w-full justify-center" onClick={() => setMobileOpen(false)}>
                Free Proposal
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}