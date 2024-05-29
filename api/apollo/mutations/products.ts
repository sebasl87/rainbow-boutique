import { gql } from '@apollo/client';

export const ADD_ITEM = gql`
  mutation AddProductsToCart($cartId: String!, $cartItems: [CartItemInput!]!) {
    addProductsToCart(cartId: $cartId, cartItems: $cartItems) {
      cart {
        total_quantity
        items {
          quantity
          uid
          product {
            sku
            name
            image {
              url
              label
            }
            short_description {
              html
            }
            price_range {
              maximum_price {
                discount {
                  amount_off
                  percent_off
                }
                final_price {
                  currency
                  value
                }
                regular_price {
                  currency
                  value
                }
              }
              minimum_price {
                discount {
                  amount_off
                  percent_off
                }
                final_price {
                  currency
                  value
                }
                regular_price {
                  value
                  currency
                }
              }
            }
          }
        }
        shipping_addresses {
          available_shipping_methods {
            method_code
            price_incl_tax {
              currency
              value
            }
          }
          city
          colony
          exterior_number
          interior_number
          municipality
          postcode
          street
          telephone
        }
        prices {
          applied_taxes {
            amount {
              currency
              value
            }
          }
          discounts {
            amount {
              currency
              value
            }
          }
          grand_total {
            currency
            value
          }
          subtotal_excluding_tax {
            currency
            value
          }
          subtotal_including_tax {
            currency
            value
          }
        }
        estimatedDelivery{
          deliveryMessage
        }
      }
    }
  }
`;

export const SUBSTRACT_ITEM = gql`
  mutation UpdateCartItems($input: UpdateCartItemsInput) {
    updateCartItems(input: $input) {
      cart {
        total_quantity
        items {
          quantity
          uid
          product {
            sku
            name
            image {
              url
              label
            }
            short_description {
              html
            }
            price_range {
              maximum_price {
                discount {
                  amount_off
                  percent_off
                }
                final_price {
                  currency
                  value
                }
                regular_price {
                  currency
                  value
                }
              }
              minimum_price {
                discount {
                  amount_off
                  percent_off
                }
                final_price {
                  currency
                  value
                }
                regular_price {
                  value
                  currency
                }
              }
            }
          }
        }
        shipping_addresses {
          available_shipping_methods {
            method_code
            price_incl_tax {
              currency
              value
            }
          }
          city
          colony
          exterior_number
          interior_number
          municipality
          postcode
          street
          telephone
        }
        prices {
          applied_taxes {
            amount {
              currency
              value
            }
          }
          discounts {
            amount {
              currency
              value
            }
          }
          grand_total {
            currency
            value
          }
          subtotal_excluding_tax {
            currency
            value
          }
          subtotal_including_tax {
            currency
            value
          }
        }
        estimatedDelivery{
          deliveryMessage
        }
      }
    }
  }
`;

export const INCREASE_ITEM = gql`
  mutation UpdateCartItems($input: UpdateCartItemsInput) {
    updateCartItems(input: $input) {
      cart {
        total_quantity
        items {
          quantity
          uid
          product {
            sku
            name
            image {
              url
              label
            }
            short_description {
              html
            }
            price_range {
              maximum_price {
                discount {
                  amount_off
                  percent_off
                }
                final_price {
                  currency
                  value
                }
                regular_price {
                  currency
                  value
                }
              }
              minimum_price {
                discount {
                  amount_off
                  percent_off
                }
                final_price {
                  currency
                  value
                }
                regular_price {
                  value
                  currency
                }
              }
            }
          }
        }
        shipping_addresses {
          available_shipping_methods {
            method_code
            price_incl_tax {
              currency
              value
            }
          }
          city
          colony
          exterior_number
          interior_number
          municipality
          postcode
          street
          telephone
        }
        prices {
          applied_taxes {
            amount {
              currency
              value
            }
          }
          discounts {
            amount {
              currency
              value
            }
          }
          grand_total {
            currency
            value
          }
          subtotal_excluding_tax {
            currency
            value
          }
          subtotal_including_tax {
            currency
            value
          }
        }
        estimatedDelivery{
          deliveryMessage
        }
      }
    }
  }
`;

export const REMOVE_ITEM = gql`
  mutation RemoveItemFromCart($input: RemoveItemFromCartInput) {
    removeItemFromCart(input: $input) {
      cart {
        total_quantity
        items {
          quantity
          uid
          product {
            sku
            name
            image {
              url
              label
            }
            short_description {
              html
            }
            price_range {
              maximum_price {
                discount {
                  amount_off
                  percent_off
                }
                final_price {
                  currency
                  value
                }
                regular_price {
                  currency
                  value
                }
              }
              minimum_price {
                discount {
                  amount_off
                  percent_off
                }
                final_price {
                  currency
                  value
                }
                regular_price {
                  value
                  currency
                }
              }
            }
          }
        }
        shipping_addresses {
          available_shipping_methods {
            method_code
            price_incl_tax {
              currency
              value
            }
          }
          city
          colony
          exterior_number
          interior_number
          municipality
          postcode
          street
          telephone
        }
        prices {
          applied_taxes {
            amount {
              currency
              value
            }
          }
          discounts {
            amount {
              currency
              value
            }
          }
          grand_total {
            currency
            value
          }
          subtotal_excluding_tax {
            currency
            value
          }
          subtotal_including_tax {
            currency
            value
          }
        }
        estimatedDelivery{
          deliveryMessage
        }
      }
    }
  }
`;
