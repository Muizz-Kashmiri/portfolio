const timeline: {
  size: 'main' | 'minimized';
  variant?: 'school' | 'work';
  image?: string;
  date: string;
  title: string;
  description?: string;
  tags?: string[];
}[] = [
  {
    size: 'main',
    variant: 'work',
    image: '/images/timeline/prodago-icon.svg',
    date: 'JUN 2024 - PRESENT',
    title: 'Senior Software Engineer (ML/AI) @ Prodago',
    description:
      'Building RAG systems for compliance document processing, managing Django backend architecture, and designing CI/CD pipelines on Azure.',
    tags: [
      'Python',
      'Django',
      'LangChain',
      'Azure',
      'RAG',
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
  },
  {
    size: 'main',
    variant: 'work',
    image: '/images/timeline/educative.png',
    date: 'MAY 2023 - JUN 2024',
    title: 'Software Engineer (Cloud ML) @ Educative',
    description:
      'Developed cloud-based labs for AWS microservices, created MLOps pipelines using SageMaker, and authored 25+ technical articles.',
    tags: [
      'AWS',
      'SageMaker',
      'Terraform',
      'Docker',
      'MLOps',
    ],
  },
  {
    size: 'main',
    variant: 'work',
    image: '/images/timeline/software-consultancy.svg',
    date: 'DEC 2020 - APR 2023',
    title: 'Software Engineer (Flutter) @ Software Consultancy',
    description:
      'Built 8 mobile applications and 3 CMS platforms across global markets. Mentored junior developers and improved code quality by 25%.',
    tags: [
      'Flutter',
      'Dart',
      'Firebase',
      'REST API',
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
  },
];

export default timeline;
