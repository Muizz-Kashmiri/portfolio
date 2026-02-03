import { useEffect } from 'react';

import { Layout } from '@/components/layout';
import { useNavContext } from '@/providers/nav-provider';
import { ContactForm } from '@/ui/contact-form';

const ContactPage = () => {
  const { setIsNavOpen } = useNavContext();

  useEffect(() => {
    setIsNavOpen(true);
  });

  return (
    <main className="px-4 pt-5 sm:pt-0">
      <p className="text-xl font-semibold">Get in touch</p>

      <div className="mt-10">
        <p className="mb-5">
          Have a question, proposal, or just want to say hello?
          Fill out the form below and I&apos;ll get back to you
          as soon as possible.
        </p>
      </div>

      <div className="my-10 border-b border-rose-100/20" />

      <ContactForm />
    </main>
  );
};

ContactPage.getLayout = (page: React.ReactElement) => (
  <Layout>{page}</Layout>
);

export default ContactPage;
