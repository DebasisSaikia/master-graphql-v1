import { UserList } from '../data/index.js';
const resolvers={
    Query:{
      users: () => {
        return UserList;
      },
    }
  }

export { resolvers };