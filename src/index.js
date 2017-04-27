import {
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLEnumType,
  GraphQLNonNull,
  GraphQLSchema,
  graphql
} from 'graphql';

import Schema from './schema';

let query = `
  {
    allPeople {
      firstName
      friends {
        email
      }
    }
  }
`;

graphql(Schema, query).then(function(result) {
  console.log(result.data);
});
