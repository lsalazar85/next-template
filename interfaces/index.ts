import { ReactNode } from 'react';
import { AxiosRequestConfig } from 'axios';

interface TitleProps {
  children: ReactNode;
  level?: 1 | 2;
}

interface ParagraphProps {
  children: ReactNode;
}

interface TextProps {
  children: ReactNode;
  styles?: string;
}

interface UseRequestProps<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  get: (url: string, config?: AxiosRequestConfig) => Promise<void>;
  post: (url: string, body: any, config?: AxiosRequestConfig) => Promise<void>;
}

export type { TitleProps, ParagraphProps, TextProps, UseRequestProps };
