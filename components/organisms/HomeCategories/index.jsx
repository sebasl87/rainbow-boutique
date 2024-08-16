import { CategoryCard } from '@/components/molecules';
import { Box } from '@chakra-ui/react';

export const HomeCategories = ({ handleOnClick }) => {
  const categories = [
    {
      pre: 'New',
      cat: 'Born',
      id: 'nb',
      bg: '#F8D588',
      sColor: '#fff',
    },
    {
      pre: 'Baby',
      cat: 'Girl',
      id: 'bg',
      bg: '#EBBEB3',
      sColor: '#fff',
    },
    {
      pre: 'Baby',
      cat: 'Boy',
      id: 'bb',
      bg: '#AEDBE8',
      sColor: '#fff',
    },
    {
      pre: '',
      cat: 'Sale',
      id: 'sale',
      bg: '#D7ECE8',
      sColor: '#D7ECE8',
    },
  ];
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-evenly"
      flexWrap="wrap"
      gap={4}
      flexDirection={{ base: 'column', md: 'row' }}
      px={{ base: 0, md: 0 }}
    >
      {categories.map((category) => (
        <Box key={category.cat}>
          <CategoryCard
            category={category.cat}
            subtitle={category.pre}
            bgColor={category.bg}
            subColor={category.sColor}
            handleClick={() => handleOnClick(category.id)}
          />
        </Box>
      ))}
    </Box>
  );
};

export default HomeCategories;
