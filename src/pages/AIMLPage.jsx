import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const aiServices = [
  {
    title: 'Machine Learning Models',
    description: 'Custom ML models trained on your data for classification, regression, clustering, and anomaly detection across tabular and time-series data.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Natural Language Processing',
    description: 'Text analytics, sentiment analysis, NER, document classification, and conversational AI powered by transformer models and LLMs.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: 'Computer Vision',
    description: 'Image classification, object detection, segmentation, OCR, and video analytics for quality inspection and content moderation.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast demand, predict churn, optimize pricing, and anticipate maintenance needs with statistical models and ensemble methods.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'AI Chatbots & Assistants',
    description: 'Intelligent conversational agents powered by LLMs with RAG pipelines, tool calling, and multi-turn context for support and knowledge bases.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    title: 'MLOps & Model Deployment',
    description: 'End-to-end ML pipelines with automated training, evaluation, versioning, and deployment with monitoring and drift detection.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
]

const cloudAIFeatures = [
  { title: 'Anomaly Detection', description: 'ML models that learn normal spending patterns and alert on deviations before they become costly surprises.' },
  { title: 'Predictive Scaling', description: 'Forecast traffic patterns and pre-scale infrastructure to meet demand without over-provisioning.' },
  { title: 'Cost Forecasting', description: 'Accurate 30/60/90-day spend predictions using historical data, seasonality, and growth trajectory analysis.' },
  { title: 'Intelligent Rightsizing', description: 'Analyze actual CPU, memory, and network utilization to recommend optimal instance types and sizes.' },
]

const techStack = [
  { name: 'TensorFlow', color: 'pill-tf-amber' },
  { name: 'PyTorch', color: 'pill-tf-rose' },
  { name: 'scikit-learn', color: 'pill-tf' },
  { name: 'Hugging Face', color: 'pill-tf-amber' },
  { name: 'LangChain', color: 'pill-tf-emerald' },
  { name: 'OpenAI API', color: 'pill-tf' },
  { name: 'AWS SageMaker', color: 'pill-tf-amber' },
  { name: 'Google Vertex AI', color: 'pill-tf' },
  { name: 'MLflow', color: 'pill-tf' },
  { name: 'Kubeflow', color: 'pill-tf-emerald' },
  { name: 'ONNX', color: 'pill-tf' },
  { name: 'FastAPI', color: 'pill-tf-emerald' },
]

const useCases = [
  {
    industry: 'Healthcare',
    title: 'AI-Assisted Diagnosis',
    description: 'Computer vision models analyzing medical imaging to assist radiologists. Achieved 94% accuracy in early detection, reducing diagnostic time by 60%.',
    pillClass: 'pill-tf-emerald',
  },
  {
    industry: 'Finance',
    title: 'Real-Time Fraud Detection',
    description: 'Ensemble ML models processing millions of transactions per second. Reduced false positives by 70% while catching 99.2% of fraudulent activity.',
    pillClass: 'pill-tf',
  },
  {
    industry: 'E-commerce',
    title: 'Recommendation Engine',
    description: 'Personalized product recommendations using collaborative filtering and deep learning. Increased average order value by 35%.',
    pillClass: 'pill-tf-amber',
  },
  {
    industry: 'Manufacturing',
    title: 'Predictive Maintenance',
    description: 'IoT sensor data analysis with time-series ML models. Reduced unplanned downtime by 80% and maintenance costs by 45%.',
    pillClass: 'pill-tf-rose',
  },
]

const aiProcess = [
  { step: '01', title: 'Data Collection', description: 'Aggregate, clean, and validate data from multiple sources with quality checks and governance frameworks.' },
  { step: '02', title: 'Feature Engineering', description: 'Transform raw data into meaningful features combining domain expertise with statistical analysis.' },
  { step: '03', title: 'Model Training', description: 'Iterative experimentation with multiple architectures, hyperparameter tuning, and cross-validation.' },
  { step: '04', title: 'Evaluation', description: 'Rigorous testing with held-out datasets, bias detection, fairness audits, and performance benchmarks.' },
  { step: '05', title: 'Deployment', description: 'Production-grade deployment with model serving, A/B testing, monitoring, and automated retraining pipelines.' },
]

export default function AIMLPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-hero-tf">
        <div className="orb-tf w-[400px] h-[400px] bg-teal-500 -top-40 right-0" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
            <Link to="/" className="hover:text-teal-500 transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-secondary)' }}>AI &amp; Machine Learning</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
            AI-Powered <span className="gt-tf-warm">Intelligence</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            From custom ML models to production-grade AI systems, we help organizations harness artificial intelligence for real business outcomes.
          </p>
        </div>
      </section>

      {/* AI/ML Services */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              Our AI/ML <span className="gt-tf-warm">Services</span>
            </h2>
            <p className="text-lg max-w-2xl mb-16" style={{ color: 'var(--text-secondary)' }}>
              End-to-end AI solutions from data strategy to production deployment that learn, adapt, and deliver value.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((svc) => (
              <StaggerItem key={svc.title}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card-tf p-8 h-full">
                  <div className="ibox-tf mb-5">{svc.icon}</div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{svc.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{svc.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* AI for Cloud Optimization */}
      <section className="bg-alt-tf py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                AI for Cloud <span className="gt-tf-warm">Optimization</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                We use AI to transform how organizations manage cloud costs. Machine learning models analyze usage patterns, detect anomalies, and deliver intelligent recommendations that save teams an average of 40% on cloud spend.
              </p>
              <div className="space-y-4">
                {cloudAIFeatures.map((feat) => (
                  <div key={feat.title} className="card-tf p-5">
                    <h4 className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{feat.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{feat.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div whileHover={{ y: -4 }} className="card-glow-tf p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/20 to-teal-500/20 border border-amber-400/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>TechFectory AI Engine</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Powered by machine learning</p>
                </div>
                <div className="space-y-3">
                  {['Anomaly Detection', 'Pattern Recognition', 'Cost Prediction', 'Auto-Optimization'].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 card-tf p-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="text-sm" style={{ color: 'var(--text-body)' }}>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                AI/ML Technology <span className="gt-tf-warm">Stack</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                We leverage the best frameworks and platforms in the AI/ML ecosystem.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
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

      {/* Use Cases */}
      <section className="bg-alt-tf py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              Real-World <span className="gt-tf-warm">Use Cases</span>
            </h2>
            <p className="text-lg max-w-2xl mb-16" style={{ color: 'var(--text-secondary)' }}>
              AI solutions deployed across industries, delivering measurable business impact.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 gap-8">
            {useCases.map((uc) => (
              <StaggerItem key={uc.industry}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="card-tf p-8 h-full">
                  <span className={`${uc.pillClass} text-xs mb-4 inline-block`}>{uc.industry}</span>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{uc.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{uc.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* AI Process */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              Our AI <span className="gt-tf-warm">Process</span>
            </h2>
            <p className="text-lg max-w-2xl mb-16" style={{ color: 'var(--text-secondary)' }}>
              A rigorous, iterative methodology from raw data to production-grade AI systems.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {aiProcess.map((item) => (
              <StaggerItem key={item.step}>
                <div className="card-tf p-6 h-full">
                  <span className="text-sm font-bold text-amber-400 mb-3 block">{item.step}</span>
                  <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>Ready to leverage AI?</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Explore how AI and machine learning can transform your business. Start with a free consultation to identify high-impact opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-tf">Book AI Consultation</Link>
              <Link to="/cloud-services" className="btn-tf-outline">Explore Services</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
