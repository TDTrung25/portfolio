// Bilingual content for the portfolio. All copy derived from CV_TranDinhTrung_2026.
export const content = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
      resume: 'Resume',
    },
    hero: {
      greeting: 'Hi, I am',
      name: 'Tran Dinh Trung',
      roles: [
        'DevOps Engineer',
        'Operations Engineer',
        'Cloud & Infrastructure',
        'Reliability Engineer',
      ],
      tagline:
        'I design resilient, cloud-native infrastructure at scale — turning manual ops into automated, observable, self-healing systems.',
      ctaPrimary: 'View my work',
      ctaSecondary: 'Get in touch',
      location: 'Ho Chi Minh City, Vietnam',
    },
    about: {
      title: 'About Me',
      kicker: 'Who I am',
      paragraphs: [
        'DevOps & Operations Engineer with 3.5+ years of experience designing resilient cloud-native infrastructure at scale. Hands-on expertise in Kubernetes, Kafka, ELK Stack, Terraform, and CI/CD pipelines.',
        'Proven track record: reduced deployment incidents by 70%, achieved 99.99% uptime across zero-downtime cluster migrations, and built an AI-assisted observability platform eliminating manual alert creation across 200+ microservices.',
        'I combine deep infrastructure engineering with automation-first thinking to accelerate delivery and harden production reliability.',
      ],
      stats: [
        { value: '3.5+', label: 'Years of experience' },
        { value: '99.99%', label: 'Uptime maintained' },
        { value: '70%', label: 'Fewer deploy incidents' },
        { value: '200+', label: 'Microservices observed' },
      ],
      cvButton: 'Download CV',
      photoAlt: 'Tran Dinh Trung — MoMo employee badge',
    },
    gallery: {
      kicker: 'Recognition',
      title: 'Milestones & Awards',
      items: [
        { caption: 'Incident Day 2025', sub: 'Best Incident Response Team · MoMo' },
        { caption: 'Service Core Excellence Award', sub: 'M_SERVICE (MoMo)' },
        { caption: 'MoMo Challenge 2025', sub: '1st Prize · SCore "Face Your Fears"' },
      ],
    },
    skills: {
      title: 'Technical Skills',
      kicker: 'What I work with',
      groups: [
        { name: 'Container & Orchestration', items: ['Kubernetes', 'Docker', 'Helm'] },
        { name: 'CI/CD & GitOps', items: ['GitLab CI', 'ArgoCD'] },
        {
          name: 'Observability & Monitoring',
          items: ['Prometheus', 'PushGateway', 'Grafana', 'ELK Stack', 'Splunk', 'On-call / SLA 15m'],
        },
        { name: 'Message Brokers', items: ['Apache Kafka', 'RabbitMQ'] },
        { name: 'Databases', items: ['MySQL', 'ScyllaDB / Cassandra', 'Redis', 'Oracle', 'RocksDB'] },
        { name: 'Cloud & IaC', items: ['Microsoft Azure', 'Terraform'] },
        { name: 'Scripting & Automation', items: ['Python', 'Bash Shell'] },
        { name: 'Security & Identity', items: ['Keycloak (RBAC)', 'Okta', 'Active Directory', 'ISO 27001'] },
        { name: 'Feature Flags', items: ['Unleash'] },
        { name: 'OS & Virtualization', items: ['Linux (Ubuntu)', 'Windows Server', 'VMware ESXi'] },
      ],
    },
    experience: {
      title: 'Work Experience',
      kicker: 'Where I have worked',
      jobs: [
        {
          role: 'Operations Engineer',
          company: 'M_SERVICE (MoMo)',
          meta: 'Fintech · 50M+ daily transactions',
          period: 'Sep 2024 – Present',
          current: true,
          highlights: [
            'Orchestrated zero-downtime migration of 2 Kubernetes clusters (UAT & PROD), mapping 100+ services and designing phased cutovers with auto-rollback — maintaining 99.99% uptime throughout.',
            'Upgraded RabbitMQ & Kafka across SCore cells (2 clusters, 20K+ queues); monitored 50M+ daily transactions post-upgrade with zero message loss.',
            'Deployed Unleash feature-flag framework, transitioning from direct config pushes to controlled rollouts — cutting deployment-related incidents by 70%.',
            'Designed & implemented a DR site achieving RTO < 2 hours and RPO < 30 minutes, strengthening business continuity.',
            'Led incident management for 15+ P1/P2 events and updated 5+ runbooks from annual chaos engineering exercises.',
            'Deployed ELK Stack on Docker for distributed tracing and Kubernetes performance observability.',
            'Integrated Kafka UI with Keycloak RBAC, securing topic management and centralizing access control across teams.',
          ],
        },
        {
          role: 'System Administrator',
          company: 'DXC Technology',
          meta: '',
          period: 'May 2022 – Jul 2024',
          current: false,
          highlights: [
            'Provisioned Azure Landing Zones with Terraform (IaC), establishing secure, scalable cloud environments adhering to enterprise governance standards.',
            'Administered Windows Server, Active Directory & WSUS patch management for a multi-site enterprise environment.',
            'Managed IAM using Okta & Microsoft Authenticator, enforcing least-privilege access across cloud and on-prem systems.',
            'Led infrastructure security implementation, directly contributing to ISO 27001 certification.',
            'Configured & monitored NAS Synology and enterprise backup/recovery systems, ensuring data integrity and minimizing RPO exposure.',
          ],
        },
        {
          role: 'IT Infrastructure Technician',
          company: 'DXC Technology',
          meta: '',
          period: 'Earlier tenure',
          current: false,
          highlights: [
            'Configured site-to-site VPNs & Aruba AP12 wireless networks; deployed endpoint security solutions (Trellix, Bitdefender).',
            'Managed NAS RAID configurations and SQL database backup schedules.',
            'Set up Office 365 / SharePoint / OneDrive policies.',
            'Handled Active Directory user lifecycle (onboarding/offboarding) and oversaw IT hardware procurement & Capex/Opex budget planning.',
          ],
        },
      ],
    },
    projects: {
      title: 'Featured Projects',
      kicker: 'What I have built',
      items: [
        {
          name: 'Score Eye',
          subtitle: 'AI-assisted observability platform',
          tags: ['Python', 'Grafana', 'ML', 'Observability'],
          highlights: [
            'Architected & shipped an AI-powered observability platform from scratch in 6 weeks that auto-generates Grafana alert rules from service metadata — eliminating manual rule creation across 200+ microservices.',
            'Improved alert accuracy from 65% → 92% and cut alert fatigue by 60% via ML-assisted signal tuning on MoMo’s Cursor-based AI coding framework.',
          ],
        },
        {
          name: 'TELCO — Revenue Operations',
          subtitle: 'Real-time revenue & reconciliation automation',
          tags: ['Python', 'Automation', 'Data Pipelines'],
          highlights: [
            'Engineered a real-time revenue milestone tracker delivering automated notifications to Business Units — cutting reporting latency from hours to near real-time.',
            'Automated financial reconciliation by scripting partner data ingestion and distribution to Accounting via email pipelines — eliminating 100% of manual reconciliation tasks.',
            'Implemented proactive inventory & fund-depletion alerts, mitigating service disruptions before they reached end-users.',
          ],
        },
        {
          name: 'Customer Service Chatbot',
          subtitle: 'Internal order-system assistant',
          tags: ['Automation', 'Integrations', 'Internal Tooling'],
          highlights: [
            'Built an internal Customer Service chatbot integrated with order systems — eliminating 100% of the manual data-fetching workload for CS agents.',
          ],
        },
      ],
    },
    education: {
      title: 'Education & Certifications',
      kicker: 'How I keep growing',
      eduTitle: 'Education',
      certTitle: 'Certifications',
      schools: [
        {
          degree: 'M.S. Computer Science — Specialization in Artificial Intelligence',
          school: 'Saigon International University',
          period: 'Jun 2025 – Mar 2027',
        },
        {
          degree: 'B.Eng. Electronics & Telecommunications',
          school: 'Ho Chi Minh City University of Science',
          period: 'Jan 2018 – Dec 2022',
        },
      ],
      certs: [
        { name: 'AZ-104: Microsoft Azure Administrator Associate', issuer: 'Microsoft' },
        { name: 'AZ-900: Microsoft Azure Fundamentals', issuer: 'Microsoft' },
        { name: 'CCNA: Cisco Certified Network Associate', issuer: 'Cisco' },
        { name: 'HPE6-A72: Aruba Certified Switching Associate', issuer: 'HPE' },
      ],
      awardsTitle: 'Awards & Recognition',
      awards: [
        { name: 'Employee Excellence Award 2025 (2/46 members)', org: 'M_SERVICE (MoMo)' },
        { name: 'Best Incident Handling Team Award 2025', org: 'M_SERVICE (MoMo)' },
      ],
      languagesTitle: 'Languages',
      languages: [
        { name: 'Vietnamese', level: 'Native' },
        { name: 'English', level: 'B1 VSTEP' },
      ],
    },
    contact: {
      title: 'Get In Touch',
      kicker: 'Let us talk',
      text: 'I am always open to discussing DevOps roles, infrastructure challenges, or interesting automation problems. Feel free to reach out.',
      cta: 'Say hello',
      email: 'trandinhtrung255@gmail.com',
      phone: '+84 941 663 253',
    },
    footer: {
      built: 'Designed & built by Tran Dinh Trung',
      rights: 'All rights reserved.',
    },
  },

  vi: {
    nav: {
      about: 'Giới thiệu',
      skills: 'Kỹ năng',
      experience: 'Kinh nghiệm',
      projects: 'Dự án',
      education: 'Học vấn',
      contact: 'Liên hệ',
      resume: 'CV',
    },
    hero: {
      greeting: 'Xin chào, tôi là',
      name: 'Trần Đình Trung',
      roles: [
        'Kỹ sư DevOps',
        'Kỹ sư Vận hành',
        'Hạ tầng & Cloud',
        'Kỹ sư Độ tin cậy',
      ],
      tagline:
        'Tôi thiết kế hạ tầng cloud-native bền vững ở quy mô lớn — biến vận hành thủ công thành hệ thống tự động hoá, quan sát được và tự phục hồi.',
      ctaPrimary: 'Xem dự án',
      ctaSecondary: 'Liên hệ với tôi',
      location: 'TP. Hồ Chí Minh, Việt Nam',
    },
    about: {
      title: 'Về Tôi',
      kicker: 'Tôi là ai',
      paragraphs: [
        'Kỹ sư DevOps & Vận hành với hơn 3.5 năm kinh nghiệm thiết kế hạ tầng cloud-native bền vững ở quy mô lớn. Thành thạo Kubernetes, Kafka, ELK Stack, Terraform và các pipeline CI/CD.',
        'Thành tích đã được chứng minh: giảm 70% sự cố triển khai, đạt 99.99% uptime qua các đợt di chuyển cụm không gián đoạn, và xây dựng nền tảng observability hỗ trợ AI loại bỏ việc tạo cảnh báo thủ công cho hơn 200 microservice.',
        'Tôi kết hợp kỹ thuật hạ tầng chuyên sâu với tư duy ưu tiên tự động hoá để tăng tốc bàn giao và củng cố độ tin cậy của hệ thống production.',
      ],
      stats: [
        { value: '3.5+', label: 'Năm kinh nghiệm' },
        { value: '99.99%', label: 'Uptime duy trì' },
        { value: '70%', label: 'Giảm sự cố triển khai' },
        { value: '200+', label: 'Microservice giám sát' },
      ],
      cvButton: 'Tải CV',
      photoAlt: 'Trần Đình Trung — thẻ nhân viên MoMo',
    },
    gallery: {
      kicker: 'Ghi nhận',
      title: 'Cột mốc & Giải thưởng',
      items: [
        { caption: 'Incident Day 2025', sub: 'Đội Xử lý Sự cố Tốt nhất · MoMo' },
        { caption: 'Giải thưởng Service Core Excellence', sub: 'M_SERVICE (MoMo)' },
        { caption: 'MoMo Challenge 2025', sub: 'Giải Nhất · SCore "Face Your Fears"' },
      ],
    },
    skills: {
      title: 'Kỹ Năng Kỹ Thuật',
      kicker: 'Công nghệ tôi sử dụng',
      groups: [
        { name: 'Container & Điều phối', items: ['Kubernetes', 'Docker', 'Helm'] },
        { name: 'CI/CD & GitOps', items: ['GitLab CI', 'ArgoCD'] },
        {
          name: 'Observability & Giám sát',
          items: ['Prometheus', 'PushGateway', 'Grafana', 'ELK Stack', 'Splunk', 'On-call / SLA 15p'],
        },
        { name: 'Message Brokers', items: ['Apache Kafka', 'RabbitMQ'] },
        { name: 'Cơ sở dữ liệu', items: ['MySQL', 'ScyllaDB / Cassandra', 'Redis', 'Oracle', 'RocksDB'] },
        { name: 'Cloud & IaC', items: ['Microsoft Azure', 'Terraform'] },
        { name: 'Scripting & Tự động hoá', items: ['Python', 'Bash Shell'] },
        { name: 'Bảo mật & Định danh', items: ['Keycloak (RBAC)', 'Okta', 'Active Directory', 'ISO 27001'] },
        { name: 'Feature Flags', items: ['Unleash'] },
        { name: 'Hệ điều hành & Ảo hoá', items: ['Linux (Ubuntu)', 'Windows Server', 'VMware ESXi'] },
      ],
    },
    experience: {
      title: 'Kinh Nghiệm Làm Việc',
      kicker: 'Nơi tôi đã làm việc',
      jobs: [
        {
          role: 'Kỹ sư Vận hành',
          company: 'M_SERVICE (MoMo)',
          meta: 'Fintech · 50M+ giao dịch/ngày',
          period: 'T9 2024 – Hiện tại',
          current: true,
          highlights: [
            'Điều phối di chuyển không gián đoạn 2 cụm Kubernetes (UAT & PROD), ánh xạ hơn 100 dịch vụ và thiết kế cutover theo giai đoạn có auto-rollback — duy trì 99.99% uptime xuyên suốt.',
            'Nâng cấp RabbitMQ & Kafka trên các cell SCore (2 cụm, hơn 20K queue); giám sát 50M+ giao dịch/ngày sau nâng cấp với không mất tin nhắn.',
            'Triển khai feature-flag Unleash, chuyển từ đẩy config trực tiếp sang rollout có kiểm soát — giảm 70% sự cố liên quan triển khai.',
            'Thiết kế & triển khai site DR đạt RTO < 2 giờ và RPO < 30 phút, củng cố tính liên tục của hoạt động kinh doanh.',
            'Dẫn dắt xử lý sự cố cho hơn 15 sự kiện P1/P2 và cập nhật hơn 5 runbook từ các bài tập chaos engineering hằng năm.',
            'Triển khai ELK Stack trên Docker phục vụ distributed tracing và quan sát hiệu năng Kubernetes.',
            'Tích hợp Kafka UI với Keycloak RBAC, bảo mật quản lý topic và tập trung hoá kiểm soát truy cập giữa các nhóm.',
          ],
        },
        {
          role: 'Quản trị Hệ thống',
          company: 'DXC Technology',
          meta: '',
          period: 'T5 2022 – T7 2024',
          current: false,
          highlights: [
            'Cấp phát Azure Landing Zone bằng Terraform (IaC), thiết lập môi trường cloud an toàn, mở rộng được theo chuẩn quản trị doanh nghiệp.',
            'Quản trị Windows Server, Active Directory & WSUS cho môi trường doanh nghiệp đa địa điểm.',
            'Quản lý IAM bằng Okta & Microsoft Authenticator, thực thi nguyên tắc least-privilege trên cả cloud và on-prem.',
            'Dẫn dắt triển khai bảo mật hạ tầng, đóng góp trực tiếp vào chứng nhận ISO 27001.',
            'Cấu hình & giám sát NAS Synology và hệ thống backup/recovery, đảm bảo toàn vẹn dữ liệu và giảm thiểu RPO.',
          ],
        },
        {
          role: 'Kỹ thuật viên Hạ tầng CNTT',
          company: 'DXC Technology',
          meta: '',
          period: 'Giai đoạn trước',
          current: false,
          highlights: [
            'Cấu hình VPN site-to-site & mạng không dây Aruba AP12; triển khai giải pháp bảo mật endpoint (Trellix, Bitdefender).',
            'Quản lý cấu hình NAS RAID và lịch backup cơ sở dữ liệu SQL.',
            'Thiết lập chính sách Office 365 / SharePoint / OneDrive.',
            'Xử lý vòng đời người dùng Active Directory (onboarding/offboarding) và giám sát mua sắm phần cứng & lập kế hoạch ngân sách Capex/Opex.',
          ],
        },
      ],
    },
    projects: {
      title: 'Dự Án Tiêu Biểu',
      kicker: 'Những gì tôi đã xây dựng',
      items: [
        {
          name: 'Score Eye',
          subtitle: 'Nền tảng observability hỗ trợ AI',
          tags: ['Python', 'Grafana', 'ML', 'Observability'],
          highlights: [
            'Thiết kế & xây dựng nền tảng observability ứng dụng AI từ con số 0 trong 6 tuần, tự động tạo rule cảnh báo Grafana từ metadata dịch vụ — loại bỏ việc tạo rule thủ công cho hơn 200 microservice.',
            'Cải thiện độ chính xác cảnh báo từ 65% → 92% và giảm 60% mệt mỏi cảnh báo nhờ tinh chỉnh tín hiệu hỗ trợ ML trên framework code AI dựa trên Cursor của MoMo.',
          ],
        },
        {
          name: 'TELCO — Vận hành Doanh thu',
          subtitle: 'Tự động hoá doanh thu & đối soát thời gian thực',
          tags: ['Python', 'Tự động hoá', 'Data Pipelines'],
          highlights: [
            'Xây dựng bộ theo dõi cột mốc doanh thu thời gian thực, gửi thông báo tự động đến các Business Unit — giảm độ trễ báo cáo từ vài giờ xuống gần thời gian thực.',
            'Tự động hoá đối soát tài chính bằng cách script hoá việc nạp dữ liệu đối tác và phân phối đến Kế toán qua pipeline email — loại bỏ 100% công việc đối soát thủ công.',
            'Triển khai cảnh báo chủ động về tồn kho & cạn quỹ, ngăn gián đoạn dịch vụ trước khi ảnh hưởng đến người dùng.',
          ],
        },
        {
          name: 'Chatbot Chăm sóc Khách hàng',
          subtitle: 'Trợ lý nội bộ tích hợp hệ thống đơn hàng',
          tags: ['Tự động hoá', 'Tích hợp', 'Công cụ nội bộ'],
          highlights: [
            'Xây dựng chatbot CSKH nội bộ tích hợp với hệ thống đơn hàng — loại bỏ 100% khối lượng tra cứu dữ liệu thủ công cho nhân viên CSKH.',
          ],
        },
      ],
    },
    education: {
      title: 'Học Vấn & Chứng Chỉ',
      kicker: 'Cách tôi không ngừng phát triển',
      eduTitle: 'Học vấn',
      certTitle: 'Chứng chỉ',
      schools: [
        {
          degree: 'Thạc sĩ Khoa học Máy tính — Chuyên ngành Trí tuệ Nhân tạo',
          school: 'Đại học Quốc tế Sài Gòn',
          period: 'T6 2025 – T3 2027',
        },
        {
          degree: 'Kỹ sư Điện tử & Viễn thông',
          school: 'Đại học Khoa học Tự nhiên TP.HCM',
          period: 'T1 2018 – T12 2022',
        },
      ],
      certs: [
        { name: 'AZ-104: Microsoft Azure Administrator Associate', issuer: 'Microsoft' },
        { name: 'AZ-900: Microsoft Azure Fundamentals', issuer: 'Microsoft' },
        { name: 'CCNA: Cisco Certified Network Associate', issuer: 'Cisco' },
        { name: 'HPE6-A72: Aruba Certified Switching Associate', issuer: 'HPE' },
      ],
      awardsTitle: 'Giải thưởng & Ghi nhận',
      awards: [
        { name: 'Giải thưởng Nhân viên Xuất sắc 2025 (2/46 thành viên)', org: 'M_SERVICE (MoMo)' },
        { name: 'Giải thưởng Đội Xử lý Sự cố Tốt nhất 2025', org: 'M_SERVICE (MoMo)' },
      ],
      languagesTitle: 'Ngôn ngữ',
      languages: [
        { name: 'Tiếng Việt', level: 'Bản ngữ' },
        { name: 'Tiếng Anh', level: 'B1 VSTEP' },
      ],
    },
    contact: {
      title: 'Liên Hệ',
      kicker: 'Cùng trò chuyện',
      text: 'Tôi luôn sẵn sàng trao đổi về các vị trí DevOps, thách thức hạ tầng hoặc những bài toán tự động hoá thú vị. Đừng ngần ngại liên hệ.',
      cta: 'Gửi lời chào',
      email: 'trandinhtrung255@gmail.com',
      phone: '+84 941 663 253',
    },
    footer: {
      built: 'Thiết kế & xây dựng bởi Trần Đình Trung',
      rights: 'Bảo lưu mọi quyền.',
    },
  },
}

export const social = {
  email: 'trandinhtrung255@gmail.com',
  phone: '+84 941 663 253',
  linkedin: 'https://www.linkedin.com/in/trung-tran255/',
}

// Files served from /public. Prefix with Vite's BASE_URL so they resolve
// correctly both locally ("/") and on GitHub Pages ("/portfolio/").
const base = import.meta.env.BASE_URL
export const cvFile = `${base}CV_TranDinhTrung_2026.pdf`
export const avtImage = `${base}avt.jpg`
export const galleryImages = [
  `${base}incident_day.jpg`,
  `${base}award.jpg`,
  `${base}momo_challenge.jpg`,
]
