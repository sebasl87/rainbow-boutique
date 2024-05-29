import { useMediaQuery } from '@chakra-ui/react';

const breakpoints = {
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1024px)',
};

export const useBreakpoints = () => {
  const [tablet] = useMediaQuery(breakpoints.tablet);
  const [desktop] = useMediaQuery(breakpoints.desktop);

  return {
    tablet,
    desktop,
  };
};

export default useBreakpoints;
