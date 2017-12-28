import React from 'react';
import { render } from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import resolvers from './schema';
import './index.css'

const cache = new InMemoryCache()

const defaults = {
  sidebarOpen: false,
  activePannel: 3,
  sidebarState: 'hm',
  hello: 'Start typing???'
}

const stateLink = withClientState(resolvers, cache, defaults)
const httpLink = new HttpLink({ uri: 'https://98lq7vz8r.lp.gql.zone/graphql' })
const link = ApolloLink.from([stateLink, httpLink])

const client = new ApolloClient({
  link,
  cache
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
