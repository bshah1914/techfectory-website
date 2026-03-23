import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import Testimonials from '../components/Testimonials'

const values = [
  {
    title: 'Engineering Excellence',
    description: 'We build with precision. Every solution is architected for reliability, performance, and maintainability.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Customer Obsession',
    description: 'Your success is our success. We measure ourselves by the outcomes we deliver for your business.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Radical Transparency',
    description: 'No black boxes. We share our thinking, our pricing, and our progress openly with every client.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Continuous Learning',
    description: 'Cloud evolves fast. We invest in certifications, research, and experimentation to stay ahead of the curve.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '500+', label: 'Cloud Accounts Managed' },
  { value: '$200M+', label: 'Cloud Spend Optimized' },
  { value: '99.9%', label: 'Uptime SLA Delivered' },
  { value: '50+', label: 'Certified Engineers' },
]

const partners = [
  'AWS Advanced Partner',
  'Azure Solutions Partner',
  'Google Cloud Partner',
  'Kubernetes Certified',
  'SOC 2 Type II',
  'ISO 27001',
  'HIPAA Compliant',
  'PCI-DSS Certified',
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-hero-tf">
        <div className="orb-tf w-[400px] h-[400px] bg-teal-500 -top-40 right-0" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
            <Link to="/" className="hover:text-teal-500 transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-secondary)' }}>About TechFectory</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
            About <span className="gt-tf">TechFectory</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            We help engineering teams build, secure, and optimize cloud infrastructure with precision, transparency, and measurable outcomes.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <motion.div whileHover={{ y: -4 }} className="card-glow-tf p-10 h-full">
                <div className="pill-tf text-xs mb-4">OUR MISSION</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Make cloud infrastructure accessible, efficient, and secure for every team.</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  We believe that world-class cloud operations shouldn&apos;t require a 50-person platform team.
                  TechFectory levels the playing field with expert services and intelligent tooling that deliver
                  enterprise-grade outcomes at startup speed.
                </p>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ y: -4 }} className="card-glow-tf p-10 h-full">
                <div className="pill-tf-amber text-xs mb-4">OUR VISION</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>A world where every dollar spent on cloud delivers maximum business value.</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  We&apos;re building a future where cloud waste is eliminated through intelligent automation,
                  where security is built-in by default, and where engineering teams spend their time
                  shipping features instead of fighting infrastructure.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-alt-tf py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                From Frustration to <span className="gt-tf">Foundation</span>
              </h2>
              <div className="space-y-5 text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <p>
                  TechFectory was founded by a team of cloud architects who spent years watching organizations
                  hemorrhage money on misconfigured infrastructure. We saw the same problems repeated across
                  hundreds of accounts: idle resources, oversized instances, missing lifecycle policies,
                  and compliance gaps that went undetected for months.
                </p>
                <p>
                  We built TechFectory to be the partner we wished existed -- one that could scan an entire
                  cloud environment in minutes, surface actionable recommendations backed by real utilization data,
                  and give teams the confidence to act. Today, TechFectory combines product intelligence
                  with hands-on consulting to help organizations of every size master their cloud.
                </p>
                <p>
                  Our team has collectively managed over $200M in cloud spend across 500+ accounts,
                  and we bring that hard-won experience to every engagement.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              What Drives <span className="gt-tf">Us</span>
            </h2>
            <p className="text-lg max-w-2xl mb-16" style={{ color: 'var(--text-secondary)' }}>
              Four core values that guide every decision, every engagement, and every line of code we write.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card-tf p-8 h-full">
                  <div className="ibox-tf mb-5">{v.icon}</div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{v.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Stats */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                By The <span className="gt-tf">Numbers</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Metrics that reflect our commitment to delivering real, measurable value.
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

      {/* Partners */}
      <section className="bg-alt-tf py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                Certifications &amp; <span className="gt-tf">Partnerships</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Industry-recognized certifications and partnerships that validate our expertise.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            {partners.map((p) => (
              <StaggerItem key={p}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="pill-tf px-6 py-3 text-sm font-medium cursor-default"
                >
                  {p}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cta-tf py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>Let&apos;s build something great</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Whether you need consulting, managed services, or intelligent tooling -- we&apos;re here to help you master the cloud.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-tf">Get in Touch</Link>
              <Link to="/cloud-services" className="btn-tf-outline">Our Services</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
