import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query getProduct($id: ID) {
    product(where: { id: $id }) {
      id
      name
      photos {
        url
        fileName
      }
      price {
        subtotal
        total
      }
      description
      stock {
        id
        color {
          hex
        }
        colorName
        sizesAvailable {
          ... on SizeAvailable {
            id
            size
            available
          }
        }
      }
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  query getProducts {
    products(first: 1000) {
      id
      cod
      name
      gender
      price {
        hasDiscount
        subtotal
        total
      }
      photos {
        fileName
        url
      }
      slug
      stock {
        id
        sizesAvailable {
          ... on SizeAvailable {
            id
            size
            available
          }
        }
        color {
          hex
        }
        colorName
      }
      sale
    }
  }
`;

export const SEARCH_PRODUCT = gql`
  query getProduct($text: String) {
    products(where: { _search: $text }) {
      id
      name
      photos {
        url
        fileName
      }
      price {
        subtotal
        total
      }
      description
      stock {
        id
        color {
          hex
        }
        colorName
        sizesAvailable {
          ... on SizeAvailable {
            id
            size
            available
          }
        }
      }
    }
  }
`;
