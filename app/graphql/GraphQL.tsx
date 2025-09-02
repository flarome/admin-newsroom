// GraphQL.tsx
import React from 'react';
import fetch from 'cross-fetch';
import {createHttpLink} from '@apollo/client';
import {GraphQLUniversalProvider} from '@shopify/react-graphql-universal-provider';

export function GraphQL({
  url,
  children,
}: {
  url?: URL;
  children?: React.ReactNode;
}) {
  const createClientOptions = () => {
    const link = createHttpLink({
      // make sure to use absolute URL on the server
      uri: `${url?.origin || ""}/api/graphql`,
      fetch,
    });

    return {link};
  };

  return (
    <GraphQLUniversalProvider createClientOptions={createClientOptions}>
      {children}
    </GraphQLUniversalProvider>
  );
}