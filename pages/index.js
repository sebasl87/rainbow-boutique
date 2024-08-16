import SeoHome from '../Seo/seoHome';
import { totalProducts } from '../jotai/atoms';
import { useSetAtom } from 'jotai';
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../api/apollo/querys';
import { HomeScreen } from '@/components/Screens';

export const Home = () => {
  const setProductsList = useSetAtom(totalProducts);
  const { isLoading } = useQuery(GET_ALL_PRODUCTS, {
    onCompleted: (data) => {
      setProductsList(data.products);
    },
  });

  return (
    <>
      <SeoHome />
      <HomeScreen />
    </>
  );
};

export default Home;
