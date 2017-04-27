import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import { globalIdField } from 'graphql-relay';
import { nodeInterface } from './PersonNode';
import { fetchPersonByURL } from '../api';

const Person = new GraphQLObjectType({
  name: 'Person',
  description: 'Represent Person',
  fields: () => ({
    firstName: {
      type: GraphQLString,
      resolve: person => person.first_name,
    },
    lastName: {
      type: GraphQLString,
      resolve: person => person.last_name,
    },
    email: {type: GraphQLString},
    id: globalIdField('Person'),
    username: {type: GraphQLString},
    friends: {
      type: new GraphQLList(Person),
      resolve: person => person.friends.map(fetchPersonByURL),
    }
  }),
  interfaces: [ nodeInterface ],
});

export default Person;
