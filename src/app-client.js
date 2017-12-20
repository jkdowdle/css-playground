import { ApolloClient } from 'apollo-client'
import { withClientState } from 'apollo-link-state'
import { InMemoryCache } from 'apollo-cache-inmemory'

import schema from './schema'

const client = new ApolloClient({
  link: withClientState(schema),
  cache: new InMemoryCache(),
});

export default client