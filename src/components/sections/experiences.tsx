'use client'; 

import { EXPERIENCES } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import {useSectionInView} from '@/lib/hooks';

const ExperienceSection = () => {
  const { ref } = useSectionInView("Experience", 0.5);
  return (
    <Container id="experience" ref={ref} className="w-screen bg-translucent">
      <div className="bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <Tag label="Experience" />
          </div>
          <Typography variant="subtitle" className="max-w-xl text-center">
            Here is a quick summary of my most recent experiences:
          </Typography>
        </div>

        {EXPERIENCES?.map((experience, index) => (
          <ExperienceDetails {...experience} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default ExperienceSection;
