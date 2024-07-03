import { useColorModeValue, Container, Image } from '@chakra-ui/react';

export const BannerCart = () => {
  return (
    <Container
      maxW="1880px"
      my={{ base: 5, md: 10 }}
      padding={0}
      boxShadow={useColorModeValue(
        '0 4px 6px rgba(160, 174, 192, 0.6)',
        '0 4px 6px rgba(9, 17, 28, 0.9)'
      )}
      rounded={6}
    >
      <Image
        src={'/carrito.png'}
        alt="carrito"
        h={{ base: 64, md: 80 }}
        w="100%"
        rounded={6}
      />
    </Container>
  );
};

export default BannerCart;
