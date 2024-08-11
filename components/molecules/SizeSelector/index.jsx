import { Box, Button, Text } from '@chakra-ui/react';

const SizeSelector = ({
  sizes,
  selectedSize,
  setSelectedSize,
  showTitle = true,
}) => {
  return (
    <>
      {showTitle && (
        <Box display="flex" mt={2} alignItems="center">
          <Text
            fontFamily="rainbowRegular"
            fontSize={{ base: 16, md: 24, lg: 28 }}
          >
            Talles disponibles:
          </Text>
          <Box
            color="#718096"
            fontSize={{ base: 10, md: 14 }}
            cursor="pointer"
            pt={{ md: '2px' }}
            ml={2}
            _hover={{ textDecoration: 'underline' }}
            onClick={() => console.log('ver tabla de talles')}
          >
            {'(Ver tabla de talles)'}
          </Box>
        </Box>
      )}

      <Box ml={-2}>
        {sizes.map((size) => (
          <Button
            key={size}
            width={{ base: '24px', md: '48px' }}
            height={{ base: '24px', md: '48px' }}
            variant={selectedSize === size ? 'solid' : 'outline'}
            onClick={() => setSelectedSize(size)}
            _focus={{ outline: 'none' }}
            _hover={{ borderColor: '#777978' }}
            margin={2}
            color="#777978"
          >
            <Text fontFamily="rainbowBold" fontSize={{ base: 12, md: 16 }}>
              {size}
            </Text>
          </Button>
        ))}
      </Box>
    </>
  );
};

export default SizeSelector;
