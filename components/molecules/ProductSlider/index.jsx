import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
import { useState } from "react";
import DiscountChip from "../../atoms/DiscountChip";

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
      width={{ base: "100%", md: 312, lg: 532 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="#fff"
    >
      <Box
        position="relative"
        width="100%"
        justifyContent="center"
        display="flex"
        height={{ base: 168, md: 367, lg: 548 }}
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
          maxW={{ base: 200, md: 250, lg: 460 }}
          objectFit="contain"
          height={{ base: 168, md: 367, lg: 548 }}
          bg="#fff"
        />
        <Flex
          position="absolute"
          top={{ base: 16, md: "45%" }}
          left={0}
          right={0}
          justifyContent="space-between"
        >
          <IconButton
            aria-label="Previous Image"
            icon={
              <ChevronLeftIcon
                viewBox=" 0 0 18 18"
                color="rgba(0, 38, 119, 1)"
              />
            }
            onClick={handlePrevImage}
            variant="outline"
            border="none"
            _hover={{ padding: 0 }}
            _active={{ background: "transparent" }}
            _focus={{ border: "none", outline: "none", boxShadow: "none" }}
          />
          <IconButton
            aria-label="Next Image"
            icon={
              <ChevronRightIcon
                viewBox=" 0 0 18 18"
                color="rgba(0, 38, 119, 1)"
              />
            }
            onClick={handleNextImage}
            variant="outline"
            _hover={{ padding: 0 }}
            _active={{ background: "transparent" }}
            _focus={{ border: "none", outline: "none", boxShadow: "none" }}
            border="none"
          />
        </Flex>
      </Box>
      <Flex justifyContent="center" mt={{ base: 2, md: 4 }}>
        {images.map((image, index) => (
          <Box
            key={image.url}
            w={{ base: 10, md: 12, lg: 16 }}
            h={{ base: 10, md: 12, lg: 16 }}
            bg="#fff"
            mx={2}
            borderWidth={1}
            borderRadius={4}
            borderColor={
              currentImageIndex === index ? "#777978" : "transparent"
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
