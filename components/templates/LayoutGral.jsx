import { Footer, Header } from '@/components/organisms';
import { Box } from '@chakra-ui/react';

export const LayoutGral = ({ children }) => {
  return (
    <>
      <Header />
      <Box
        width="max-content"
        display="flex"
        m="auto"
        mt={{
          base: '134px',
          md: '154px',
          lg: 32,
        }}
      >
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          maxW="1248px"
        >
          {children}
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default LayoutGral;
