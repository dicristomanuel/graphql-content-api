import { BASE_URL } from '../constants';
import fetch from 'isomorphic-fetch';

const fetchResponseByURL = relativeURL => {
  console.log('relativeURL', `${BASE_URL}${relativeURL}`);
  return fetch(`${BASE_URL}${relativeURL}`).then(res => res.json());
}

export const fetchPeople = () => {
  return fetchResponseByURL('/people/').then(json => json);
}

export const fetchPersonByURL = relativeURL => {
  return fetchResponseByURL(relativeURL).then(json => json);
}
