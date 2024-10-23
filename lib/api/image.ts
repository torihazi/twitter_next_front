import { Vault } from "lucide-react";
import { api } from "./api-client";
import { AxiosError, AxiosResponse, isAxiosError } from "axios";
import { ApiErrorResponse, ApiSuccessResponse, ImageApi } from "@/types/api";

//
// post images
//

export const createImagesApi = async (
  values: FormData
): Promise<AxiosResponse<ApiSuccessResponse<ImageApi>>> => {
  return api.post("/api/v1/images", values);
};

export const useCreateImages = ({ onSuccess }: { onSuccess?: () => void }) => {
  const createImages = async (
    values: FormData
  ): Promise<AxiosResponse<ApiSuccessResponse<ImageApi>>> => {
    try {
      const response = await createImagesApi(values);
      if (onSuccess) {
        onSuccess();
      }
      return response;
    } catch (error: any) {
      throw Error(error);
    }
  };
  return { createImages };
};
