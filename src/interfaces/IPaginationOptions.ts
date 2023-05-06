export interface IPaginationOptions<T> {
    page: number;
    pageSize: number;
    sortBy?: keyof T;
    sortOrder: 'asc' | 'desc';
    filterBy?: Partial<T>;
  }
  