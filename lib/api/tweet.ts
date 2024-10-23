import {
  tweets,
  tweetsPartial,
} from "@/prisma/generated/zod/modelSchema/tweetsSchema";
import { api } from "./api-client";
import { AxiosResponse } from "axios";
import { tweetsPartialWithImages } from "@/pages/tweets";
import { ApiSuccessResponse, DynamicPropertyWithBlobIds } from "@/types/api";

//
// index tweet
//

const indexTweet = (): Promise<
  AxiosResponse<ApiSuccessResponse<tweets[]>, any>
> => {
  return api.get("/api/v1/tweets");
};

//
// create tweet
//

const createTweetApi = async (
  values: DynamicPropertyWithBlobIds<tweetsPartial, "tweet">
): Promise<AxiosResponse<ApiSuccessResponse<tweets>>> => {
  return api.post("/api/v1/tweets", values);
};

export const useCreateTweet = ({ onSuccess }: { onSuccess?: () => void }) => {
  const createTweet = async (
    values: DynamicPropertyWithBlobIds<tweetsPartial, "tweet">
  ): Promise<AxiosResponse<ApiSuccessResponse<tweets>>> => {
    try {
      const newTweet = await createTweetApi(values);

      if (onSuccess) {
        onSuccess();
      }

      return newTweet;
    } catch (error: any) {
      throw Error(error);
    }
  };

  return { createTweet };
};
