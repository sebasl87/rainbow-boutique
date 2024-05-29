import { ButtonCustomIcon, IconCart } from "../../atoms";

import { useAtom } from "jotai";
import { productsInCart } from "../../../jotai/atoms";
import { DeleteIcon } from "@chakra-ui/icons";

export const ProductCartButton = ({ productId, size, color }) => {
  const [products, setProductsInCart] = useAtom(productsInCart);
  const addToCart = () => {
    const updatedProducts = [...products, { productId, size, color }];
    setProductsInCart(updatedProducts);
  };
  const removeFromCart = () => {
    const updatedProducts = products.filter(
      (product) =>
        product.productId !== productId ||
        product.size !== size ||
        product.color !== color
    );
    setProductsInCart(updatedProducts);
  };


  const isInCart = products.some(
    (product) =>
      product.productId === productId &&
      product.size === size &&
      product.color === color
  );

  return (
    <>
      {isInCart ? (
        <ButtonCustomIcon
          buttonText="Quitar"
          iconLeft={<DeleteIcon />}
          handleClick={removeFromCart}
        />
      ) : (
        <ButtonCustomIcon
          buttonText="Agregar"
          iconLeft={<IconCart />}
          handleClick={addToCart}
        />
      )}
    </>
  );
};

export default ProductCartButton;
