import { Box, Button } from '@chakra-ui/react';

const ColorSelector = ({
  colors,
  selectedColor,
  setSelectedColor,
  showTitle = true,
}) => {
  return (
    <>
      {showTitle && (
        <Box mt={4} color="#718096" fontSize={{ base: 12, md: 14 }}>
          Colores disponibles:
        </Box>
      )}
      <Box ml={-2}>
        {colors.map((color, index) => (
          <Button
            key={color}
            width={{ base: '15px', md: '20px' }}
            height={{ base: '15px', md: '20px' }}
            minWidth="0"
            minHeight="0"
            padding="0"
            backgroundColor={color}
            borderRadius="50%"
            _hover={{ opacity: 0.5 }}
            border={selectedColor === index ? '2px' : 'none'}
            borderColor="#797B7A"
            _focus={{ outline: 'none' }}
            onClick={() => setSelectedColor(index)}
            margin={2}
          />
        ))}
      </Box>
    </>
  );
};

export default ColorSelector;
