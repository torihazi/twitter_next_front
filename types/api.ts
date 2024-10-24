export type ApiSuccessResponse<T> = {
  data: T;
  message: string;
};

export type ApiErrorResponse = {
  error: string;
  message: string;
};

export type ImageApi = {
  blobIds: string[];
};

export type DynamicPropertyWithBlobIds<T, Name extends string> = {
  [K in Name]: T;
} & {
  blobIds?: string;
};
