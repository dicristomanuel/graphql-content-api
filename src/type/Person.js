import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { fetchPersonByURL } from '../api';

const Person = new GraphQLObjectType({
  name: 'Person',
  description: 'Represent Person',
  fields: () => ({
    id: {type: GraphQLString},
    firstName: {
      type: GraphQLString,
      resolve: person => person.first_name,
    },
    lastName: {
      type: GraphQLString,
      resolve: person => person.last_name,
    },
    email: {type: GraphQLString},
    username: {type: GraphQLString},
    friends: {
      type: new GraphQLList(Person),
      resolve: (person, args, loaders) => {
        return loaders.person.loadMany(person.friends)
      }
    }
  }),
});

export default Person;
