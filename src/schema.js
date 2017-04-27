import {
  GraphQLSchema,
} from 'graphql';

import QueryType from './type/Query';
import PersonType from './type/Person';

export default new GraphQLSchema({
  query: QueryType,
  person: PersonType,
});
