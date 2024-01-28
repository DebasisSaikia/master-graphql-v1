import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import Card from './Card';

const QUERY_USER = gql`
query GetAllUsers{
  users {
    nationality
    name
    id
  }
}
`

const GET_MOVIES = gql`
query GetMovies{
  movies {
    name
    yearOfPublication
  }
}
`

const DisplayData = () => {
    const {data, loading, error} =useQuery(QUERY_USER, {fetchPolicy: "network-only"})
    const {data:movies} =useQuery(GET_MOVIES, {fetchPolicy: "network-only"})
    const [search, setSearch] = useState('')
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Error</h1>
  return (
    <>
    <div className='search-container'>
        <input type="text" placeholder="Search"
         className='search-input' 
         value={search}
            onChange={(e) => setSearch(e.target.value)}
         />
    </div>
    <div className='card-container'>
      {data && data?.users?.map((user) => {
        return (
            <Card data={user} key={user?.id} />    
        )
      })}
    </div>

    <div className='card-container'>
      {movies && movies?.movies?.map((movie) => {
        return (
            <Card data={movie} key={movie?.id} />
        )
      })}
    </div>
    </>

  )
}

export default DisplayData
