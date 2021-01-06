export interface ListResponse<T> {
  total: number;
  payload: T[];
}

export interface ProxyHttpResponse<T = any> {
  status: number;
  statusText: string;
  payload: T;
  headers: Record<string, string>;
}

export interface FoleonProject {
  id: number;
  category: string;
  identifier: string;
  name: string;
  status: string;
  created_on: string;
  type: 'project';
}

export interface FoleonPublication {
  id: number;
  name: string;
  identifier: string;
  hostname: string;
  website: string;
  status: string;
  created_on: string;
  category: string;
  type: 'publication';
}

type FoleonResource<K extends string, T> = Record<K, T[]>;

export interface FoleonListResponse<Name extends string, T> {
  _embedded: FoleonResource<Name, T>;
  page_count: number;
  page_size: number;
  total_items: number;
  page: number;
  count: number;
  total: number;
}

export type ProjectListResponse = ProxyHttpResponse<FoleonListResponse<'title', FoleonProject>>;

export type PublicationListResponse = ProxyHttpResponse<FoleonListResponse<'edition', FoleonPublication>>;

export interface ResourceSearchParams {
  q?: string;
  page: string;
}

export interface PublicationSearchParams extends ResourceSearchParams {
  projectId?: string;
}
