export type Response<T> = {
  success: boolean;
  data: T;
  message?: string;
  code?: number;
  errors?: string[];
};
