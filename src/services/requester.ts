/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

import { Response } from "@typeDefs/response";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Props<T> = {
  get: (url: string) => Promise<Response<T>>;
  post: (url: string, body: any) => Promise<Response<T>>;
};

const requester = <T>(): Props<T> => {
  const get = async (url: string) => {
    const { data } = await axios.get(`${API_URL}${url}`);

    return {
      success: data.success,
      data: data.data,
      message: data.message,
      status: data.status,
      errors: data.errors,
    };
  };

  const post = async (url: string, body: any) => {
    const { data } = await axios.post(`${API_URL}${url}`, body);

    return {
      success: data.success,
      data: data.data,
      message: data.message,
      status: data.status,
      errors: data.errors,
    };
  };

  return {
    get,
    post,
  };
};

export default requester;
