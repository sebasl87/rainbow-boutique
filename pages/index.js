import { RainbowSpinner } from "@/components";
import { HomeScreen } from "@/components/Screens";
import { useQuery } from "@apollo/client";
import { useSetAtom } from "jotai";
import SeoHome from "../Seo/seoHome";
import { GET_ALL_PRODUCTS } from "../api/apollo/querys";
import { totalProducts } from "../jotai/atoms";

export const Home = () => {
  const setProductsList = useSetAtom(totalProducts);
  const { isLoading } = useQuery(GET_ALL_PRODUCTS, {
    onCompleted: (data) => {
      setProductsList(data.products);
    },
  });

  if (isLoading) return <RainbowSpinner />;

  return (
    <>
      <SeoHome />
      <HomeScreen />
    </>
  );
};

export default Home;
