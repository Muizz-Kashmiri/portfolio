const timeline: {
  size: 'main' | 'minimized';
  variant?: 'school' | 'work';
  image?: string;
  date: string;
  title: string;
  description?: string;
  tags?: string[];
  details?: string[];
  links?: { label: string; url: string }[];
  images?: string[];
}[] = [
  {
    size: 'main',
    variant: 'work',
    image: '/images/timeline/prodago-icon.svg',
    date: 'JUN 2024 - PRESENT',
    title:
      'Senior Software Engineer (ML/AI) @ Prodago',
    description:
      'Building RAG systems for compliance document processing, managing Django backend architecture, and designing CI/CD pipelines on Azure.',
    tags: [
      'Python',
      'Django',
      'LangChain',
      'Azure',
      'RAG',
    ],
    details: [
      'Built RAG pipeline processing 10K+ compliance documents',
      'Designed Django microservice architecture for scalable backend',
      'Set up Azure CI/CD pipelines with 99.9% uptime',
      'Led agentic workflow development with LangChain',
      'Mentored a team of 3 engineers',
    ],
  },
  {
    size: 'main',
    variant: 'work',
    image: '/images/timeline/turing.png',
    date: 'JUN 2023 - NOV 2025',
    title: 'LLM Trainer @ Turing (Part-time)',
    description:
      'Implemented RLHF and supervised fine-tuning for Large Language Models, boosting performance by over 50% in key NLP tasks.',
    tags: ['RLHF', 'LLMs', 'Fine-tuning', 'NLP'],
    details: [
      'Implemented RLHF pipelines for LLM alignment',
      'Conducted supervised fine-tuning boosting NLP accuracy 50%+',
      'Curated and validated training datasets at scale',
      'Developed prompt engineering frameworks',
    ],
  },
  {
    size: 'main',
    variant: 'school',
    image: '/images/timeline/uet-lahore.png',
    date: '2022 - 2024',
    title:
      'Master of Computer Science from UET Lahore',
    description:
      'Specialized in Machine Learning at University of Engineering and Technology, Lahore. CGPA: 3.5/4.0 (Bronze Medalist)',
    tags: [
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'Computer Vision',
      'Research',
    ],
    details: [
      'Bronze Medalist with CGPA 3.5/4.0',
      'Specialized in ML and deep learning',
      'Thesis on NLP techniques with published research',
      'Coursework in computer vision and statistical learning',
    ],
  },
  {
    size: 'main',
    variant: 'work',
    image: '/images/timeline/educative.png',
    date: 'MAY 2023 - JUN 2024',
    title:
      'Software Engineer (Cloud ML) @ Educative',
    description:
      'Developed cloud-based labs for AWS microservices, created MLOps pipelines using SageMaker, and authored 25+ technical articles.',
    tags: [
      'AWS',
      'SageMaker',
      'Terraform',
      'Docker',
      'MLOps',
    ],
    details: [
      'Built 10 cloud-based AWS microservice labs',
      'Created MLOps pipelines with SageMaker',
      'Authored 25+ technical articles',
      'Implemented IaC with Terraform',
      'Containerized deployments with Docker',
    ],
  },
  {
    size: 'main',
    variant: 'work',
    image:
      '/images/timeline/software-consultancy.svg',
    date: 'DEC 2020 - APR 2023',
    title:
      'Software Engineer (Flutter) @ Software Consultancy',
    description:
      'Built 8 mobile applications and 3 CMS platforms across global markets. Mentored junior developers and improved code quality by 25%.',
    tags: [
      'Flutter',
      'Dart',
      'Firebase',
      'REST API',
    ],
    details: [
      'Shipped 8 mobile apps across global markets',
      'Built 3 CMS platforms',
      'Mentored junior developers',
      'Improved team code quality by 25%',
      'Integrated Firebase for real-time features',
    ],
  },
  {
    size: 'main',
    variant: 'school',
    image: '/images/timeline/punjab-university.png',
    date: '2017 - 2021',
    title:
      'Bachelor of Information Technology from University of Punjab',
    description:
      'Studied at the University of Punjab, Lahore. CGPA: 3.5/4.0',
    tags: [
      'Java',
      'Algorithms',
      'Data Structures',
      'OOP',
      'Databases',
    ],
    details: [
      'CGPA 3.5/4.0',
      'Foundations in algorithms and data structures',
      'Database design and management',
      'OOP principles and software engineering',
      'Final year project in mobile development',
    ],
  },
];

export default timeline;
