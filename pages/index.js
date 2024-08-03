import { Box, Image, Spinner } from '@chakra-ui/react';
import CardContainer from '../components/organisms/CardContainer';
import SeoHome from '../Seo/seoHome';
import { productsList } from '../jotai/atoms';
import { useSetAtom } from 'jotai';
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../api/apollo/querys';

export const Home = () => {
  const setProductsList = useSetAtom(productsList);
  const { isLoading } = useQuery(GET_ALL_PRODUCTS, {
    onCompleted: (data) => {
      setProductsList(data.products);
    },
  });

  return (
    <>
      <SeoHome />
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        alignItems="center"
      >
        <Image src={'/banner_rainbow.png'} alt="carrito" h={478} w="100%" />
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : (
          <CardContainer />
        )}
      </Box>
    </>
  );
};

export default Home;
