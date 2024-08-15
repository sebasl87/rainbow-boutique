import { Footer, Header } from '@/components/organisms';
import { Box } from '@chakra-ui/react';

export const LayoutGral = ({ children }) => {
  return (
    <>
      <Header />
      <Box
        width="100%"
        display="flex"
        m="auto"
        mt={{
          base: '164px',
          md: '154px',
          lg: 32,
        }}
        flexDirection="column"
        alignItems="center"
      >
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          maxW="1250px"
          mb="200px"
        >
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default LayoutGral;
