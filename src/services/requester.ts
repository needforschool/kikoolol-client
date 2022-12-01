/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from "axios";

import { Response } from "@typeDefs/response";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Props<T> = {
  get: (url: string) => Promise<Response<T>>;
  post: (url: string, body: any) => Promise<Response<T>>;
};

const requester = <T>(): Props<T> => {
  const get = async (url: string) => {
    try {
      const { data } = await axios.get(`${API_URL}${url}`);

      return {
        success: data.success,
        data: data.data,
      } as Response<T>;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const response = error.response;

        return {
          success: response.data.success,
          message: response.data.message,
          status: response.data.status,
          errors: response.data.errors,
        } as Response<T>;
      }

      return {
        success: false,
      };
    }
  };

  const post = async (url: string, body: any) => {
    try {
      const { data } = await axios.post(`${API_URL}${url}`, body);

      return {
        success: data.success,
        data: data.data,
      } as Response<T>;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        const response = error.response;

        return {
          success: response.data.success,
          message: response.data.message,
          status: response.data.status,
          errors: response.data.errors,
        } as Response<T>;
      }

      return {
        success: false,
      };
    }
  };

  return {
    get,
    post,
  };
};

export default requester;
