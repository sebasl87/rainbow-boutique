import { CategoryCard } from '@/components/molecules';
import { Box } from '@chakra-ui/react';

export const HomeCategories = () => {
  const categories = [
    {
      sub: 'New',
      cat: 'Born',
      bg: '#F8D588',
      sColor: '#fff',
    },
    {
      sub: 'Baby',
      cat: 'Girls',
      bg: '#EBBEB3',
      sColor: '#fff',
    },
    {
      sub: 'Baby',
      cat: 'Boys',
      bg: '#AEDBE8',
      sColor: '#fff',
    },
    {
      sub: '',
      cat: 'Sale',
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
            subtitle={category.sub}
            bgColor={category.bg}
            subColor={category.sColor}
          />
        </Box>
      ))}
    </Box>
  );
};

export default HomeCategories;
