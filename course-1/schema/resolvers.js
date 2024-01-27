import { MovieList, UserList } from '../data/index.js';
import lodash from 'lodash';
const resolvers={
    Query:{
      users: () => {
        return UserList;
      },
      user : (_, args) => {
        const user= lodash.find(UserList, {id: Number(args.id)});
        return user;
      },
      movies: () => {
        return MovieList;
      },
      movie: (_, args) => {
        const movie= lodash.find(MovieList, {isInTheaters: args.isReleased});
        return movie;
      },
    }
  }

export { resolvers };