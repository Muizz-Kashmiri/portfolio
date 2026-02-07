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
  },
];
