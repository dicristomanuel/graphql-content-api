import { fromGlobalId, nodeDefinitions } from 'graphql-relay';

export const { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'Person') {
      return fetchPersonByURL(`/people/${id}/`);
    }
  },
  object => {
    if (object.hasOwnProperty('username')) {
      return 'Person';
    }
  },
);
