import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Card from '@/components/layout/card';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  logoAlt,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
}: ExperienceDetailsProps) => {
  return (
    <Card className="glowing-border mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-12 md:gap-8">
      <div className="flex w-full flex-row justify-between">
        <div className="max-md:order-1 md:w-1/4">
          <ImageWrapper
            src={logo}
            srcForDarkMode={darkModeLogo}
            alt={logoAlt}
            className="max-w-[120px]"
          />
        </div>

        <div className="max-md:order-2 md:w-1/4">
          <Typography className="text-gray-700 md:text-right">
            {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
              startDate
            )}{' '}
            -{' '}
            {currentlyWorkHere
              ? 'Present'
              : endDate
              ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
                  endDate
                )
              : 'NA'}
          </Typography>
        </div>
      </div>

      {/* <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4"> */}
      <div className="flex flex-col gap-4 md:gap-3 max-md:order-3">
        <Typography variant="subtitle" className="font-semibold text-gray-900">
          {position}
        </Typography>
        <ul className="flex list-disc text-justify flex-col gap-2 md:gap-1 ml-4 pl-8">
          {summary?.map((sentence, index) => {
            const formattedSentence = sentence.replace(/<m>/g, '<span class="m">')
                                              .replace(/<\/m>/g, '</span>');
            return(
              <Typography component="li" className="pl-4" key={index}>
                <div dangerouslySetInnerHTML={{ __html: formattedSentence }}/>
              </Typography>
            );
          })}
        </ul>
      </div>
      
    </Card>
  );
};

export default ExperienceDetails;