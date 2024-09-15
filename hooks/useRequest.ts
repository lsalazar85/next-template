import { useState, useCallback } from 'react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

import { UseRequestProps } from '@/interfaces';

export const useRequest = <T>(): UseRequestProps<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleRequest = useCallback(async (request: () => Promise<any>) => {
    setLoading(true);
    setError(null);
    try {
      const response = await request();
      setData(response.data);
    } catch (err) {
      setError((err as AxiosError).message);
    } finally {
      setLoading(false);
    }
  }, []);

  const get = useCallback(
    (url: string, config?: AxiosRequestConfig) => {
      return handleRequest(() => axios.get(url, config));
    },
    [handleRequest],
  );

  const post = useCallback(
    (url: string, body: any, config?: AxiosRequestConfig) => {
      return handleRequest(() => axios.post(url, body, config));
    },
    [handleRequest],
  );

  return { data, error, loading, get, post };
};
