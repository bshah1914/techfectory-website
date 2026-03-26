import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const services = [
  {
    title: 'CI/CD Pipeline Design',
    description: 'End-to-end pipeline automation from code commit to production deployment with automated testing and security scanning.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Infrastructure as Code',
    description: 'Terraform, CloudFormation, and Pulumi modules for repeatable, version-controlled infrastructure with drift detection.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Container Orchestration',
    description: 'Kubernetes and ECS deployments with auto-scaling, service mesh, and GitOps workflows for zero-downtime releases.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    title: 'Monitoring & Observability',
    description: 'Full-stack observability with metrics, logs, traces, and alerting using Datadog, Grafana, and Prometheus.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Site Reliability Engineering',
    description: 'SLO/SLI frameworks, error budgets, incident management, and chaos engineering for systematic reliability.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Platform Engineering',
    description: 'Internal developer platforms with self-service infrastructure, golden paths, and standardized toolchains.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
]

const benefits = [
  { title: 'Faster Deployments', metric: '10x', description: 'Deploy to production 10x more frequently with automated pipelines and GitOps workflows.' },
  { title: 'Reduced Downtime', metric: '99.99%', description: 'Achieve near-zero downtime with blue-green deployments, canary releases, and automated rollbacks.' },
  { title: 'Lower Costs', metric: '60%', description: 'Reduce operational overhead by 60% through automation, self-healing infrastructure, and right-sizing.' },
  { title: 'Better Security', metric: '80%', description: 'Reduce security incidents by 80% with shift-left practices and automated compliance scanning.' },
]

const whyUsCards = [
  { title: 'Certified Engineers', desc: 'AWS, GCP, and Azure certified DevOps professionals with 10+ years of hands-on production experience.' },
  { title: 'Proven Frameworks', desc: 'Battle-tested IaC modules, pipeline templates, and runbooks used across 200+ enterprise projects.' },
  { title: 'Agile Delivery', desc: '2-week sprint cycles with transparent reporting, demos, and continuous feedback loops.' },
  { title: 'Knowledge Transfer', desc: 'Comprehensive documentation, pair programming sessions, and hands-on training for your team.' },
]

const tools = [
  { name: 'Terraform', cat: 'IaC' },
  { name: 'Kubernetes', cat: 'Orchestration' },
  { name: 'Docker', cat: 'Containers' },
  { name: 'GitHub Actions', cat: 'CI/CD' },
  { name: 'GitLab CI', cat: 'CI/CD' },
  { name: 'ArgoCD', cat: 'GitOps' },
  { name: 'Helm', cat: 'Packaging' },
  { name: 'Prometheus', cat: 'Monitoring' },
]

const engagementModels = [
  { title: 'Project-Based', desc: 'Fixed-scope engagements for migrations, pipeline builds, or platform implementations. Clear deliverables and predictable budgets.', price: 'From $15K' },
  { title: 'Managed DevOps', desc: 'Ongoing operational support with dedicated engineers embedded in your team. SLA-backed response times and continuous improvement.', price: 'From $8K/mo' },
  { title: 'Consulting & Advisory', desc: 'Strategic guidance on architecture, tooling selection, and DevOps maturity improvement with senior architects.', price: 'From $250/hr' },
]

export default function DevOpsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-hero-tf">
        <div className="orb-tf w-[400px] h-[400px] bg-teal-500 -top-40 right-0" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
            <Link to="/" className="hover:text-teal-500 transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-secondary)' }}>DevOps Solutions</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
            DevOps <span className="gt-tf">Solutions</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Transform your software delivery with modern CI/CD, infrastructure as code, and platform engineering that scales.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                Full-Spectrum <span className="gt-tf">DevOps</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                From pipeline design to platform engineering, we cover the entire DevOps lifecycle with deep expertise in automation, observability, and cloud-native architecture.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Every solution is built with your team in mind -- we transfer knowledge and build internal capability that lasts beyond our engagement.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-2 gap-5">
              {services.map((svc) => (
                <StaggerItem key={svc.title}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="card-tf p-6 h-full">
                    <div className="ibox-tf mb-4">{svc.icon}</div>
                    <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{svc.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{svc.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Benefits with Metrics */}
      <section className="bg-alt-tf py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              Measurable <span className="gt-tf">Impact</span>
            </h2>
            <p className="text-lg max-w-2xl mb-16" style={{ color: 'var(--text-secondary)' }}>
              Our DevOps transformations deliver quantifiable business outcomes across speed, reliability, cost, and security.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card-tf p-8 h-full text-center">
                  <div className="stat-num-tf mb-3">{b.metric}</div>
                  <div className="pill-tf text-xs mb-4">{b.title}</div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{b.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              What Sets Us <span className="gt-tf">Apart</span>
            </h2>
            <p className="text-lg max-w-2xl mb-16" style={{ color: 'var(--text-secondary)' }}>
              TechFectory brings deep technical expertise, proven frameworks, and a partnership-first approach to every engagement.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {whyUsCards.map((card) => (
              <StaggerItem key={card.title}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="card-tf p-8 h-full border-l-2 border-teal-500/50">
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{card.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Toolchain */}
      <section className="bg-alt-tf py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                Our <span className="gt-tf">Toolchain</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                We master the tools that power modern DevOps, selecting the right combination for your stack and scale.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {tools.map((tool) => (
              <StaggerItem key={tool.name}>
                <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.2 }} className="card-tf p-6 text-center h-full">
                  <h3 className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{tool.name}</h3>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{tool.cat}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              Engagement <span className="gt-tf">Models</span>
            </h2>
            <p className="text-lg max-w-2xl mb-16" style={{ color: 'var(--text-secondary)' }}>
              Flexible ways to work together, designed to fit your team structure, budget, and timeline.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model) => (
              <StaggerItem key={model.title}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card-glow-tf p-8 h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{model.title}</h3>
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-secondary)' }}>{model.desc}</p>
                  <div className="sep-tf mb-4" />
                  <span className="text-xl font-bold gt-tf">{model.price}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>Accelerate your DevOps journey</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Talk to our DevOps engineers and get a free pipeline maturity assessment for your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-tf">Book a Call</Link>
              <Link to="/contact" className="btn-tf-outline">Get a Quote</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
