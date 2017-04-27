import {
  GraphQLList,
  GraphQLObjectType,
} from 'graphql';

import { globalIdField } from 'graphql-relay';
// fromGlobalId

const Person = new GraphQLObjectType({
  name: 'Person',
  description: 'Represent Person',
  fields: () => ({
    id: globalIdField('Person'),
    friends: {
      type: new GraphQLList(PersonType),
      resolve: person => person.friends.map(getPersonByURL),
    },
  }),
});

export default Person;
