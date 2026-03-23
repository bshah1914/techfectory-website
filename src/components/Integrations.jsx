import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection'

const integrations = [
  { name: 'AWS', abbr: 'AWS', color: '#f59e0b' },
  { name: 'Kubernetes', abbr: 'K8s', color: '#326ce5' },
  { name: 'Terraform', abbr: 'TF', color: '#7b42bc' },
  { name: 'Docker', abbr: 'DKR', color: '#2496ed' },
  { name: 'GitHub', abbr: 'GH', color: '#6e7681' },
  { name: 'CI/CD', abbr: 'CI', color: '#e5534b' },
  { name: 'Azure', abbr: 'AZ', color: '#0078d4' },
  { name: 'GCP', abbr: 'GCP', color: '#ea4335' },
  { name: 'Jenkins', abbr: 'JK', color: '#d33833' },
  { name: 'Ansible', abbr: 'ANS', color: '#1a1918' },
]

export default function Integrations() {
  return (
    <section id="integrations" className="bg-hero-tf py-16 lg:py-24 relative overflow-hidden">
      <div className="orb-tf w-[400px] h-[400px] top-0 right-0" style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="pill-tf pill-tf-emerald mb-5 inline-flex">Integrations</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5" style={{ color: 'var(--text-primary)' }}>
            Works with your <span className="gt-tf-mixed">entire stack</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Native integrations with all major cloud providers and DevOps platforms.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {integrations.map((item) => (
            <StaggerItem key={item.name}>
              <motion.div
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="card-tf p-6 flex flex-col items-center justify-center gap-3 text-center group relative"
              >
                {/* Teal hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: '0 0 30px rgba(20, 184, 166, 0.12), inset 0 1px 0 rgba(20, 184, 166, 0.08)' }}
                />

                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                >
                  <span className="text-sm font-bold" style={{ color: item.color }}>{item.abbr}</span>
                </div>
                <span className="text-xs font-medium relative z-10" style={{ color: 'var(--text-secondary)' }}>{item.name}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
