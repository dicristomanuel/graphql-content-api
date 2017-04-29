import DataLoader from 'dataloader';
import { fetchPersonByURL } from '../api';

export default new DataLoader(
  urls => {
    return Promise.all(urls.map(fetchPersonByURL))
  }
);
