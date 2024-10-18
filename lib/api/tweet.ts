import {
  tweets,
  tweetsPartial,
} from "@/prisma/generated/zod/modelSchema/tweetsSchema";
import { api } from "./api-client";
import { AxiosResponse } from "axios";

//
// index tweet
//

const indexTweet = (): Promise<AxiosResponse<any, any>> => {
  return api.get("/v1/tweets");
};

//
// create tweet
//

const createTweetApi = async (
  values: tweetsPartial
): Promise<AxiosResponse<tweets>> => {
  const data = {
    tweet: { ...values },
  };

  return api.post("/api/v1/tweets", data);
};

export const useCreateTweet = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: () => void;
}) => {
  const createTweet = async (values: tweetsPartial) => {
    try {
      const newTweet = await createTweetApi(values);

      if (onSuccess) {
        onSuccess();
      }

      return newTweet;
    } catch (error) {
      if (onError) {
        onError();
      }
    }
  };

  return { createTweet };
};
