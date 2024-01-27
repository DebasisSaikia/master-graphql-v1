import { UserList } from '../data/index.js';
const resolvers={
    Query:{
      users: () => {
        return UserList;
      },
      user : (_, args) => {
        return UserList.find((user) => user.id === args.id);
      },
    }
  }

export { resolvers };