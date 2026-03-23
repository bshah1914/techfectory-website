import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const serviceLinks = [
  { to: '/cloud-services', label: 'Cloud Services', desc: 'Multi-cloud infrastructure & migration', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
  { to: '/cloud-security', label: 'Cloud Security', desc: 'Compliance, SIEM & threat detection', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { to: '/devops', label: 'DevOps', desc: 'CI/CD, IaC & container orchestration', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  { to: '/app-development', label: 'App Development', desc: 'Full-stack web & mobile solutions', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { to: '/ai-ml', label: 'AI / ML', desc: 'Machine learning & intelligent automation', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
]

const mainLinks = [
  { to: '/', label: 'Home' },
  { to: '/blog', label: 'Blog' },
  { to: '/news', label: 'News' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

/* Hexagon logo icon */
function HexLogo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 2L28.66 9v14L16 30 3.34 23V9L16 2z"
        fill="#14b8a6"
        opacity="0.9"
      />
      <path
        d="M16 8l6 3.5v7L16 22l-6-3.5v-7L16 8z"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="15" r="2.5" fill="#fff" />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const { pathname } = useLocation()
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const isActive = (to) => {
    if (to === '/') return pathname === '/'
    return pathname.startsWith(to)
  }

  const isServiceActive = serviceLinks.some((l) => pathname.startsWith(l.to))

  const handleDropdownEnter = () => {
    clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 200)
  }

  const allDesktopLinks = [
    { to: '/', label: 'Home' },
    { to: '#services', label: 'Services', isDropdown: true },
    ...mainLinks.filter((l) => l.to !== '/'),
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`nav-tf fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg shadow-black/20' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">

          {/* ---- Logo ---- */}
          <Link to="/" className="flex items-center gap-2 group">
            <HexLogo size={34} />
            <span className="text-lg font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Tech<span className="gt-tf">Fectory</span>
            </span>
          </Link>

          {/* ---- Desktop Links ---- */}
          <div className="hidden lg:flex items-center gap-0.5">
            {/* Home */}
            <Link
              to="/"
              className="relative text-[13px] px-4 py-2 transition-colors duration-200"
              style={{ color: isActive('/') && pathname === '/' ? 'var(--accent)' : 'var(--text-secondary)' }}
            >
              Home
              {isActive('/') && pathname === '/' && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                  style={{ background: '#14b8a6' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* Services dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="relative text-[13px] px-4 py-2 transition-colors duration-200 flex items-center gap-1.5"
                style={{ color: isServiceActive ? 'var(--accent)' : 'var(--text-secondary)' }}
              >
                Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {isServiceActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                    style={{ background: '#14b8a6' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] p-3 rounded-2xl card-glass-tf shadow-2xl shadow-black/40"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="flex flex-col gap-0.5">
                      {serviceLinks.map((s, i) => (
                        <motion.div
                          key={s.to}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Link
                            to={s.to}
                            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group/item ${
                              isActive(s.to)
                                ? 'bg-teal-500/10'
                                : 'hover:bg-white/[0.04]'
                            }`}
                          >
                            <div className={`ibox-tf flex-shrink-0 ${
                              isActive(s.to)
                                ? 'bg-teal-500/20'
                                : 'bg-white/[0.04] group-hover/item:bg-teal-500/10'
                            }`}>
                              <svg className="w-5 h-5" style={{ color: isActive(s.to) ? '#14b8a6' : 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium" style={{ color: isActive(s.to) ? '#14b8a6' : 'var(--text-primary)' }}>{s.label}</div>
                              <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{s.desc}</div>
                            </div>
                            <svg className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other main links */}
            {mainLinks.filter((l) => l.to !== '/').map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative text-[13px] px-4 py-2 transition-colors duration-200"
                style={{ color: isActive(l.to) ? 'var(--accent)' : 'var(--text-secondary)' }}
              >
                {l.label}
                {isActive(l.to) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                    style={{ background: '#14b8a6' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* ---- Desktop Theme Toggle ---- */}
          <div className="hidden lg:flex items-center">
            <ThemeToggle />
          </div>

          {/* ---- Mobile Hamburger ---- */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* ======= Mobile Slide Panel ======= */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 right-0 w-[300px] z-50 lg:hidden overflow-y-auto"
              style={{ background: 'var(--bg-card)', borderLeft: '1px solid var(--border)' }}
            >
              <div className="p-6">
                {/* Close button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-5 right-5 transition-colors"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Mobile Logo + Theme */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <HexLogo size={28} />
                    <span className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                      Tech<span className="gt-tf">Fectory</span>
                    </span>
                  </div>
                  <ThemeToggle />
                </div>

                <div className="sep-tf mb-6" />

                {/* Mobile Links */}
                <div className="flex flex-col gap-0.5">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 }}
                  >
                    <Link
                      to="/"
                      onClick={() => setOpen(false)}
                      className={`block py-2.5 px-3 rounded-lg text-sm transition-colors ${
                        pathname === '/' ? 'font-medium' : ''
                      }`}
                      style={{
                        color: pathname === '/' ? '#14b8a6' : 'var(--text-secondary)',
                        background: pathname === '/' ? 'rgba(20,184,166,0.08)' : 'transparent',
                      }}
                    >
                      Home
                    </Link>
                  </motion.div>

                  {/* Services accordion */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm transition-colors ${
                        isServiceActive ? 'font-medium' : ''
                      }`}
                      style={{
                        color: isServiceActive ? '#14b8a6' : 'var(--text-secondary)',
                        background: isServiceActive ? 'rgba(20,184,166,0.08)' : 'transparent',
                      }}
                    >
                      Services
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pt-1 pb-1 flex flex-col gap-0.5">
                            {serviceLinks.map((s, i) => (
                              <motion.div
                                key={s.to}
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.04 }}
                              >
                                <Link
                                  to={s.to}
                                  onClick={() => setOpen(false)}
                                  className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm transition-colors"
                                  style={{ color: isActive(s.to) ? '#14b8a6' : 'var(--text-muted)' }}
                                >
                                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                                  </svg>
                                  {s.label}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {mainLinks.filter((l) => l.to !== '/').map((l, i) => (
                    <motion.div
                      key={l.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.04 }}
                    >
                      <Link
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className={`block py-2.5 px-3 rounded-lg text-sm transition-colors ${
                          isActive(l.to) ? 'font-medium' : ''
                        }`}
                        style={{
                          color: isActive(l.to) ? '#14b8a6' : 'var(--text-secondary)',
                          background: isActive(l.to) ? 'rgba(20,184,166,0.08)' : 'transparent',
                        }}
                      >
                        {l.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
