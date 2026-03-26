import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const offerings = [
  {
    title: 'Web Applications',
    description: 'Modern, responsive web applications built with React, Next.js, and Vue.js with server-side rendering and progressive enhancement.',
    tech: ['React', 'Next.js', 'Vue'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps with native performance using React Native and Flutter deployed to iOS and Android.',
    tech: ['React Native', 'Flutter'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Progressive Web Apps',
    description: 'PWAs that bridge web and native with offline-first architecture, push notifications, and sub-second load times.',
    tech: ['Service Workers', 'Web APIs'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'API Development',
    description: 'Robust, well-documented APIs built with REST and GraphQL including rate limiting, auth, and OpenAPI documentation.',
    tech: ['REST', 'GraphQL', 'gRPC'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'E-commerce Platforms',
    description: 'Custom e-commerce solutions with payment processing, inventory management, and conversion-optimized checkout flows.',
    tech: ['Stripe', 'Shopify API', 'Custom'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    title: 'Enterprise Software',
    description: 'Large-scale enterprise applications with role-based access, audit trails, multi-tenancy, and workflow automation.',
    tech: ['Microservices', 'Event-Driven'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

const processSteps = [
  { step: '01', title: 'Discovery', description: 'Deep-dive into your business requirements, user personas, and technical constraints before writing a single line of code.' },
  { step: '02', title: 'Design', description: 'UI/UX design with interactive prototypes, design system creation, and user testing until the experience is pixel-perfect.' },
  { step: '03', title: 'Development', description: 'Agile sprints with continuous integration, code reviews, and automated testing with bi-weekly demos.' },
  { step: '04', title: 'Testing', description: 'Comprehensive QA including unit, integration, E2E tests, performance benchmarks, and security penetration testing.' },
  { step: '05', title: 'Deployment', description: 'Zero-downtime deployments with CI/CD pipelines, blue-green rollouts, and infrastructure provisioning via Terraform.' },
  { step: '06', title: 'Support', description: 'Post-launch monitoring, performance optimization, bug fixes, and feature iteration with SLA-backed support.' },
]

const technologies = [
  { name: 'React', color: 'pill-tf' },
  { name: 'Next.js', color: 'pill-tf' },
  { name: 'Vue', color: 'pill-tf-emerald' },
  { name: 'Node.js', color: 'pill-tf-emerald' },
  { name: 'Python', color: 'pill-tf-amber' },
  { name: 'FastAPI', color: 'pill-tf-emerald' },
  { name: 'PostgreSQL', color: 'pill-tf' },
  { name: 'MongoDB', color: 'pill-tf-emerald' },
  { name: 'Redis', color: 'pill-tf-rose' },
  { name: 'Docker', color: 'pill-tf' },
  { name: 'Kubernetes', color: 'pill-tf' },
  { name: 'AWS', color: 'pill-tf-amber' },
  { name: 'TypeScript', color: 'pill-tf' },
  { name: 'GraphQL', color: 'pill-tf-rose' },
  { name: 'Tailwind CSS', color: 'pill-tf' },
  { name: 'Flutter', color: 'pill-tf' },
]

const stats = [
  { value: '200+', label: 'Apps Delivered' },
  { value: '50+', label: 'Developers' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: 'Agile', label: 'Methodology' },
]

export default function AppDevelopmentPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-hero-tf">
        <div className="orb-tf w-[400px] h-[400px] bg-teal-500 -top-40 right-0" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
            <Link to="/" className="hover:text-teal-500 transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-secondary)' }}>App Development</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
            Build Apps That <span className="gt-tf-warm">Scale</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Full-stack application development from concept to launch with modern frameworks and cloud-native architecture.
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              What We <span className="gt-tf-warm">Build</span>
            </h2>
            <p className="text-lg max-w-2xl mb-16" style={{ color: 'var(--text-secondary)' }}>
              From single-page apps to enterprise platforms, we build software that performs at scale and delights users.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card-tf p-8 h-full">
                  <div className="ibox-tf mb-5">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span key={t} className="pill-tf-amber text-xs">{t}</span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Development Process */}
      <section className="bg-alt-tf py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              Our Development <span className="gt-tf-warm">Process</span>
            </h2>
            <p className="text-lg max-w-2xl mb-16" style={{ color: 'var(--text-secondary)' }}>
              A structured yet flexible process that delivers predictable outcomes without sacrificing agility.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((item) => (
              <StaggerItem key={item.step}>
                <div className="card-tf p-8 h-full">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center mb-5">
                    <span className="text-sm font-bold text-amber-400">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                Technologies We <span className="gt-tf-warm">Use</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                We pick the right tool for the job. Our engineers are fluent across the modern development ecosystem.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <StaggerItem key={tech.name}>
                <motion.span
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className={`${tech.color} px-5 py-2.5 text-sm font-medium cursor-default inline-block`}
                >
                  {tech.name}
                </motion.span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-alt-tf py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                Why Choose Our <span className="gt-tf-warm">Dev Team</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Proven track record, skilled engineers, and a methodology that delivers results consistently.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="card-tf p-8 text-center">
                  <div className="stat-num-tf">{s.value}</div>
                  <div className="text-sm mt-3" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cta-tf py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>Ready to build your next app?</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              From idea to launch, we bring your vision to life with modern technology and proven engineering practices.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-tf">Start Your Project</Link>
              <Link to="/contact" className="btn-tf-outline">Get a Quote</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
