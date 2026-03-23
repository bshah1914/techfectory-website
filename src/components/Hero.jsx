import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection, { StaggerContainer, StaggerItem, FloatingElement } from './AnimatedSection'

/* ---- Animated Counter ---- */
function useCounter(target, duration = 2000, delay = 0) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (started.current) return
      started.current = true
      const start = performance.now()
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(target * eased))
        if (progress < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, delay)
    return () => clearTimeout(timeout)
  }, [target, duration, delay])

  return count
}

/* ---- Partner logos as text badges ---- */
const partners = ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Docker']

export default function Hero() {
  const projects = useCounter(500, 2200, 600)
  const costSavings = useCounter(40, 2000, 900)

  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const heroY = useTransform(scrollY, [0, 500], [0, 60])

  return (
    <section className="bg-hero-tf relative min-h-screen overflow-hidden">
      {/* Grid overlay */}
      <div className="grid-overlay-tf absolute inset-0 pointer-events-none" />

      {/* Background orbs */}
      <FloatingElement y={15} duration={10}>
        <div className="orb-tf w-[500px] h-[500px] bg-teal-500 -top-40 left-1/4 absolute" />
      </FloatingElement>
      <FloatingElement y={12} duration={14}>
        <div className="orb-tf w-[350px] h-[350px] bg-amber-500 top-1/3 -right-20 absolute" style={{ animationDelay: '4s' }} />
      </FloatingElement>
      <FloatingElement y={8} duration={12}>
        <div className="orb-tf w-[250px] h-[250px] bg-teal-400 bottom-20 left-10 absolute" style={{ animationDelay: '8s' }} />
      </FloatingElement>

      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-16"
      >
        {/* ======== CENTER-ALIGNED HERO CONTENT ======== */}
        <div className="text-center max-w-4xl mx-auto">

          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <span className="pill-tf">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
              </span>
              Cloud & DevOps Experts
            </span>
          </motion.div>

          {/* Massive headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            We Build
            <br />
            <span className="gt-tf">Cloud Infrastructure</span>
          </motion.h1>

          {/* Subtitle — one line, max 20 words */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Scalable, secure, and cost-optimized cloud solutions that accelerate your business growth.
          </motion.p>

          {/* Two centered buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            <Link to="/contact" className="btn-tf">
              Get a Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link to="/cloud-services" className="btn-tf-outline">
              Our Services
            </Link>
          </motion.div>
        </div>

        {/* ======== METRICS BAR ======== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="card-glass-tf rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: `${projects}+`, label: 'Projects', gradient: 'gt-tf' },
                { value: '99.9%', label: 'Uptime', gradient: 'gt-tf-warm' },
                { value: `${costSavings}%`, label: 'Cost Savings', gradient: 'gt-tf-mixed' },
                { value: '24/7', label: 'Support', gradient: 'gt-tf' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="text-center"
                >
                  <div className={`stat-num-tf ${stat.gradient}`}>{stat.value}</div>
                  <div className="text-xs mt-2 font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ======== SCROLLING LOGO STRIP ======== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-xs uppercase tracking-widest text-center mb-5 font-medium" style={{ color: 'var(--text-muted)' }}>
            Powered by leading platforms
          </p>
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10" style={{ background: 'linear-gradient(90deg, var(--bg), transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10" style={{ background: 'linear-gradient(270deg, var(--bg), transparent)' }} />

            <div className="marquee-tf">
              {/* Duplicate the list for seamless loop */}
              {[...partners, ...partners].map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex items-center justify-center px-8 md:px-12 flex-shrink-0"
                >
                  <span
                    className="text-base md:text-lg font-bold tracking-wide whitespace-nowrap"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
