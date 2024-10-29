import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ApiSuccessResponse<T> = {
  data: T;
  meta?: number;
  message: string;
};

export type ApiErrorResponse = {
  error: string;
  message: string;
};

export type BlobIdsPayload = {
  blobIds: string[];
};

export type DynamicPropertyWithBlobIds<T, Name extends string> = {
  [K in Name]: T;
} & Partial<BlobIdsPayload>;
