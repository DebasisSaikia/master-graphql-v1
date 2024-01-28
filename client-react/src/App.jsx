import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <h1>Apollo client</h1>
    </ApolloProvider>
  )
}

export default App
