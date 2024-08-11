import { Box, Button, Text } from '@chakra-ui/react';

const ColorSelector = ({
  colors,
  selectedColor,
  setSelectedColor,
  showTitle = true,
}) => {
  return (
    <>
      {showTitle && (
        <Text
          fontFamily="Nunito"
          fontSize={{ base: 14, md: 16, lg: 20 }}
          fontWeight={600}
        >
          Colores disponibles:
        </Text>
      )}
      <Box ml={-2}>
        {colors.map((color, index) => (
          <Button
            key={color}
            width={{ base: '24px', md: '48px' }}
            height={{ base: '24px', md: '48px' }}
            minWidth="0"
            minHeight="0"
            padding="0"
            backgroundColor={color}
            borderRadius={8}
            _hover={{ opacity: 0.5 }}
            border={selectedColor === index ? '2px' : 'none'}
            borderColor="rainbowGray"
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
