import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './index.scss';

import App from './App';

// Path to our data
const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
});

// Authenticating via our API token
const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_GITHUB_API_TOKEN;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

// Initiating our client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering app with client access
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
