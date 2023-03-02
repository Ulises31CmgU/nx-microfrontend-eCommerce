type PutRequest = {
  path: string;
  body: any;
};

type PostRequest = {
  path: string;
  body: any;
};

type GetRequest = {
  path: string;
  query?: any;
};

export type RequestProps = {
  get?: GetRequest;
  post?: PostRequest;
  put?: PutRequest;
  patch?: any;
  delete?: any;
  token?: string;
};

export type ErrorResponse = {
  status: number;
  statusText: string;
  content: any;
  exception?: any;
};

export type ApiResponse<T> = {
  error?: ErrorResponse;
  data?: T;
};

export type ApiResponseWithHeader<T> = {
  error?: ErrorResponse;
  data?: T;
  headers?: any;
};

export type AsyncApiResponse<T> = Promise<ApiResponse<T>>;
