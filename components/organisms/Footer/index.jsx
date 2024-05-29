import {
  Stack,
  HStack,
  Link,
  Image,
  IconButton,
  Text,
  Box,
} from '@chakra-ui/react';

import { FaInstagram } from 'react-icons/fa';
import { useRouter } from 'next/router';

const links = ['Escribinos'];
const accounts = [
  {
    url: 'https://www.instagram.com/rainbowboutique2023/',
    label: 'Instagram',

    icon: <FaInstagram />,
  },
];

export const Footer = () => {
  const router = useRouter();

  return (
    <Box
      display="flex"
      borderTop="8px solid #BFCEC9"
      bg="snow"
      flexDirection="row"
      style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
      }}
    >
      <Stack
        maxW="1200px"
        width="100%"
        marginInline="auto"
        py={8}
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: 'row', md: 'row' }}
      >
        <Image
          data-testid="logoImage"
          src="/RainbowLogo.png"
          alt="logo"
          w={20}
          onClick={() => router.push('/')}
          cursor="pointer"
        />

        <HStack
          spacing={4}
          alignItems="center"
          d={{ base: 'none', md: 'flex' }}
        >
          {links.map((link, index) => (
            <Text
              key={index}
              fontSize={16}
              cursor="pointer"
              fontFamily="RainbowRegular"
              _hover={{ color: '#7A7C7B' }}
              onClick={() => router.push('/')}
            >
              {link}
            </Text>
          ))}
        </HStack>

        <Stack
          direction="row"
          spacing={5}
          pt={{ base: 4, md: 0 }}
          alignItems="center"
        >
          {accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              colorScheme={sc.type}
              icon={sc.icon}
              rounded="md"
              _hover={{ color: '#7A7C7B' }}
              fontSize="24px"
              background="transparent"
              color="1a202c"
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
