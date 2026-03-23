import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const securityOps = [
  { step: '01', title: 'Identify', description: 'Continuous asset discovery and vulnerability scanning across your entire cloud environment. Map every resource, endpoint, and data flow.' },
  { step: '02', title: 'Protect', description: 'Enforce security policies, IAM best practices, and network segmentation automatically. Zero-trust principles applied at every layer.' },
  { step: '03', title: 'Detect', description: 'Real-time threat detection with anomaly-based alerting, behavioral analysis, and ML models trained on cloud-native attack patterns.' },
  { step: '04', title: 'Respond', description: 'Automated incident response playbooks with one-click remediation, forensic evidence collection, and full audit trails.' },
]

const complianceSteps = [
  { title: 'Baseline Assessment', desc: 'Map your current security posture against target frameworks to identify gaps, prioritize remediation, and build a compliance roadmap.' },
  { title: 'Policy Implementation', desc: 'Deploy automated guardrails and compliance-as-code across all accounts. Enforce tagging, encryption, and access control policies at scale.' },
  { title: 'Continuous Monitoring', desc: 'Real-time drift detection with alerts when resources fall out of compliance. Automated evidence collection for audit readiness.' },
]

const compliancePills = ['HIPAA', 'CCPA', 'GDPR', 'SOC 2', 'PCI-DSS', 'ISO 27001']

const devSecOpsPoints = [
  { num: '01', title: 'SAST Scanning', desc: 'Static application security testing integrated directly into every CI pipeline.' },
  { num: '02', title: 'DAST Testing', desc: 'Dynamic runtime security testing against deployed staging environments.' },
  { num: '03', title: 'Container Scanning', desc: 'Image vulnerability scanning before any container reaches production.' },
  { num: '04', title: 'IaC Security Linting', desc: 'Terraform and CloudFormation templates scanned for misconfigurations.' },
  { num: '05', title: 'Secrets Detection', desc: 'Automated secrets scanning with rotation policies and vault integration.' },
  { num: '06', title: 'RASP Protection', desc: 'Runtime application self-protection for real-time attack prevention.' },
  { num: '07', title: 'Dependency Patching', desc: 'Automated SCA and dependency updates with vulnerability prioritization.' },
  { num: '08', title: 'Security Gates', desc: 'Deployment gate enforcement blocking releases with critical findings.' },
]

const securityStats = [
  { value: '97.2%', label: 'Avg Compliance Score' },
  { value: '<15 min', label: 'Mean Time to Detect' },
  { value: '100%', label: 'Audit Pass Rate' },
  { value: '24/7', label: 'SOC Monitoring' },
]

const frameworks = [
  { name: 'CIS Benchmarks', desc: 'Automated checks against CIS AWS, Azure, and GCP benchmarks with continuous drift detection and remediation guidance.' },
  { name: 'SOC 2 Type II', desc: 'Trust services criteria with continuous control monitoring, evidence collection, and audit-ready reporting dashboards.' },
  { name: 'HIPAA', desc: 'Protected health information safeguards including encryption, access controls, and audit logging for healthcare workloads.' },
  { name: 'PCI-DSS', desc: 'Payment card data protection with network segmentation, key management, and penetration testing for fintech.' },
  { name: 'GDPR', desc: 'European data protection compliance with data mapping, consent management, and breach notification workflows.' },
  { name: 'ISO 27001', desc: 'Information security management system compliance with risk assessment, policy frameworks, and certification preparation.' },
]

export default function CloudSecurityPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-hero-tf">
        <div className="orb-tf w-[400px] h-[400px] bg-teal-500 -top-40 right-0" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
            <Link to="/" className="hover:text-teal-500 transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-secondary)' }}>Cloud Security</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
            Cloud <span className="gt-tf">Security</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Continuous security monitoring, compliance enforcement, and automated remediation for modern cloud environments.
          </p>
        </div>
      </section>

      {/* Security Operations */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              Security <span className="gt-tf">Operations</span>
            </h2>
            <p className="text-lg max-w-2xl mb-16" style={{ color: 'var(--text-secondary)' }}>
              A defense-in-depth approach aligned with NIST Cybersecurity Framework principles.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Our security operations center combines automated tooling with human expertise to deliver round-the-clock protection. Every alert is triaged, every incident is tracked, and every resolution is documented.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                We integrate with your existing SIEM, ticketing, and communication tools so security fits seamlessly into your workflow.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-2 gap-5">
              {securityOps.map((item) => (
                <StaggerItem key={item.step}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="card-tf p-6 h-full">
                    <span className="text-2xl font-bold text-teal-500/60 mb-3 block">{item.step}</span>
                    <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Compliance Process */}
      <section className="bg-alt-tf py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              Compliance <span className="gt-tf">Process</span>
            </h2>
            <p className="text-lg max-w-2xl mb-8" style={{ color: 'var(--text-secondary)' }}>
              From assessment to audit-ready in weeks, not months.
            </p>
            <div className="flex flex-wrap gap-2 mb-16">
              {compliancePills.map((p) => (
                <span key={p} className="pill-tf">{p}</span>
              ))}
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {complianceSteps.map((item, i) => (
              <StaggerItem key={item.title}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="card-tf p-8 h-full">
                  <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-400/30 flex items-center justify-center mb-5">
                    <span className="text-sm font-bold text-teal-400">{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* DevSecOps */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              DevSecOps <span className="gt-tf">Pipeline</span>
            </h2>
            <p className="text-lg max-w-2xl mb-16" style={{ color: 'var(--text-secondary)' }}>
              Security baked into every pipeline stage. Shift left with automated tooling integrated into your CI/CD workflows.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {devSecOpsPoints.map((point) => (
              <StaggerItem key={point.num}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="card-tf p-6 h-full">
                  <span className="text-xs font-bold text-teal-400 mb-3 block">{point.num}</span>
                  <h3 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{point.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{point.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Security Stats */}
      <section className="bg-alt-tf py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                Security That <span className="gt-tf">Performs</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Numbers that demonstrate our commitment to keeping your cloud environment protected and compliant.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {securityStats.map((s) => (
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

      {/* Frameworks */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              Compliance <span className="gt-tf">Frameworks</span>
            </h2>
            <p className="text-lg max-w-2xl mb-16" style={{ color: 'var(--text-secondary)' }}>
              We support all major compliance frameworks with automated control mapping and evidence collection.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((fw) => (
              <StaggerItem key={fw.name}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="card-tf p-7 h-full">
                  <h3 className="text-base font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{fw.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{fw.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>Secure your cloud today</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Get a free security assessment and compliance gap analysis. Identify risks before they become incidents.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-tf">Request Assessment</Link>
              <Link to="/pricing" className="btn-tf-outline">View Pricing</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
