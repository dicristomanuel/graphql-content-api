import { graphql } from 'graphql';

import Schema from './schema';
import personLoader from './type/personLoader';
import queries from './queries';

const loaders = {
  person: personLoader,
}

export default (scope) => {
  return new Promise((resolve, reject) => {
    graphql(Schema, queries[scope], null, loaders).then(function(result) {
      resolve(result);
    });
  })
}
