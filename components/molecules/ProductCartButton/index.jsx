import { useAtom, useAtomValue } from 'jotai';
import { productsInCart, totalProducts } from '../../../jotai/atoms';

import useModalCart from '@/hooks/useModalCart';
import { Button } from '@chakra-ui/react';


export const ProductCartButton = ({ productId, size, color }) => {
  const [products, setProductsInCart] = useAtom(productsInCart);
  const totalProd = useAtomValue(totalProducts);
  const { onOpen } = useModalCart();

  const addToCart = () => {
    const productFinded = totalProd.find((product) => product.id === productId);
    
    const newProduct = {
      productId,
      size,
      color,
      productPrice: productFinded.price.total,
      productName: productFinded.name,
      productImage: productFinded.photos[0].url,
    };

    const updatedProducts = [...products, newProduct];
    setProductsInCart(updatedProducts);
    onOpen();
  };

  const removeFromCart = () => {
    const updatedProducts = products.filter(
      (product) =>
        product.productId !== productId ||
        product.size !== size ||
        product.color !== color
    );
    setProductsInCart(updatedProducts);
    onOpen();
  };

  const isInCart = products.some(
    (product) =>
      product.id === productId &&
      product.size === size &&
      product.color === color
  );

  return (
    <>
      {isInCart ? (
        <Button
          backgroundColor={'rainbowGreen'}
          onClick={removeFromCart}
          size="md"
          height="48px"
          width="216px"
          color="rainbowGray"
          border={'0'}
          _active={{ border: '0' }}
          _focus={{ outline: 'none' }}
          _hover={{ border: '0' }}
        >
          Quitar
        </Button>
      ) : (
        <Button
          backgroundColor={'rainbowGreen'}
          onClick={addToCart}
          size="md"
          height="48px"
          width="216px"
          color="rainbowGray"
          _active={{ border: '0' }}
          _focus={{ outline: 'none' }}
          _hover={{ border: '0' }}
        >
          Comprar
        </Button>
      )}
    </>
  );
};

export default ProductCartButton;
