import { graphql } from 'graphql';

import Schema from './schema';
import personLoader from './type/personLoader';

const loaders = {
  person: personLoader,
}

let query = `
{
  person(id: "0110") {
    id
    firstName
  }
}
`;

graphql(Schema, query, null, loaders).then(function(result) {
  console.log(result);
});
