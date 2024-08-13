import { Categories } from '@/components/Screens';

import { productsList } from '../../jotai/atoms';
import { useSetAtom } from 'jotai';
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../../api/apollo/querys';


export const CategoriesPage = () => {
     const setProductsList = useSetAtom(productsList);
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