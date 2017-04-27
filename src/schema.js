import {
  GraphQLSchema,
} from 'graphql';

import QueryType from './type/Query';
import { BASE_URL } from './constants';

function fetchResponseByURL(relativeURL) {
  return fetch(`${BASE_URL}${relativeURL}`).then(res => res.json());
}

function fetchPeople() {
  return fetchResponseByURL('/people/').then(json => json.people);
}

function fetchPersonByURL(relativeURL) {
  return fetchResponseByURL(relativeURL).then(json => json.person);
}

export default new GraphQLSchema({
  query: QueryType,
});
