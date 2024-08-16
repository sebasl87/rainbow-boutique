import { Categories } from '@/components/Screens';

import { totalProducts } from '../../jotai/atoms';
import { useSetAtom } from 'jotai';
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../../api/apollo/querys';


export const CategoriesPage = () => {
     const setProductsList = useSetAtom(totalProducts);
  const { isLoading } = useQuery(GET_ALL_PRODUCTS, {
    onCompleted: (data) => {
      setProductsList(data.products);
    },
  });
    return (
        <>
            <Categories />
        </>
    )
}


export default CategoriesPage;