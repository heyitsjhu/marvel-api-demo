// https://github.com/digitalbazaar/forge#md5
import forge from 'node-forge';
const MD5 = forge.md.md5.create();

const PUBLIC_API_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const PRIVATE_API_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
const TS = '1';

const BaseApi = {
  configuration: {
    baseURL: 'http://gateway.marvel.com/v1/public/',
    crossdomain: true,
    params: {
      ts: TS,
      apikey: PUBLIC_API_KEY,
      hash: MD5.update(TS + PRIVATE_API_KEY + PUBLIC_API_KEY)
        .digest()
        .toHex()
    }
  }
};

export default BaseApi;
