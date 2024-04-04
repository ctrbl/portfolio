import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { mergeClasses } from '@/lib/utils';

const typographyVariants = cva('text-gray-700 text-normal', {
  variants: {
    variant: {
      h1: 'text-4xl font-semibold md:font-semibold md:text-5xl md:tracking-[-0.02em] lg:text-5xl lg:leading-[72px] text-gray-800',
      h2: 'text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-gray-800',
      h3: 'text-2xl md:text-2xl font-medium tracking-[-0.02em] text-gray-800',
      section: 'text-2xl md:text-3xl font-regular tracking-[-0.02em] text-gray-800',
      subtitle: 'text-lg md:text-xl text-gray-700',
      body1: 'text-base md:text-lg text-gray-700',
      body2: 'text-base text-gray-700',
      body3: 'text-sm text-gray-700',
    },
  },
  defaultVariants: {
    variant: 'body2',
  },
});

interface TypographyProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
    VariantProps<typeof typographyVariants> {
  component?: React.ElementType;
}

let elementMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle: 'p',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  section: 'p'
};

type ComponentElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

const Typography = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  TypographyProps
>(
  (
    { component, className = '', variant, children, ...props }: TypographyProps,
    ref
  ) => {
    const Comp = (
      component ? component : variant ? elementMapping[variant] : 'p'
    ) as ComponentElement;

    return (
      <Comp
        className={mergeClasses(typographyVariants({ variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
