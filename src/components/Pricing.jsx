import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const Check = () => (
  <svg className="w-4 h-4 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
)
const Cross = () => (
  <svg className="w-4 h-4 text-zinc-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
  </svg>
)

const plans = [
  {
    name: 'Starter', price: { monthly: 0, annual: 0 }, desc: 'Get started with basic cloud visibility.',
    features: [
      { t: '1 AWS account', ok: true }, { t: '50 resources', ok: true }, { t: 'Basic dashboard', ok: true },
      { t: 'Community support', ok: true }, { t: '7-day data retention', ok: true },
      { t: 'Optimization rules', ok: false }, { t: 'Cost alerts', ok: false }, { t: 'API access', ok: false },
    ],
    cta: 'Start Free',
  },
  {
    name: 'Professional', price: { monthly: 99, annual: 89 }, desc: 'For small teams optimizing spend.',
    features: [
      { t: '5 AWS accounts', ok: true }, { t: '500 resources', ok: true }, { t: '25+ optimization rules', ok: true },
      { t: 'Email support', ok: true }, { t: '30-day retention', ok: true }, { t: 'Cost alerts & reports', ok: true },
      { t: 'Compliance (basic)', ok: false }, { t: 'K8s monitoring', ok: false },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Business', price: { monthly: 299, annual: 269 }, desc: 'Full engine for growing teams.', featured: true,
    features: [
      { t: '20 AWS accounts', ok: true }, { t: 'Unlimited resources', ok: true }, { t: 'All 25+ rules + P95', ok: true },
      { t: 'CIS & SOC 2 compliance', ok: true }, { t: '90-day retention', ok: true }, { t: 'Budget alerts & forecasting', ok: true },
      { t: 'K8s monitoring', ok: true }, { t: 'Priority support', ok: true },
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise', price: { monthly: 999, annual: 899 }, desc: 'Unlimited scale, white-glove service.',
    features: [
      { t: 'Unlimited accounts', ok: true }, { t: 'Unlimited resources', ok: true }, { t: 'AI assistant & chat', ok: true },
      { t: 'Automated remediation', ok: true }, { t: '365-day retention', ok: true }, { t: 'Custom compliance', ok: true },
      { t: 'Advanced RBAC & SSO', ok: true }, { t: 'Dedicated engineer + SLA', ok: true },
    ],
    cta: 'Contact Sales',
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="py-16 lg:py-24 relative overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
      <div className="orb-tf w-[500px] h-[500px] -top-60 left-1/2" style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="pill-tf mb-5 inline-flex">Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
            Plans for every <span className="gt-tf">stage</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Pick a plan and start optimizing your cloud today.
          </p>
        </AnimatedSection>

        {/* Monthly / Annual Toggle */}
        <AnimatedSection delay={0.15} className="flex justify-center items-center gap-4 mb-14">
          <span className="text-sm font-medium" style={{ color: !annual ? 'var(--text-primary)' : 'var(--text-muted)' }}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className="relative w-14 h-7 rounded-full transition-colors duration-300"
            style={{ background: annual ? 'var(--accent)' : 'rgba(255,255,255,0.1)' }}
          >
            <motion.div
              className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-md"
              animate={{ left: annual ? 32 : 4 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <span className="text-sm font-medium" style={{ color: annual ? 'var(--text-primary)' : 'var(--text-muted)' }}>
            Annual <span className="pill-tf-emerald text-[10px] ml-1">Save 10%</span>
          </span>
        </AnimatedSection>

        {/* Pricing Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-16">
          {plans.map((p) => {
            const price = annual ? p.price.annual : p.price.monthly
            return (
              <StaggerItem key={p.name}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`card-tf p-7 h-full flex flex-col relative ${p.featured ? 'price-featured-tf' : ''}`}
                >
                  {p.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="pill-tf-amber text-[11px]">Most Popular</span>
                    </div>
                  )}

                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{p.name}</h3>
                    </div>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{p.desc}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-extrabold gt-tf" style={{ fontFamily: 'var(--font-display)' }}>
                        ${price}
                      </span>
                      <span className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>/mo</span>
                    </div>
                    {annual && p.price.monthly > 0 && (
                      <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                        <span className="line-through">${p.price.monthly}</span>
                        <span className="text-teal-400 ml-1">Save ${(p.price.monthly - p.price.annual) * 12}/yr</span>
                      </p>
                    )}
                  </div>

                  <ul className="space-y-2.5 mb-7 flex-1">
                    {p.features.map((f) => (
                      <li key={f.t} className="flex items-center gap-2.5 text-[13px]">
                        {f.ok ? <Check /> : <Cross />}
                        <span style={{ color: f.ok ? 'var(--text-body)' : 'var(--text-muted)' }}>{f.t}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={p.featured ? 'btn-tf-amber w-full text-center' : 'btn-tf-outline w-full text-center'}
                  >
                    {p.cta}
                  </Link>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* All plans include */}
        <AnimatedSection>
          <div className="card-tf p-6 max-w-2xl mx-auto text-center">
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>All plans include</h4>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {['Real AWS data', 'STS AssumeRole', 'Read-only access', 'SOC 2 compliant'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
