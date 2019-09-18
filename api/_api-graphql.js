import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
import jsonwebtoken from 'jsonwebtoken'
import { localCache } from '../utils/utils-cache'

const genToken = () => {
  let permission = {
    'permission': 'CUSTOMER'
  }
  console.log(localCache.get('permission'))
  let permissionCache = localCache.get('permission')
  let token
  if (!permissionCache) {
    token = jsonwebtoken.sign(permission, process.env.APP_SECRET)
    localCache.set('permission', permission)
    return token
  }
  token = jsonwebtoken.sign(permissionCache, process.env.APP_SECRET)
  return token
}

const httpLink = new HttpLink({
  uri: process.env.GRAPH_URI,
  headers: {
    authorization: `Bearer ${
      genToken()
    }`,
  },
  fetch: fetch
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
    alert(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }

  if (networkError) {
    alert(`[Network error]: ${networkError}`);
  }
});

const link = ApolloLink.from([errorLink, httpLink]);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

export default client