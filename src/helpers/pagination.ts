import { SortOrder } from 'mongoose';

type IOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: SortOrder;
};
type IQueryOptions = {
  page: number;
  limit: number;
  skip: number;
  sortBy: string;
  sortOrder: SortOrder;
};
export const calculatePagination = (options: IOptions): IQueryOptions => {
  const page = Number(options.page || 1);
  const limit = Number(options.limit || 10);
  const sortBy = options.sortBy || 'createdAt';
  const sortOrder = options.sortOrder || 'desc';

  const skip = (page - 1) * limit;

  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  };
};
