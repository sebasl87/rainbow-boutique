import { useAtom } from "jotai";
import { productsInCart } from "../../../jotai/atoms";

import useModalCart from "@/hooks/useModalCart";
import { Button } from "@chakra-ui/react";

export const ProductCartButton = ({
  productData,
  productPrice,
  productImg,
  productName,
  productColor,
}) => {
  const [products, setProductsInCart] = useAtom(productsInCart);

  const { onOpen } = useModalCart();
  const addToCart = () => {
    const newProduct = {
      productData,
      productPrice,
      productName,
      productImage: productImg,
      productColor,
    };

    const updatedProducts = [...products, newProduct];
    setProductsInCart(updatedProducts);
    onOpen();
  };
  const removeFromCart = () => {
    const updatedProducts = products.filter(
      (product) => product.productData.id !== productData.id, // Filtrar productos que no coincidan con el id
    );
    setProductsInCart(updatedProducts);
    onOpen();
  };

  const isInCart = products?.some(
    (product) => product.productData?.id === productData?.id,
  );

  return (
    <>
      {isInCart ? (
        <Button
          backgroundColor={"rainbowGreen"}
          onClick={removeFromCart}
          size="md"
          height="48px"
          width="216px"
          color="rainbowGray"
          border={"0"}
          _active={{ border: "0" }}
          _focus={{ outline: "none" }}
          _hover={{ border: "0" }}
        >
          Quitar
        </Button>
      ) : (
        <Button
          backgroundColor={"rainbowGreen"}
          onClick={addToCart}
          size="md"
          height="48px"
          width="216px"
          color="rainbowGray"
          _active={{ border: "0" }}
          _focus={{ outline: "none" }}
          _hover={{ border: "0" }}
        >
          Comprar
        </Button>
      )}
    </>
  );
};

export default ProductCartButton;
