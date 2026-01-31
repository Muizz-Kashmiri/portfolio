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
    image: '/images/timeline/placeholder.png',
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
    image: '/images/timeline/placeholder.png',
    date: 'JUN 2023 - NOV 2025',
    title: 'LLM Trainer @ Turing (Part-time)',
    description:
      'Implemented RLHF and supervised fine-tuning for Large Language Models, boosting performance by over 50% in key NLP tasks.',
    tags: ['RLHF', 'LLMs', 'Fine-tuning', 'NLP'],
  },
  {
    size: 'minimized',
    date: '2024',
    title:
      'Completed Master of Computer Science from UET Lahore',
  },
  {
    size: 'main',
    variant: 'work',
    image: '/images/timeline/placeholder.png',
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
    size: 'minimized',
    date: '2022',
    title:
      'Started Master of Computer Science at UET Lahore (Data Science)',
  },
  {
    size: 'main',
    variant: 'work',
    image: '/images/timeline/placeholder.png',
    date: 'DEC 2020 - APR 2023',
    title: 'Software Engineer (Flutter) @ NativeSol',
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
    size: 'minimized',
    date: '2021',
    title:
      'Completed Bachelor of IT from University of Punjab',
  },
  {
    size: 'main',
    variant: 'school',
    image: '/images/timeline/placeholder.png',
    date: '2017',
    title:
      'Started Bachelor of Information Technology at University of Punjab',
    description:
      'Studied at the University of Punjab, Lahore. GPA: 3.5/4.0',
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
