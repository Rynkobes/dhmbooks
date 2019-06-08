import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
// import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost';
// import fetch from 
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
	uri: process.env.REACT_APP_GRAPHQL_URI
});

const Main = () => (
	<ApolloProvider client={client}>
		<Layout />
	</ApolloProvider>
);

// ReactDOM.render(<Main />, document.getElementById('root'));
// registerServiceWorker();
