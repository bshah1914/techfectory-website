import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const testimonials = [
  {
    name: 'Rajesh Patel',
    title: 'VP of Engineering',
    company: 'FinServe',
    metric: '$47K/mo saved',
    quote: 'TechFectory flagged S3 buckets missing lifecycle policies across 14 accounts. We implemented the recommendations and saw savings within the first week.',
  },
  {
    name: 'Sarah Chen',
    title: 'Cloud Architect',
    company: 'DataStream',
    metric: '$23K/mo saved',
    quote: "We had over 200 unattached EBS volumes we didn't even know about. TechFectory found them on the first scan and the ROI was immediate.",
  },
  {
    name: 'Michael Torres',
    title: 'CTO',
    company: 'ScaleUp Health',
    metric: 'Replaced 3 tools',
    quote: "Replaced three separate tools with one platform. The CIS and SOC 2 compliance views alone are worth the subscription for our healthcare workloads.",
  },
  {
    name: 'Priya Sharma',
    title: 'DevOps Lead',
    company: 'E-commerce Plus',
    metric: '$31K/mo saved',
    quote: 'Within the first month, TechFectory surfaced over 180 actionable recommendations. Our team went from guessing to precision optimization overnight.',
  },
  {
    name: 'James Wilson',
    title: 'Platform Engineer',
    company: 'GameForge',
    metric: '40 idle Lambdas found',
    quote: 'The Lambda analysis blew us away. We had 40 idle functions running for months and had no visibility until TechFectory highlighted them.',
  },
  {
    name: 'Lisa Anderson',
    title: 'Director of Infrastructure',
    company: 'MediaFlow',
    metric: '$18K/mo saved',
    quote: 'CloudWatch Logs retention policies were costing us a fortune. TechFectory identified every log group with infinite retention and we fixed it in a day.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-hero-tf py-16 lg:py-24 relative overflow-hidden">
      <div className="orb-tf w-[500px] h-[500px] -top-40 right-0" style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.1) 0%, transparent 70%)' }} />
      <div className="orb-tf w-[400px] h-[400px] bottom-0 -left-40" style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="pill-tf pill-tf-rose mb-5 inline-flex">Customer Stories</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5" style={{ color: 'var(--text-primary)' }}>
            Trusted by <span className="gt-tf-warm">cloud-first teams</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Real results from real engineering teams using TechFectory.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="card-tf p-7 h-full flex flex-col group relative"
              >
                {/* Teal quote mark */}
                <svg className="w-8 h-8 text-teal-500/40 mb-4 group-hover:text-teal-500/60 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
                </svg>

                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'var(--text-secondary)' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mb-4">
                  <span className="pill-tf-emerald text-[11px]">{t.metric}</span>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  {/* Amber gradient avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-lg shadow-amber-500/20">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{t.name}</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.title}, {t.company}</div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
