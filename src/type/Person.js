import {
  GraphQLList,
  GraphQLObjectType,
} from 'graphql';

const Person = new GraphQLObjectType({
  /* ... */
  fields: () => ({
    /* ... */
    friends: {
      type: new GraphQLList(PersonType),
      resolve: person => person.friends.map(getPersonByURL),
    },
  }),
});

export default Person;
