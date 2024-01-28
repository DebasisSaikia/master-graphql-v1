import { useQuery, gql } from '@apollo/client';

const QUERY_USER = gql`
query GetAllUsers{
  users {
    nationality
    name
    id
  }
}
`

const DisplayData = () => {
    const {data, loading, error} =useQuery(QUERY_USER, {fetchPolicy: "network-only"})
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Error</h1>
  return (
    <div className='card-container'>
      {data && data?.users?.map((user) => {
        return (
            <div key={user?.id} className='user-card'>
                <h1>{user?.name}</h1>
                <p>{user?.nationality}</p>
                </div>
        )
      })}
    </div>
  )
}

export default DisplayData
