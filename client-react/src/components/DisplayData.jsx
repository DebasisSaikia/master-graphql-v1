import { useQuery, gql, useLazyQuery } from '@apollo/client';
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

const GET_SINGLE_MOVIE = gql`
    query GetMovie($name: String!){
    findMovie(name: $name) {
        name
        yearOfPublication
    }
}
`


const DisplayData = () => {
    const {data, loading, error} =useQuery(QUERY_USER, {fetchPolicy: "network-only"})
    const {data:movies} =useQuery(GET_MOVIES, {fetchPolicy: "network-only"})
    const [fetchMovies, {data:movieData, error:movieError}] = useLazyQuery(GET_SINGLE_MOVIE)
    const [search, setSearch] = useState('')
    if(loading) return <h1>Loading...</h1>
    if(error || movieError) return <h1>Error</h1>
    console.log({movieData})
  return (
    <>
    <div className='search-container'>
    <div >
        <input type="text" placeholder="Search"
         className='search-input' 
         value={search}
            onChange={(e) => {
                setSearch(e.target.value)
            }}
         />
    </div>
    <button onClick={()=>fetchMovies({variables:{name:search}})}>Fetch</button>
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
