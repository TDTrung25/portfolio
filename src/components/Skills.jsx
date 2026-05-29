import { motion } from 'framer-motion'
import {
  SiKubernetes, SiDocker, SiHelm, SiGitlab, SiArgo, SiPrometheus, SiGrafana,
  SiElasticstack, SiSplunk, SiApachekafka, SiRabbitmq, SiMysql, SiScylladb,
  SiRedis, SiTerraform, SiPython, SiGnubash, SiKeycloak, SiOkta, SiUbuntu, SiVmware,
} from 'react-icons/si'
import { FaDatabase, FaMicrosoft, FaWindows, FaShieldAlt, FaBell } from 'react-icons/fa'
import { FiUploadCloud, FiFlag, FiCpu } from 'react-icons/fi'
import Reveal, { SectionHeading } from './Reveal'
import { content } from '../data/content'
import { useLanguage } from '../context/LanguageContext'

// Map every skill name (EN + VN variants) to an icon + brand color.
const ICONS = {
  Kubernetes: [SiKubernetes, '#326ce5'],
  Docker: [SiDocker, '#2496ed'],
  Helm: [SiHelm, '#0f1689'],
  'GitLab CI': [SiGitlab, '#fc6d26'],
  ArgoCD: [SiArgo, '#ef7b4d'],
  Prometheus: [SiPrometheus, '#e6522c'],
  PushGateway: [FiUploadCloud, '#e6522c'],
  Grafana: [SiGrafana, '#f46800'],
  'ELK Stack': [SiElasticstack, '#005571'],
  Splunk: [SiSplunk, '#65a637'],
  'On-call / SLA 15m': [FaBell, '#f59e0b'],
  'On-call / SLA 15p': [FaBell, '#f59e0b'],
  'Apache Kafka': [SiApachekafka, '#ffffff'],
  RabbitMQ: [SiRabbitmq, '#ff6600'],
  MySQL: [SiMysql, '#4479a1'],
  'ScyllaDB / Cassandra': [SiScylladb, '#34b4eb'],
  Redis: [SiRedis, '#ff4438'],
  Oracle: [FaDatabase, '#f80000'],
  RocksDB: [FaDatabase, '#2f6db5'],
  'Microsoft Azure': [FaMicrosoft, '#0078d4'],
  Terraform: [SiTerraform, '#7b42bc'],
  Python: [SiPython, '#3776ab'],
  'Bash Shell': [SiGnubash, '#4eaa25'],
  'Keycloak (RBAC)': [SiKeycloak, '#4d4d4d'],
  Okta: [SiOkta, '#007dc1'],
  'Active Directory': [FaWindows, '#0078d4'],
  'ISO 27001': [FaShieldAlt, '#22c55e'],
  Unleash: [FiFlag, '#a970ff'],
  'Linux (Ubuntu)': [SiUbuntu, '#e95420'],
  'Windows Server': [FaWindows, '#0078d4'],
  'VMware ESXi': [SiVmware, '#607078'],
}

function SkillIcon({ name }) {
  const [Icon, color] = ICONS[name] || [FiCpu, 'var(--color-accent)']
  return <Icon style={{ color }} className="shrink-0 text-base" />
}

export default function Skills() {
  const { lang } = useLanguage()
  const t = content[lang].skills

  return (
    <section id="skills" className="relative bg-[var(--color-bg-soft)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker={t.kicker} title={t.title} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.groups.map((g, i) => (
            <Reveal key={g.name} delay={(i % 3) * 0.06}>
              <div className="card-hover h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <h3 className="font-display text-lg font-semibold text-[var(--color-text)]">
                  {g.name}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ y: -2 }}
                      className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 font-mono text-xs text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
                    >
                      <SkillIcon name={item} />
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
