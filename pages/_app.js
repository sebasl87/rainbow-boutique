import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/styles/chackraTheme';
import '@/styles/globals.css';
import '@/styles/whatsApp.css';
import '@/styles/rainbow.css';
import { Provider } from 'jotai';
import { DevTools } from 'jotai-devtools';

import { ApolloProvider } from '@apollo/client';

import '@/styles/globals.css';
import { Client } from '@/api/apollo';
import { FloatingWhatsApp, LayoutGral } from '@/components';

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <DevTools />
      <ApolloProvider client={Client}>
        <ChakraProvider theme={theme}>
          <LayoutGral>
            <Component {...pageProps} />
          </LayoutGral>
          <FloatingWhatsApp />
        </ChakraProvider>
      </ApolloProvider>
    </Provider>
  );
}
