import Logger from '../utils/Logger';
import { useState, useEffect } from 'react';

/**
 *
 * @param {*} apiFetch
 * @param {*} id
 */
const useFetch = (apiFetch, id = null) => {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await apiFetch(id);
    setData(response);
  }

  useEffect(() => {
    fetchData();
  }, [apiFetch, id]);

  return data;
};

export default useFetch;
