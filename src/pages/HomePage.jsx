import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import PlatformOverview from '../components/PlatformOverview'
import DashboardPreview from '../components/DashboardPreview'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

const services = [
  {
    title: 'Cloud Services',
    desc: 'Multi-cloud architecture, migration, and managed services across AWS, Azure, and GCP.',
    to: '/cloud-services',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'Cloud Security',
    desc: 'Zero-trust monitoring, compliance enforcement, and automated threat remediation.',
    to: '/cloud-security',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'DevOps',
    desc: 'CI/CD pipelines, infrastructure as code, and GitOps workflows for rapid delivery.',
    to: '/devops',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0" />
      </svg>
    ),
  },
  {
    title: 'App Development',
    desc: 'Full-stack web and mobile applications with cloud-native deployment.',
    to: '/app-development',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'AI / ML',
    desc: 'Enterprise machine learning, NLP, and intelligent automation solutions.',
    to: '/ai-ml',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

const capabilities = [
  { title: 'Cloud Migration', desc: 'Seamless lift-and-shift or full re-architecture to the cloud' },
  { title: 'Cost Optimization', desc: 'Reduce cloud spend by up to 40% with FinOps strategies' },
  { title: 'Security & Compliance', desc: 'SOC 2, HIPAA, ISO 27001 audit-ready infrastructure' },
  { title: 'DevOps Automation', desc: 'CI/CD pipelines, IaC, and real-time monitoring at scale' },
]

const partners = [
  { name: 'Amazon Web Services', short: 'AWS' },
  { name: 'Microsoft Azure', short: 'Azure' },
  { name: 'Google Cloud', short: 'GCP' },
  { name: 'Kubernetes', short: 'K8s' },
  { name: 'Terraform', short: 'Terraform' },
  { name: 'Docker', short: 'Docker' },
  { name: 'Datadog', short: 'Datadog' },
  { name: 'HashiCorp', short: 'HashiCorp' },
]

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Stats />

      {/* ====== OUR SERVICES ====== */}
      <section className="bg-alt-tf py-16 lg:py-20 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="pill-tf mb-5 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                What We Do
              </span>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                Our <span className="gt-tf">Services</span>
              </h2>
              <p className="text-lg max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
                End-to-end cloud solutions. Less overhead, more velocity.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="card-tf p-7 h-full flex flex-col"
                >
                  <div className="ibox-tf mb-5">{s.icon}</div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--text-secondary)' }}>{s.desc}</p>
                  <Link
                    to={s.to}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors group/link"
                  >
                    Learn more
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <PlatformOverview />
      <DashboardPreview />

      {/* ====== WHY TECHFECTORY ====== */}
      <section className="bg-alt-tf py-16 lg:py-20 relative overflow-hidden">
        <div className="orb-tf w-[400px] h-[400px] bg-teal-500 bottom-0 -left-40" style={{ animationDelay: '3s' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div>
                <span className="pill-tf-amber mb-6 inline-flex">Why TechFectory</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5" style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}>
                  Built for <span className="gt-tf-warm">scale</span>
                </h2>
                <p className="text-lg leading-relaxed mb-8 max-w-md" style={{ color: 'var(--text-secondary)' }}>
                  End-to-end cloud expertise — from migration to optimization, security to automation.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {[{ value: '500+', label: 'Projects' }, { value: '99.9%', label: 'Uptime' }, { value: '40%', label: 'Cost Savings' }].map((s) => (
                    <div key={s.label} className="card-glass-tf px-5 py-3 rounded-xl text-center">
                      <div className="stat-num-tf text-xl gt-tf">{s.value}</div>
                      <div className="text-[10px] uppercase tracking-wider font-medium" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-tf">
                  Get Started
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <StaggerContainer className="grid grid-cols-2 gap-4">
                {capabilities.map((c) => (
                  <StaggerItem key={c.title}>
                    <motion.div whileHover={{ y: -4 }} className="card-tf p-5 rounded-xl">
                      <div className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{c.title}</div>
                      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{c.desc}</div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* ====== PARTNER LOGOS ====== */}
      <section className="bg-hero-tf py-20 lg:py-28 relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2
                className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                Technology <span className="gt-tf">Partners</span>
              </h2>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Integrates with the tools your team already uses.
              </p>
            </div>
          </AnimatedSection>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ scale: 1.06, borderColor: 'rgba(20, 184, 166, 0.3)' }}
                className="card-glass-tf px-7 py-4 rounded-2xl flex flex-col items-center gap-1.5 cursor-default min-w-[120px] group"
              >
                <div className="text-base font-bold group-hover:text-teal-400 transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
                  {p.short}
                </div>
                <div className="text-[10px] group-hover:text-teal-300 transition-colors duration-300" style={{ color: 'var(--text-muted)' }}>
                  {p.name}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="glow-line-tf mt-16 max-w-sm mx-auto" />
        </div>
      </section>

      <CTA />
    </div>
  )
}
