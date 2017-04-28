import { fromGlobalId, nodeDefinitions } from 'graphql-relay';
import personLoader from './personLoader';

export const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    console.log('running node definitions'); // investigate this
    if (type === 'Person') {
      return personLoader.load(`/people/${id}/`);
    }
  },
  object => {
    if (object.hasOwnProperty('username')) {
      return 'Person';
    }
  },
);
