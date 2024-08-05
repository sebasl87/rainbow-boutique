import { ButtonCustomIcon, IconCart } from '../../atoms';

import { useAtom } from 'jotai';
import { productsInCart } from '../../../jotai/atoms';
import { DeleteIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

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
