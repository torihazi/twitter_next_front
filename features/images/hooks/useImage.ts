import { api } from "@/lib/api/api-client";
import { BlobIdsPayload } from "@/types";

//
// post images
//

export const createImagesApi = async (values: FormData): Promise<string[]> => {
  const response = await api.post("/api/v1/images", values);
  return response.data;
};

export const useCreateImages = ({ onSuccess }: { onSuccess?: () => void }) => {
  const createImages = async (values: FormData): Promise<string[]> => {
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
