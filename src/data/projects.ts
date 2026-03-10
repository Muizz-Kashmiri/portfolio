type Project = {
  title: string;
  description: string;
  gitLink: string;
  prodLink?: string;
  techStack: string[];
  thumb: string;
  details?: string[];
  links?: { label: string; url: string }[];
  images?: string[];
};

export const projects: Project[] = [
  {
    title: 'Primerise',
    description:
      'Custom content system for internal content team using Agentic workflows to automate content creation, resulting in 80% faster content production.',
    gitLink: 'https://github.com/Muizz-Kashmiri',
    techStack: [
      'Python',
      'LangChain',
      'Django',
      'Azure',
      'Agentic AI',
    ],
    thumb: '/images/projects-logo/primerise.svg',
    details: [
      'Designed multi-agent pipeline orchestrating content generation',
      'Integrated LangChain agents with Django REST backend',
      'Deployed on Azure with auto-scaling',
      'Reduced content production time by 80%',
      'Built admin dashboard for workflow monitoring',
    ],
  },
  {
    title: 'AWS Cloud Labs',
    description:
      'Developed 10 cloud-based labs for deploying microservices on AWS with MLOps pipelines using SageMaker and Terraform.',
    gitLink: 'https://github.com/Muizz-Kashmiri',
    techStack: [
      'AWS',
      'Terraform',
      'SageMaker',
      'Docker',
      'Python',
    ],
    thumb: '/images/projects-logo/educative.png',
    details: [
      'Architected 10 hands-on labs for AWS microservices',
      'Built MLOps pipelines with SageMaker for model training/deployment',
      'Automated infrastructure with Terraform modules',
      'Containerized lab environments with Docker',
      'Wrote step-by-step technical guides',
    ],
  },
  {
    title: 'Gift University LMS',
    description:
      'Revamped the Gift University website and built a mobile Learning Management System, resulting in a 35% surge in user activity.',
    gitLink: 'https://github.com/Muizz-Kashmiri',
    techStack: [
      'Flutter',
      'Dart',
      'Firebase',
      'REST API',
    ],
    thumb: '/images/projects-logo/gift-university.png',
    details: [
      'Redesigned university website from scratch',
      'Built cross-platform mobile LMS in Flutter',
      'Integrated Firebase for real-time notifications',
      'Achieved 35% increase in user engagement',
      'Implemented offline-first architecture',
    ],
  },
  {
    title: 'The Leather Point CMS',
    description:
      'Custom Content Management System enabling seamless management of products, promotions, and marketing content across 20+ retail shops in Pakistan.',
    gitLink: 'https://github.com/Muizz-Kashmiri',
    techStack: [
      'Flutter',
      'Dart',
      'Firebase',
      'CMS',
    ],
    thumb: '/images/projects-logo/leather-point.png',
    details: [
      'Built custom CMS managing products across 20+ retail outlets',
      'Real-time inventory sync with Firebase',
      'Role-based access for store managers',
      'Automated promotional content scheduling',
      'Responsive Flutter web + mobile app',
    ],
  },
  {
    title: 'PdfGPT',
    description:
      'Fine-tuned the Mistral 7B model to empower users to upload documents and receive precise answers based on the document content.',
    gitLink: 'https://github.com/Muizz-Kashmiri',
    techStack: [
      'Python',
      'PyTorch',
      'LangChain',
      'Mistral 7B',
      'RAG',
    ],
    thumb: '/images/projects-logo/pdfgpt.svg',
    details: [
      'Fine-tuned Mistral 7B with custom dataset for document QA',
      'Built RAG pipeline with LangChain for context retrieval',
      'Implemented chunking strategies for large PDFs',
      'Created clean chat UI for document interaction',
      'Optimized inference for low-latency responses',
    ],
  },
];
