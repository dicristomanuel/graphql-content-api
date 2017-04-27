import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import PersonType from './Person';

const Query = new GraphQLObjectType({
  /* ... */
  fields: () => ({
    allPeople: {
      type: new GraphQLList(PersonType),
      resolve: fetchPeople,
    },
    person: {
      type: PersonType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, args) => fetchPersonByURL(`/people/${args.id}/`),
    },
  }),
});

export default Query;
