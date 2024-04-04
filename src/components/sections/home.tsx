'use client';
import Image from 'next/image';
import { ArrowDownToLine } from 'lucide-react';
import Headshot from '/public/images/chau-headshot.jpg';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import WavingHand from '@/components/general/waving-hand';

import { useSectionInView } from "@/lib/hooks";
import { TypeAnimation } from "react-type-animation";

const HomeSection = () => {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section id="home" ref={ref} className="h-screen">
      <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:py-12">
        {/* Image */}
        <div className="relative h-[30vh] w-[30vh] md:h-[400px] md:w-[400px] overflow-hidden rounded-full">
          <Image
            src={Headshot}
            alt="Headshot of Chau"
            layout="fill"
            objectFit="cover"
            className="absolute z-10"
          />
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col items-center justify-center gap-8 md:order-first md:items-center md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-5 items-center">
            <Typography variant="h3">
              Hello, I&apos;m&nbsp;
            </Typography>
            <Typography variant="h1">
              Chau Nguyen{' '}
              <WavingHand>👋</WavingHand>
            </Typography>
            <Typography variant="h3">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </Typography>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
              </span>
            </div>
            <Typography>Looking for Entry-level | Internship | Co-op SWE positions</Typography>
          </div>

          <div className="flex flex-row gap-5">
            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              href="#contact"
            >
              <Typography>Contact Info</Typography>
            </a>

            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              href="/files/ChauNguyen_Resume.pdf"
              download
              onClick={() => window?.open('/files/ChauNguyen_Resume.pdf', '_blank')}
            >
              <Typography>Resume{" "}</Typography>
              <ArrowDownToLine className="opacity-60 transition" style={{ width: '16px', height: '16px' }}/>
              
            </a>
          </div>
          
          <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
