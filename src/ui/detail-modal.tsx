import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import { Fragment } from 'react';
import { FiExternalLink, FiX } from 'react-icons/fi';

type DetailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  image?: string;
  title: string;
  subtitle?: string;
  details?: string[];
  tags?: string[];
  variant?: 'work' | 'school' | 'project';
  links?: { label: string; url: string }[];
  images?: string[];
};

export const DetailModal = ({
  isOpen,
  onClose,
  image,
  title,
  subtitle,
  details,
  tags,
  variant = 'project',
  links,
  images,
}: DetailModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="transition duration-200 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="transition duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition duration-150 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md overflow-hidden rounded-2xl bg-gray-900/95 shadow-xl backdrop-blur">
                <div
                  className={clsx(
                    'h-1',
                    {
                      'bg-rose-500':
                        variant === 'work',
                      'bg-blue-500':
                        variant === 'school',
                      'bg-white/20':
                        variant === 'project',
                    }
                  )}
                />

                <div className="relative p-6">
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 rounded-full p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <FiX size={20} />
                  </button>

                  <div className="flex items-center gap-3">
                    {image && (
                      <div className="rounded-full bg-gradient-to-tl from-midnight/10 to-white/10 p-1 shadow-lg">
                        <Image
                          src={image}
                          width={44}
                          height={44}
                          alt={title}
                          className="rounded-full"
                        />
                      </div>
                    )}
                    <div className="pr-6">
                      <Dialog.Title className="text-lg font-semibold text-white">
                        {title}
                      </Dialog.Title>
                      {subtitle && (
                        <p className="mt-1 text-sm text-white/60">
                          {subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {details && details.length > 0 && (
                    <ul className="mt-5 space-y-2">
                      {details.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-white/80"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {links && links.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 transition-colors hover:bg-white/20"
                        >
                          {link.label}
                          <FiExternalLink
                            size={12}
                          />
                        </a>
                      ))}
                    </div>
                  )}

                  {images && images.length > 0 && (
                    <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
                      {images.map((src) => (
                        <Image
                          key={src}
                          src={src}
                          width={200}
                          height={120}
                          alt=""
                          className="flex-shrink-0 rounded-lg"
                        />
                      ))}
                    </div>
                  )}

                  {tags && tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap items-center">
                      {tags.map((tech) => (
                        <span
                          key={tech}
                          className="mr-2 mt-2 inline-block rounded-md border-[1px] border-zinc-700 px-2 py-1 font-mono text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
