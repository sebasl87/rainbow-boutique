import {
  ADD_ITEM,
  REMOVE_ITEM,
  SUBSTRACT_ITEM,
} from "@/api/apollo/mutations/products";
import { cartAtom, itemsListInCart } from "@/jotai/atoms";
import { useMutation } from "@apollo/client";
import { useAtom } from "jotai";
import { useEffect } from "react";

const useCart = (sku) => {

  const [cart, setCart] = useAtom(cartAtom);
  const [itemsL, setItemsL] = useAtom(itemsListInCart);
  const quantityInfo = itemsL?.find((item) => item.product.sku === sku);

  const [addItem, { data: addData, loading: addLoading }] = useMutation(
    ADD_ITEM,
    {
      context: {
        headers: {
          Authorization: `Bearer PONER TOKEN AQUI`,
        },
      },
    }
  );

  const [subsItem, { data: subsData, loading: subsLoading }] = useMutation(
    SUBSTRACT_ITEM,
    {
      context: {
        headers: {
          Authorization: `Bearer PONER TOKEN AQUI`,
        },
      },
    }
  );
  const [removeItem, { data: removeData, loading: removeLoading }] =
    useMutation(REMOVE_ITEM, {
      context: {
        headers: {
          Authorization: `Bearer PONER TOKEN AQUI`,
        },
      },
    });

  const isLoading = addLoading || subsLoading || removeLoading;

  useEffect(() => {
    if (addData) {
      setItemsL(addData.addProductsToCart.cart.items);
      setCart((prev) => ({
        ...prev,
        id: prev?.id || "defaultId",
        total_quantity: addData.addProductsToCart.cart.total_quantity,
      }));
    }
  }, [addData]);

  useEffect(() => {
    if (subsData) {
      setItemsL(subsData.updateCartItems.cart.items);
      setCart((prev) => ({
        ...prev,
        id: prev?.id || "defaultId",
        total_quantity: subsData.updateCartItems.cart.total_quantity,
      }));
    }
  }, [subsData]);

  useEffect(() => {
    if (removeData) {
      setItemsL(removeData.removeItemFromCart.cart.items);
      setCart((prev) => ({
        ...prev,
        id: prev?.id || "defaultId",
        total_quantity: removeData.removeItemFromCart.cart.total_quantity,
      }));
    }
  }, [removeData]);

  const getUidBySku = (sku) => {
    const product = itemsL?.find((item) => item.product.sku === sku);
    return product ? product.uid : null;
  };

  const handleSubstractItem = (sku) => {
    if (quantityInfo && quantityInfo.quantity > 1) {
      subsItem({
        variables: {
          input: {
            cart_id: cart?.id,
            cart_items: [
              {
                cart_item_uid: getUidBySku(sku),
                quantity: quantityInfo.quantity - 1,
              },
            ],
          },
        },
      });
    } else {
      removeItem({
        variables: {
          input: {
            cart_id: cart?.id,
            cart_item_uid: getUidBySku(sku),
          },
        },
      });
    }
  };

  return {
    addItem,
    handleSubstractItem,
    isLoading,
    quantityInfo,
  };
};

export default useCart;
