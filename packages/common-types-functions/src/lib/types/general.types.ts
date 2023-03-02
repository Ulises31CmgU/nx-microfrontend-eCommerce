export type QueryModel = {
  filters?: string;
  orderBy?: string;
  page?: number;
  pageSize?: number;
};

export type QueryPaginationModel = {
  page: number;
  pageSize: number;
  total: number;
};
