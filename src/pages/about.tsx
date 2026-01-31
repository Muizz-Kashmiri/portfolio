import { useEffect } from 'react';

import { Layout } from '@/components/layout';
import { useNavContext } from '@/providers/nav-provider';
import { MyTimeline } from '@/ui/my-timeline';

const AboutPage = () => {
  const { setIsNavOpen } = useNavContext();

  useEffect(() => {
    setIsNavOpen(true);
  });

  return (
    <main className="px-4 pt-5 sm:pt-0">
      <p className="text-xl font-semibold">About me</p>

      <div className="mt-10">
        <p className="mb-5">Hey, I&apos;m Muizz 👋</p>

        <p className="mb-5">
          I&apos;m a{' '}
          <span className="underline decoration-rose-100 decoration-wavy">
            Senior Software Engineer (ML/AI)
          </span>{' '}
          from Pakistan with 5+ years of experience, currently
          working at Prodago where I build Agentic workflows, RAG systems and
          manage backend architectures on Django and Azure.
        </p>
      </div>

      <div className="my-10 border-b border-rose-100/20" />

      <div>
        <p className="mb-5">
          I hold a Master&apos;s in Computer Science (Data
          Science) from UET Lahore and a Bachelor&apos;s in IT
          from University of Punjab. My work spans across{' '}
          <span className="underline decoration-rose-100 decoration-wavy">
            ML/AI, cloud infrastructure, and mobile development
          </span>
          .
        </p>

        <p className="mb-5">
          I&apos;ve worked with LLMs extensively from
          implementing RLHF and supervised fine-tuning at
          Turing, to building cloud-based MLOps pipelines at
          Educative using AWS SageMaker and Terraform. Before
          that, I spent over two years building Flutter apps and
          CMS platforms at NativeSol.
        </p>

        <p className="mb-5">
          My current toolkit includes Python, Django, LangChain,
          TensorFlow, PyTorch, AWS, Azure, Docker, and
          Kubernetes. I also enjoy writing technical articles and
          conducting workshops on Flutter development.
        </p>

        <p>
          Outside of work, I enjoy reading philosophical
          literature, playing chess, and working out regularly.
        </p>
      </div>

      <div className="my-10 border-b border-rose-100/20" />

      <MyTimeline />
    </main>
  );
};

AboutPage.getLayout = (page: React.ReactElement) => (
  <Layout>{page}</Layout>
);

export default AboutPage;
