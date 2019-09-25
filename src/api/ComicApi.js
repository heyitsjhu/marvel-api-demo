import Logger from '../utils/Logger';
import axios from 'axios';
import BaseApi from './BaseApi';

export default class ComicApi {
  /**
   * Set GET request to retrieve Marvel characters.
   */
  fetchCharacters(params) {
    return axios
      .get('/characters', {
        ...BaseApi.configuration,
        params: { ...params, ...BaseApi.configuration.params }
      })
      .then(resp => {
        Logger.info(this.constructor.name, 'fetchCharacters():', resp);

        if (resp.status === 200) {
          return resp.data.data.results;
        } else {
          return resp.data;
        }
      })
      .catch(error => {
        Logger.error(this.constructor.name, 'fetchCharacters():', error);
        return error;
      });
  }
}
