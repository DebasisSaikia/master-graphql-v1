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
    },
    Mutation:{
        addUser: (_, args) => {
            const user = args.input;
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        },
        updateUserName: (_, args) => {
            const {id, newName} = args.input;
            const user = lodash.find(UserList, {id: Number(id)});
            user.name = newName;
            return user;
        },
        deleteUser: (_, args) => {
            const {id} = args;
            const user = lodash.find(UserList, {id: Number(id)});
            lodash.remove(UserList, user);
            return UserList;
        },
    }
  }

export { resolvers };