import { graphql } from 'graphql';

import Schema from './schema';
import personLoader from './type/personLoader';
import fragments from './fragments';

const loaders = {
  person: personLoader,
}

export default (scope) => {
  return new Promise((resolve, reject) => {
    graphql(Schema, fragments[scope], null, loaders).then(function(result) {
      resolve(result);
    });
  })
}
