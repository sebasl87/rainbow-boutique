import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

const Client = new ApolloClient({
  connectToDevTools: true,
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_APOLLO_ENDPOINT,
    fetch,
    credentials: 'same-origin',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_APOLLO_ENDPOINT_TOKEN}`,
    },
  }),
  cache: new InMemoryCache({
    addTypename: false,
    resultCaching: true,
  }).restore({}),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});
export default Client;
