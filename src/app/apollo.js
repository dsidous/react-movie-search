import { ApolloClient } from "apollo-client";
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';

//const httpLink = new BatchHttpLink({ uri: process.env.REACT_APP_GQL_URL });
const httpLink = new BatchHttpLink({ uri: "http://localhost:4040" });
const apikey = process.env.REACT_APP_API_KEY;

const authLink = setContext((_, { headers }) => {
  return {
    headers: Object.assign({}, headers, {
      apikey,
    })
  }
});

const link = ApolloLink.from([
  authLink,
  httpLink,
]);

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: []
    }
  }
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache({ fragmentMatcher }),
});