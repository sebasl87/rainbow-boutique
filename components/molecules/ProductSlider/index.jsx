import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Image, Button } from '@chakra-ui/react';
import { useState } from 'react';
import DiscountChip from '../../atoms/DiscountChip';
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from 'react-icons/io5';

const ProductSlider = ({ images, isDiscount = true, discount = 20 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <Box
      width={{ base: '100%', md: 312, lg: 428 }}
      height={{ base: '100%', md: 418, lg: 574 }}
      objectFit="cover"
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="#fff"
      p={4}
    >
      <Box
        position="relative"
        width={{ base: '100%', md: 312, lg: 428 }}
        height={{ base: 'auto', md: '418px', lg: '574px' }}
        justifyContent="center"
        display="flex"
        p={4}
      >
        {isDiscount && (
          <Box position="absolute" width="100%" left={0}>
            <DiscountChip discount={discount} productCard />
          </Box>
        )}
        <Image
          src={images[currentImageIndex].url}
          alt={`Product Image ${currentImageIndex}`}
          width="100%"
          height="100%"
          objectFit="contain"
          bg="#fff"
          borderRadius={16}
        />
        <Flex
          position="absolute"
          top="45%"
          left={0}
          right={0}
          justifyContent="space-between"
        >
          <Button
            onClick={handlePrevImage}
            background="transparent"
            border="none"
            outline="none"
            boxShadow="none"
            padding="4px"
            zIndex={2}
            sx={{
              '&:hover': {
                background: 'transparent',
                border: 'none',
                outline: 'none',
              },
              '&:active': {
                background: 'transparent',
                border: 'none',
                outline: 'none',
              },
              '&:focus': { boxShadow: 'none', border: 'none', outline: 'none' },
              '&:focus-visible': {
                boxShadow: 'none',
                border: 'none',
                outline: 'none',
              },
              '&::before': {
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
              },
            }}
          >
            {' '}
            <Image src={'/left.png'} width="40px" alt="" />
          </Button>
          <Button
            onClick={handleNextImage}
            background="transparent"
            border="none"
            outline="none"
            boxShadow="none"
            padding="4px"
            zIndex={2}
            sx={{
              '&:hover': {
                background: 'transparent',
                border: 'none',
                outline: 'none',
              },
              '&:active': {
                background: 'transparent',
                border: 'none',
                outline: 'none',
              },
              '&:focus': { boxShadow: 'none', border: 'none', outline: 'none' },
              '&:focus-visible': {
                boxShadow: 'none',
                border: 'none',
                outline: 'none',
              },
              '&::before': {
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
              },
            }}
          >
            {' '}
            <Image src={'/right.png'} width="40px" alt="" />
          </Button>
        </Flex>
      </Box>
      <Flex
        justifyContent="center"
        mt={{ base: 2, md: 4 }}
        width={{ base: '100%', md: 312, lg: 428 }}
      >
        {images.map((image, index) => (
          <Box
            key={image.url}
            w={{ base: 24, md: 48, lg: 120 }}
            h={{ base: 32, md: '96px', lg: 132 }}
            bg="#fff"
            mx={2}
            borderWidth={1}
            borderRadius={4}
            borderColor={
              currentImageIndex === index ? '#718096' : 'transparent'
            }
            cursor="pointer"
            onClick={() => setCurrentImageIndex(index)}
          >
            <Image
              src={image.url}
              alt={`Thumbnail ${index}`}
              w="100%"
              h="100%"
              objectFit="cover"
              borderRadius={4}
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ProductSlider;
