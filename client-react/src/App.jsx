import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import DisplayData from './components/DisplayData';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <DisplayData/>
    </ApolloProvider>
  )
}

export default App
