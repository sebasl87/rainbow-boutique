import { gql } from '@apollo/client';

export const GET_CART = gql`
  query CustomerCart {
    customerCart {
      id
      total_quantity
      items {
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
        quantity
        uid
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
      estimatedDelivery {
        deliveryMessage
      }
    }
  }
`;

export const ADD_SIMPLE_PRODUCTS_TO_CART = gql`
  mutation AddSimpleProductsToCart($input: AddSimpleProductsToCartInput) {
    addSimpleProductsToCart(input: $input) {
      cart {
        items {
          id
          product {
            sku
            stock_status
          }
          quantity
        }
      }
    }
  }
`;

export const APPLY_COUPON_TO_CART = gql`
  mutation ApplyCouponToCart($input: ApplyCouponToCartInput) {
    applyCouponToCart(input: $input) {
      cart {
        id
        applied_coupons {
          code
        }
        prices {
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
        }
      }
    }
  }
`;

export const REMOVE_COUPON_FROM_CART = gql`
  mutation RemoveCouponFromCart($input: RemoveCouponFromCartInput!) {
    removeCouponFromCart(input: $input) {
      cart {
        prices {
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
        }
        total_quantity
      }
    }
  }
`;

export const GET_CUSTOMER_ORDER = gql`
  query Customer($orderNumber: String!) {
    customer {
      orders(filter: { number: { eq: $orderNumber } }) {
        items {
          id
          number
          order_date
          status
          timeline {
            status
            message
            timestamp
          }
          comments {
            message
            timestamp
          }
          shipping_address {
            postcode
            street
            municipality
            colony
            region
            exterior_number
            interior_number
            country_code
            telephone
          }
          payment_methods {
            name
            type
          }
          items {
            product_name
            product_sale_price {
              value
              currency
            }
            quantity_ordered
            product_image
          }
          carrier
          shipments {
            id
            comments {
              message
              timestamp
            }
          }
          total {
            subtotal {
              value
            }
            grand_total {
              value
              currency
            }
            total_shipping {
              value
              currency
            }
            discounts {
              amount {
                value
                currency
              }
              label
            }
          }
          shipping_method
          estimatedDelivery {
            deliveryDate
            deliveryMessage
          }
        }
      }
    }
  }
`;
