import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const stats = [
  {
    value: '18+',
    label: 'AWS Services',
    description: 'EC2, RDS, S3, Lambda & more',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    value: '25+',
    label: 'Optimization Rules',
    description: 'Automated cost intelligence',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    value: '40%',
    label: 'Avg Cost Reduction',
    description: 'Across all managed accounts',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    value: '95%',
    label: 'P95 Confidence',
    description: 'Recommendation accuracy',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

export default function Stats() {
  return (
    <section className="bg-alt-tf py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="pill-tf pill-tf-amber mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            TechFectory by the Numbers
          </span>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <StaggerItem key={stat.label}>
              <motion.div
                whileHover={{ y: -8, rotateZ: i % 2 === 0 ? 1 : -1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="card-tf p-7 text-center relative group"
              >
                {/* Hover glow ring */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: '0 0 40px rgba(20, 184, 166, 0.15), inset 0 1px 0 rgba(20, 184, 166, 0.1)' }}
                />

                <div className="ibox-tf mx-auto mb-5">
                  {stat.icon}
                </div>
                <div className="stat-num-tf gt-tf mb-2">{stat.value}</div>
                <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{stat.label}</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{stat.description}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
