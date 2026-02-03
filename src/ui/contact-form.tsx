import clsx from 'clsx';
import { useState } from 'react';
import { BiMailSend } from 'react-icons/bi';
import { CgSpinner } from 'react-icons/cg';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-green-900/20 p-6 text-center">
        <p className="text-lg font-semibold text-green-400">
          Message sent successfully!
        </p>
        <p className="mt-2 text-sm text-green-400/70">
          I&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className={clsx(
            'mt-4 rounded-md bg-rose-100/20 px-4 py-2 text-sm font-semibold',
            'transition-all duration-300 hover:bg-rose-100/30'
          )}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-semibold text-rose-100/80"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className={clsx(
            'rounded-lg border border-rose-100/20 bg-white/5 px-4 py-3',
            'text-rose-100 placeholder:text-rose-100/40',
            'focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400',
            'transition-all duration-300'
          )}
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-semibold text-rose-100/80"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className={clsx(
            'rounded-lg border border-rose-100/20 bg-white/5 px-4 py-3',
            'text-rose-100 placeholder:text-rose-100/40',
            'focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400',
            'transition-all duration-300'
          )}
          placeholder="your@email.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-rose-100/80"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className={clsx(
            'resize-none rounded-lg border border-rose-100/20 bg-white/5 px-4 py-3',
            'text-rose-100 placeholder:text-rose-100/40',
            'focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400',
            'transition-all duration-300'
          )}
          placeholder="Your message..."
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-400">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className={clsx(
          'mt-2 flex items-center justify-center gap-2 rounded-lg px-6 py-3',
          'bg-rose-100/20 font-semibold text-rose-100',
          'shadow-md transition-all duration-300',
          'hover:bg-rose-100/30 hover:shadow-rose-500/20',
          'disabled:cursor-not-allowed disabled:opacity-50'
        )}
      >
        {status === 'loading' ? (
          <>
            <CgSpinner className="animate-spin" size={20} />
            Sending...
          </>
        ) : (
          <>
            <BiMailSend size={20} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};
