import {
  Stack,
  HStack,
  Link,
  Image,
  IconButton,
  Text,
  Box,
} from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { BsTelephone } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaRegEnvelope } from 'react-icons/fa6';
import { LuArrowRightToLine } from 'react-icons/lu';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';

const accounts = [
  {
    url: 'https://www.instagram.com/rainbowboutique2023/',
    label: 'Instagram',
    icon: <FaInstagram />,
  },
  {
    url: 'https://www.instagram.com/rainbowboutique2023/',
    label: 'TikTok',
    icon: <FaTiktok />,
  },
];

const ctcs = [
  {
    dato: 'rainbowboutique.2023@gmail.com',
    icon: <FaRegEnvelope />,
  },
  {
    dato: '11-2252-2174',
    icon: <BsTelephone />,
  },
  {
    dato: 'Botón de arrepentimiento',
    icon: <LuArrowRightToLine />,
  },
  {
    dato: 'Política de cambios',
    icon: <MdOutlinePublishedWithChanges />,
  },
];
export const Footer = () => {
  const router = useRouter();

  return (
    <Box
      display="flex"
      bg="rainbowGreenLight"
      flexDirection={{ base: 'column', md: 'row' }}
      style={{
        bottom: '0',
        left: '0',
        width: '99vw',
      }}
      color="rainbowGray"
      boxShadow="0 -4px 8px -2px rgba(0, 0, 0, 0.3)"
    >
      <Stack
        maxW="1200px"
        width="100%"
        marginInline="auto"
        py={4}
        px={{base: 2, lg: 0}}
        spacing={{ base: 3, md: 0 }}
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack
          direction="column"
          pt={{ base: 4, md: 0 }}
          alignItems="center"
          gap={0}
          order={{base: 2, md: 1}}
        >
          <Text fontSize={24} fontFamily="RainbowRegular" color="rainbowGray">
            Seguinos
          </Text>
          <Box>
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
                color="rainbowGray"
              />
            ))}
          </Box>
        </Stack>
        <Stack
          direction="column"
          pt={{ base: 4, md: 0 }}
          alignItems="center"
          gap={0}
          order={{base: 1, md: 2}}
        >
          <Image
            data-testid="logoImage"
            src="/ArcoLogo.png"
            alt="logo"
            w={20}
            onClick={() => router.push('/')}
            cursor="pointer"
          />
          <Text
            as="b"
            fontSize={16}
            fontFamily="RainbowRegular"
            color="rainbowGray"
            bold
          >
            Vistiendo momentos
          </Text>
        </Stack>
        <HStack

          alignItems="center"
          d={{ base: 'none', md: 'flex' }}
          flexDirection="column"
          order={3}
        >
          {ctcs.map((ctc, index) => (
            <Box key={index} display="flex" alignItems="center" w='100%'>
              {ctc.icon}
              <Text
                ml={2}
                key={index}
                fontSize={16}
                cursor="pointer"
                fontFamily="RainbowRegular"
                _hover={{ color: '#7A7C7B' }}
                onClick={() => router.push('/')}
              >
                {ctc.dato}
              </Text>
            </Box>
          ))}
        </HStack>
      </Stack>
    </Box>
    


  );
};

export default Footer;
