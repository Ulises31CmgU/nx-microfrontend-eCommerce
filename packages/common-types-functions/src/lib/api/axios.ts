import axios from 'axios';
import {
  ApiResponse,
  AsyncApiResponse,
  ErrorResponse,
  RequestProps,
} from '../types/axios.types';

export class ApiRequestException {
  status: number;
  statusTxt: string;
  data?: any;
  exception?: any;

  constructor(props: ErrorResponse) {
    this.status = props.status;
    this.statusTxt = props.statusText;
    this.data = props.content;
    this.exception = props.exception;
  }

  getError(): ApiResponse<any> {
    return makeError(this.status, this.statusTxt, this.data, this.exception);
  }
}

export function makeError(
  code: number,
  text: string,
  data: any,
  exception?: any
): ApiResponse<any> {
  return {
    error: {
      status: code,
      statusText: text,
      content: data,
      exception,
    },
  };
}

export function makeResponse<T>(response: any): ApiResponse<T> {
  const result: ApiResponse<T> = {
    data:
      response.data === ''
        ? null
        : response.data != null && typeof response.data != 'undefined'
        ? response.data
        : response,
  };
  return result;
}

export const sendRequest = async <T>(
  props: RequestProps
): Promise<AsyncApiResponse<T>> => {
  let config = undefined;
  if (props.token) {
    config = { headers: { Authorization: `Bearer ${props.token}` } };
  }
  let response = null;
  try {
    if (props.get) response = await axios.get(props.get.path as string, config);
    if (props.post)
      response = await axios.post(
        props.post.path as string,
        props.post.body,
        config
      );
    if (props.put)
      response = await axios.put(
        props.put.path as string,
        props.put.body,
        config
      );
    if (props.patch)
      response = await axios.patch(
        props.patch.path as string,
        props.patch.body,
        config
      );
  } catch (e: any) {
    throw new Error(e.message);
  }
  return makeResponse<T>(response);
};
