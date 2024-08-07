import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Image } from '@chakra-ui/react';
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
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box
      width={{ base: '100%', md: 312, lg: 532 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="#fff"
      p={4}
    >
      <Box
        position="relative"
        width="100%"
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
          <IconButton
            aria-label="Previous Image"
            icon={<IoChevronBackCircleOutline size={48} color="#EBBEB3" />}
            onClick={handlePrevImage}
            variant="outline"
            border="none"
            backgroundColor="#fff"
            borderRadius="50%"
            height="auto"
            _active={{ background: 'transparent' }}
            _focus={{ border: 'none', outline: 'none', boxShadow: 'none' }}
          />
          <IconButton
            aria-label="Next Image"
            icon={<IoChevronForwardCircleOutline size={48} color="#EBBEB3" />}
            onClick={handleNextImage}
            variant="outline"
            border="none"
            backgroundColor="#fff"
            borderRadius="50%"
            height="auto"
            _active={{ background: 'transparent' }}
            _focus={{ border: 'none', outline: 'none', boxShadow: 'none' }}
          />
        </Flex>
      </Box>
      <Flex justifyContent="center" mt={{ base: 2, md: 4 }}>
        {images.map((image, index) => (
          <Box
            key={image.url}
            w={{ base: 24, md: 48, lg: 120 }}
            h={{ base: 32, md: 52, lg: 132 }}
            bg="#fff"
            mx={2}
            borderWidth={1}
            borderRadius={4}
            borderColor={
              currentImageIndex === index ? '#777978' : 'transparent'
            }
            cursor="pointer"
            onClick={() => setCurrentImageIndex(index)}
          >
            <Image
              src={image.url}
              alt={`Thumbnail ${index}`}
              w="100%"
              h="100%"
              objectFit="contain"
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default ProductSlider;
