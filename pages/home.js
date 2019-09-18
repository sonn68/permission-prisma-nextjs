import { ApolloProvider } from '@apollo/react-hooks';
import Home from '../components/home'
import client from '../api/_api-graphql';
import React, { Component } from 'react';

export default class HomeView extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    );
  }
}
