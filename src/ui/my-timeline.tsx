import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import timeline from '@/data/timeline';

import { DetailModal } from './detail-modal';

type TimelineItem = (typeof timeline)[0];

export const MyTimeline = () => {
  const [selected, setSelected] =
    useState<TimelineItem | null>(null);

  return (
    <section className="mt-10 px-4">
      <p className="text-xl">My timeline</p>

      <div className="mt-5 grid grid-cols-1 gap-2">
        {timeline.map(
          (item: TimelineItem) =>
            item.size === 'main' ? (
              <MainTimelineCard
                key={item.title}
                {...item}
                onClick={() => setSelected(item)}
              />
            ) : (
              <MinimizedTimelineCard
                key={item.title}
                {...item}
              />
            )
        )}
      </div>

      <DetailModal
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        image={selected?.image}
        title={selected?.title ?? ''}
        subtitle={selected?.date}
        details={selected?.details}
        tags={selected?.tags}
        variant={selected?.variant}
      />
    </section>
  );
};

const MainTimelineCard = ({
  image,
  variant,
  date,
  title,
  description,
  tags,
  onClick,
}: {
  variant?: 'work' | 'school';
  image?: string;
  date?: string;
  title?: string;
  description?: string;
  tags?: string[];
  onClick?: () => void;
}) => {
  return (
    <li
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      className={clsx(
        'relative cursor-pointer rounded-lg border-[1px] border-none p-4',
        'transition-all duration-500 ease-out',
        {
          'bg-rose-900/20 hover:bg-rose-900/30':
            variant === 'work',
          'bg-blue-900/20 hover:bg-blue-900/30':
            variant === 'school',
        }
      )}
    >
      <div className="flex w-full flex-col space-y-8">
        <div className="flex items-center justify-between">
          <div className="rounded-full bg-gradient-to-tl from-midnight/10 to-white/10 p-1 shadow-lg">
            <div className="h-11 w-11 rounded-full p-px">
              <Image
                src={image || ''}
                width={44}
                height={44}
                alt="Profile picture"
                className="rounded-full"
              />
            </div>
          </div>

          <span className="text-xs font-semibold uppercase text-rose-200">
            {date}
          </span>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="text-xl font-semibold text-white">
            {title}
          </span>
          <span className="text-sm text-white/60">
            {description}
          </span>

          <div className="flex flex-wrap items-center">
            {tags?.map((tech) => (
              <span
                key={tech}
                className="mr-2 mt-2 inline-block rounded-md border-[1px] border-zinc-700 px-2 py-1 font-mono text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

const MinimizedTimelineCard = ({
  date,
  title,
}: {
  date: string;
  title: string;
}) => {
  return (
    <li
      className={clsx(
        'relative rounded-lg border-[1px] border-none bg-white/5 p-4',
        'transition-all duration-500 ease-out',
        'hover:bg-white/10'
      )}
    >
      <div className="flex w-full flex-col space-y-3">
        <div className="flex items-center justify-between">
          <span>{title}</span>
          <span className="text-xs font-semibold uppercase text-rose-200">
            {date}
          </span>
        </div>
      </div>
    </li>
  );
};
