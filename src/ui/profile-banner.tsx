import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { FaBrain, FaChess } from 'react-icons/fa';
import { GoBook } from 'react-icons/go';
import { GrLinkedinOption } from 'react-icons/gr';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { useIntersection } from 'react-use';

import { Link } from '@/components/link';
import { useNavContext } from '@/providers/nav-provider';

import { ProfileImage } from '../components/profile-image';

export const ProfileBanner = () => {
  const { setIsNavOpen, isNavOpen } = useNavContext();
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '-150px',
  });

  useEffect(() => {
    if (intersection && setIsNavOpen) {
      setIsNavOpen(!intersection.isIntersecting);
    }
  }, [intersection, setIsNavOpen]);

  return (
    <div
      className={clsx(
        'flex flex-col items-start text-xl transition duration-300',
        {
          'opacity-0': isNavOpen,
          'opacity-100': !isNavOpen,
        }
      )}
      ref={intersectionRef}
    >
      <div className="flex flex-col gap-4 px-4">
        <div
          className={clsx(
            'flex w-full flex-col-reverse items-start justify-between gap-7 pb-5 ',
            'sm:flex-row sm:gap-0'
          )}
        >
          <div className="flex items-center space-x-4">
            <ProfileImage />
            <h1 className="flex flex-col gap-1">
              <span className="text-3xl font-bold">
                Muizz Elahi Butt
              </span>
              <code className="font-mono text-base font-medium">
                @Muizz-Kashmiri
              </code>
            </h1>
          </div>

          <div
            className={clsx(
              'flex items-center space-x-3 self-end text-sm font-bold',
              'sm:-mt-16 sm:self-auto'
            )}
          >
            <Link
              href="/about"
              leftIcon={<HiOutlineDocumentText />}
              size="sm"
            >
              <span className="transition-all duration-300 ease-out group-hover:text-rose-200">
                About
              </span>
            </Link>

            <Link
              href="/guestbook"
              leftIcon={<GoBook />}
              size="sm"
            >
              <span className="transition-all duration-300 ease-out group-hover:text-rose-200">
                Guestbook
              </span>
            </Link>

            <Link
              href="https://github.com/Muizz-Kashmiri"
              external
              leftIcon={<AiFillGithub />}
              variant="icon-button"
            />

            <Link
              href="https://www.linkedin.com/in/muizzbutt79/"
              external
              leftIcon={<GrLinkedinOption />}
              variant="icon-button"
            />
          </div>
        </div>

        <p className="text-base">
          ML/AI Engineer building intelligent systems with
          Python, LLMs, and cloud technologies. Passionate
          about RAG systems, MLOps, and scalable architectures.
        </p>
        <p className="text-base">
          Currently working with LangChain, Django, and AWS.
          Experienced in Flutter and full-stack development.
        </p>

        <div
          className={clsx(
            'flex flex-row flex-wrap items-center justify-start gap-5 border-y-[1px] border-gray-600/20',
            'w-full py-3 text-sm font-semibold text-neutral-400/80',
            'sm:justify-between sm:gap-3'
          )}
        >
          <div className="flex items-center gap-1">
            <FaBrain size={16} className="fill-rose-100/50" />
            <span>Sr. SWE (ML/AI) @ Prodago</span>
          </div>

          <div className="flex items-center gap-1">
            <BiMap size={16} color="fill-rose-100/50" />
            <span>Gujranwala, Pakistan</span>
          </div>

          <div className="flex items-center gap-1">
            <FaChess size={16} color="fill-rose-100/50" />
            <span>Chess Enthusiast</span>
          </div>
        </div>
      </div>
    </div>
  );
};
