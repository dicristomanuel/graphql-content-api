import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import { fetchPeople, fetchPersonByURL } from '../api';
import { nodeField } from './PersonNode';
import PersonType from './Person';

const Query = new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    // node: nodeField,
    echo: {
      type: GraphQLString,
      args: {
        message: { type: GraphQLString },
      },
      resolve: ((root, {message}) => {
        return `You're saying ${message}`;
      })
    },
    allPeople: {
      type: new GraphQLList(PersonType),
      resolve: fetchPeople,
    },
    person: {
      type: PersonType,
      args: {id: { type: GraphQLString }},
      resolve: (root, {id}, {person}) => {
        return person.load(`/people/${id}/`)
      }
    },
  }),
});

export default Query;
