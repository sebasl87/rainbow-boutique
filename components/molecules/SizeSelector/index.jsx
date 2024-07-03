import { Box, Button } from '@chakra-ui/react';

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
          <Box color="#718096" fontSize={{ base: 12, md: 14 }}>
            Talles disponibles:
          </Box>
          <Box
            color="#718096"
            fontSize={{ base: 10, md: 12 }}
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
            size={{ base: 'xs', md: 'sm' }}
            variant={selectedSize === size ? 'solid' : 'outline'}
            onClick={() => setSelectedSize(size)}
            _focus={{ outline: 'none' }}
            _hover={{ borderColor: '#777978' }}
            margin={2}
            color="#777978"
          >
            {size}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default SizeSelector;
