import { Cart, InputSearch } from "@/components/molecules";
import { useBreakpoints } from "@/hooks";

import { Box, Image, Text } from "@chakra-ui/react";
import { useAtomValue, useSetAtom } from "jotai";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { productsInCart, productsList } from "../../../jotai/atoms";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_PRODUCT } from "../../../api/apollo/querys/products";
import { BsEnvelopeArrowUp } from "react-icons/bs";

export const Header = () => {
  const router = useRouter();

  const [searchText, setSearchText] = useState("");

  const { desktop } = useBreakpoints();
  const [getProductsBySearch, { data, loading }] = useLazyQuery(SEARCH_PRODUCT);

  const setProductsList = useSetAtom(productsList);

  const pressEnter = (e) => {
    if (e.key === "Enter") {
      if (searchText.length > 2) {
        getProductsBySearch({ variables: { text: searchText } });
      } else {
        getProductsBySearch({ variables: { text: "" } });
      }
    }
  };

  useEffect(() => {
    if (!loading && data) {
      setProductsList(data.products);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const itemsInCart = useAtomValue(productsInCart);

  return (
    <Box
      display="flex"
      justifyContent="center"
      px={{ lg: 6 }}
      py={{ lg: 5 }}
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      bg="#fff"
      boxShadow="0 4px 8px -2px rgba(0, 0, 0, 0.3)"
    >
      {desktop ? (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          maxW="1200px"
        >
          <Image
            data-testid="logoImage"
            src="/RainbowLogo.png"
            alt="logo"
            w="320px"
            onClick={() => router.push("/")}
            cursor="pointer"
          />
          <Box maxWidth={488} display="flex" width="100%" ml="64px">
            <InputSearch
              placeHolder="¿Qué estas buscando?"
              handleInputChange={(e) => setSearchText(e.target.value)}
              handleOnKeyDown={pressEnter}
              handleClickOnIcon={() =>
                searchText.length > 2 &&
                router.push(`/e-commerce/product-list/${searchText}`)
              }
            />
          </Box>
          <Box display="flex" justifyContent="flex-end" marginLeft="16px">
            <BsEnvelopeArrowUp size={48} color="#797B7A" />
            <Cart
              ml="64px"
              itemsCart={itemsInCart}
              handleClick={() => router.push("/checkout")}
            />
          </Box>
        </Box>
      ) : (
        <Box display="flex" width="100%" flexDirection="column">
          <Box
            height={{ base: "70px", md: "80px" }}
            display="flex"
            justifyContent="space-between"
            px={{ base: 4, md: 6 }}
            alignItems="center"
          >
            <Image
              data-testid="logoImageMobile"
              src="/RainbowLogo.png"
              alt="logoMobile"
              w={{ base: "150px", md: "200px" }}
              onClick={() => router.push("/")}
              cursor="pointer"
            />
            <Cart
              itemsCart={itemsInCart}
              handleClick={() => router.push("/checkout")}
            />
          </Box>
          <Box
            height={{ base: "68px", md: "72px" }}
            display="flex"
            justifyContent="space-between"
            px={{ base: 4, md: 6 }}
            py={{ base: 3, md: 4 }}
          >
            <InputSearch
              placeHolder="Buscar productos"
              handleInputChange={(e) => setSearchText(e.target.value)}
              handleOnKeyDown={pressEnter}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Header;
