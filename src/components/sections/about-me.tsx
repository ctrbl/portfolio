'use client';
import Image from 'next/image';

import ChauFullShot from '/public/images/chau-full-shot.jpg';
import Tag from '@/components/data-display/tag';
import Card from '@/components/layout/card'; 
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';
import { useSectionInView } from "@/lib/hooks";
import SectionDivider from '../general/section-divider';

const AboutMeSection = () => {
  const { ref } = useSectionInView("About", 0.4);

  return (
    <Container id="about" ref={ref} className="w-screen bg-translucent">
      <div className="flex flex-col items-center gap-12 md:py-12" >
        <div className="flex flex-col items-center gap-2">
          <Typography variant="body3">Get to know</Typography>
          <Typography variant="section">About Me</Typography>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-12 gap-20 md:flex-row">
          {/* Image */}
          <div className="relative h-[30vh] w-[30vh] md:h-[360px] md:w-[360px] overflow-hidden rounded-[25px]">
            <Image
              src={ChauFullShot}
              alt="Fullshot of Chau"
              // className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              className="absolute z-10"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>

          {/* Content */}
          <div className="flex flex-col w-full max-w-xl gap-6">
            <Typography>
              Graduated with a B.S. in Computer Science in December 2023 🎓, 
              I&apos;m currently a graduate student pursuing a {" "}
              <span className="font-medium">M.S. in Computer Science </span> 
              specializing in {" "}
              <span className="font-medium">Machine Learning </span>at USF. I will soon be transferring to the {" "}
              <Link
                className="font-medium"
                externalLink
                href={EXTERNAL_LINKS.GATECH}
              >
                OMSCS program at Georgia Tech
              </Link>{' '}
              in Fall 2024. With this flexibility, I&apos;m currently looking for a {" "}
              <span className="font-medium">full-time entry-level SWE position 👩🏻‍💻 </span>. 
            </Typography>
            <Typography>
              Throughout my academic journey, undergraduate research assistance, internship, and hackathons participation,
              I have gained robust expertise in {" "}
              <span className="font-medium">full-stack software development ✨ </span>
              utilizing modern technologies like {" "}
              <span className="italic">MERN stack, Angular, Next.js, TypeScript, MySQL, AWS, Swift, and more. </span>
            </Typography>
            <Typography>
              Driven by a passion for AI/ML, I aspire to become a software engineer that {" "}
              <span className="font-medium">develops innovative solutions that seamlessly integrate AI technologies into real-world applications</span>
              , enhancing user experience and 
              streamlining everyday life. 
            </Typography>
          </div>
        </div>

        {/* <SectionDivider></SectionDivider> */}

        {/* <Typography variant="section">Highlights</Typography>
        <Card className="glowing-border">Hello</Card> */}
      </div>
    </Container>
  );
};

export default AboutMeSection;
