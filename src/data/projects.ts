type Project = {
  title: string;
  description: string;
  gitLink: string;
  prodLink?: string;
  techStack: string[];
  thumb: string;
};

export const projects: Project[] = [
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
    thumb: '/images/projects-logo/placeholder.png',
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
    thumb: '/images/projects-logo/placeholder.png',
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
    thumb: '/images/projects-logo/placeholder.png',
  },
  {
    title: 'RAG Compliance System',
    description:
      'Multiple RAG systems to generate Operational Practices from compliance documents based on the Government of Canada registry, reducing workload by 80%.',
    gitLink: 'https://github.com/Muizz-Kashmiri',
    techStack: [
      'Python',
      'LangChain',
      'Django',
      'Azure',
      'RAG',
    ],
    thumb: '/images/projects-logo/placeholder.png',
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
    thumb: '/images/projects-logo/placeholder.png',
  },
];
