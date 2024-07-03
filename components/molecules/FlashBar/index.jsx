import {
  chakra,
  Stack,
  Flex,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icon

const data = {
  heading: 'Rainbow',
  subHeading: 'Baby boutique',

  image:
    'https://imgtr.ee/images/2024/02/18/81cd170e997a22e4e8168cf472b949be.jpeg',
};

export const FlashBar = () => {
  return (
    <Container maxW="1880px" my={{ base: 5, md: 10 }} padding={0}>
      <Flex
        boxShadow={useColorModeValue(
          '0 4px 6px rgba(160, 174, 192, 0.6)',
          '0 4px 6px rgba(9, 17, 28, 0.9)'
        )}
        backgroundSize="cover"
        backgroundImage={`url(${data.image})`}
        p={{ base: 4, sm: 8 }}
        rounded="lg"
        h={{ base: 64, md: 80 }}
      >
        <Stack direction="column" spacing={5} textAlign="left" flexGrow={3}>
          <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
            {data.heading}
          </chakra.h1>
          <chakra.h1 fontSize="xl" lineHeight={1.2} fontWeight="bold">
            {data.subHeading}
          </chakra.h1>
        </Stack>
      </Flex>
    </Container>
  );
};

export default FlashBar;
