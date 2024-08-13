import { CategoryCardSmall } from '@/components/molecules';
import { Box } from '@chakra-ui/react';

export const CategoriesHeader = () => {
  const categories = [
    {
      cat: 'Newborn',
      bg: '#F8D588',
      sColor: '#fff',
    },
    {
      cat: 'Baby Girl',
      bg: '#EBBEB3',
      sColor: '#fff',
    },
    {
      cat: 'Baby Boy',
      bg: '#AEDBE8',
      sColor: '#fff',
    },
    {
      cat: 'Sale',
      bg: '#D7ECE8',
      sColor: '#D7ECE8',
    },
  ];
  return (
    <Box
      display="grid"
      width="100%"
      gridTemplateColumns="repeat(auto-fit, minmax(259px, 1fr))"
      gap={4}
      alignItems="center"
      justifyContent="center"
    >
      {categories.map((category) => (
        <Box
          key={category.cat}
          width="100%"
          display="flex"
          justifyContent="center"
        >
          <CategoryCardSmall
            category={category.cat}
            subtitle={category.sub}
            bgColor={category.bg}
            subColor={category.sColor}
          />
        </Box>
      ))}
    </Box>
  );
};

export default CategoriesHeader;
