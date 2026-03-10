import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';

import { Link } from '@/components/link';
import { projects } from '@/data/projects';

import { DetailModal } from './detail-modal';

type ProjectItem = (typeof projects)[0];

export const ThingsIveBuilt = () => {
  const [selected, setSelected] =
    useState<ProjectItem | null>(null);

  return (
    <section className="mt-10 px-4">
      <p className="text-xl">
        Things I&apos;ve built
      </p>

      <div className="mt-5 grid grid-cols-1 gap-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      <DetailModal
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        image={selected?.thumb}
        title={selected?.title ?? ''}
        subtitle={selected?.description}
        details={selected?.details}
        tags={selected?.techStack}
        variant="project"
        links={selected?.links}
        images={selected?.images}
      />
    </section>
  );
};

type ProjectCardProps = ProjectItem & {
  onClick: () => void;
};

const ProjectCard = ({
  title,
  description,
  prodLink,
  techStack,
  thumb,
  onClick,
}: ProjectCardProps) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className={clsx(
        'relative cursor-pointer rounded-lg border-[1px] border-none bg-white/5 p-4',
        'transition-all duration-500 ease-out',
        'hover:bg-white/10'
      )}
    >
      <div className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <p className="group flex w-fit items-center gap-2 text-lg font-semibold">
            <Image
              src={thumb}
              alt={`${title} logo`}
              width="32"
              height="32"
              className="rounded-md"
            />
            <span>{title}</span>
          </p>

          {prodLink && (
            <Link
              href={prodLink}
              external
              rightIcon={
                <FiExternalLink size={22} />
              }
              size="sm"
              className="z-10"
              onClick={(e: React.MouseEvent) =>
                e.stopPropagation()
              }
            >
              Visit
            </Link>
          )}
        </div>
        <p className="text-base">{description}</p>

        <div className="flex flex-wrap items-center">
          {techStack.map((tech) => (
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
  );
};
