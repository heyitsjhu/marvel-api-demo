import Logger from '../utils/Logger';
import axios from 'axios';
import BaseApi from './BaseApi';

export default class ComicApi {
  /**
   * Set GET request to retrieve all comics.
   */
  fetchCharacters() {
    return axios
      .get('/characters', { ...BaseApi.configuration })
      .then(resp => {
        Logger.info('MarvelAPI (Comics) fetchCharacters() response:', resp);

        if (resp.status === 200) {
          return resp.data.data.results;
        } else {
          return resp.data;
        }
      })
      .catch(error => {
        Logger.error('MarvelAPI (Comics) fetchCharacters() error:', error);
        return error;
      });
  }
}
