export interface ListResponse<T> {
  total: number;
  payload: T[];
}

export interface ProxyHttpResponse<T = any> {
  status: number;
  statusText: string;
  payload: T;
  headers: any;
}
