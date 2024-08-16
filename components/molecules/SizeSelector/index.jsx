import { Box, Button, Text } from '@chakra-ui/react';

const sizes = ['T0', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6'];

const SizeSelector = ({
  availableSizes,
  selectedSize,
  setSelectedSize,
  showTitle = true,
}) => {
  console.log(availableSizes);
  return (
    <>
      {showTitle && (
        <Box display="flex" mt={3} alignItems="center">
          <Text
            fontFamily="Nunito"
            fontSize={{ base: 14, md: 16, lg: 20 }}
            fontWeight={600}
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
            fontWeight={600}
            backgroundColor={!availableSizes.includes(size) && '#F7F7F7' }
            cursor={!availableSizes.includes(size) && 'not-allowed'}
          >
            <Text fontFamily="Nunito" fontSize={{ base: 12, md: 16 }}>
              {size}
            </Text>
          </Button>
        ))}
      </Box>
    </>
  );
};

export default SizeSelector;
