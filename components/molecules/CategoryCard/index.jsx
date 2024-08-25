import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const borderAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

export const CategoryCard = ({
  category,
  subtitle,
  bgColor,
  subColor,
  handleClick,
}) => {
  return (
    <Box
      onClick={handleClick}
      w={{ base: '100%', md: '259px' }}
      h={{ base: '55px', md: '185px' }}
      background={bgColor}
      borderRadius="8px"
      padding={{ base: '0px', md: '32px 16px 32px 16px' }}
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="center"
      cursor="pointer"
      boxShadow={{
        base: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        md: 'none',
      }}
      position="relative"
      overflow="hidden"
      _hover={{
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '8px',
          border: '4px solid transparent',
          backgroundImage:
            'linear-gradient(90deg, #EBBEB3, #F8D588, #d7ece8, #AEDBE8, #D7ECE8)',
          backgroundSize: '400% 100%',
          animation: `${borderAnimation} 3s linear infinite`,
          transition: 'opacity 1s ease all',
          opacity: 1,
          zIndex: 1,
        },
      }}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: '8px',
        border: '4px solid transparent',
        backgroundImage:
          'linear-gradient(90deg, #EBBEB3, #F8D588, #d7ece8, #AEDBE8, #D7ECE8)',
        backgroundSize: '400% 100%',
        opacity: 0,
        transition: 'opacity 1s ease all',
        zIndex: 1,
      }}
    >
      <Box
        color={subColor}
        fontFamily="Nunito"
        fontWeight="500"
        display={{ base: 'none', md: 'flex' }}
        zIndex={2}
        h="24px"
      >
        {subtitle}
      </Box>
      <Box
        color="#fff"
        fontFamily="Nunito"
        fontWeight="700"
        fontSize={{ base: '38px', md: '96px' }}
        lineHeight={{ md: '105px' }}
        zIndex={2}
      >
        {category}
      </Box>
    </Box>
  );
};

export default CategoryCard;
