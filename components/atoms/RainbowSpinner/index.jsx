import { Box } from '@chakra-ui/react';

export const RainbowSpinner = () => {
  return (
    <>
      <Box
        display="flex"
        width="100%"
        flexDirection="column"
        alignItems="center"
        position="relative"
        mt={{ base: 40, md: '250px' }}
        mb={{ md: '200px' }}
      >
        <div class="container">
          <div class="rainbow-color rainbow-color-1"></div>
          <div class="rainbow-color rainbow-color-2"></div>
          <div class="rainbow-color rainbow-color-3"></div>
          <div class="rainbow-color rainbow-color-4"></div>
          <div class="rainbow-color rainbow-color-5"></div>
          <div class="rainbow-color rainbow-color-6"></div>
          <div class="rainbow-color rainbow-color-7"></div>
        </div>
        <Box
          zIndex={1}
          fontFamily="Nunito"
          fontSize="20px"
          fontWeight={600}
          color="#797b7a"
          position="absolute"
          top="100%"
          mt="10px"
        >
          Cargando...
        </Box>
      </Box>
    </>
  );
};

export default RainbowSpinner;
