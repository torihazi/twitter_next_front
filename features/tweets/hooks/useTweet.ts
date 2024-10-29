import { api } from "@/lib/api/api-client";
import { TweetsPartial } from "@/prisma/generated/zod/modelSchema/TweetsSchema";
import { DynamicPropertyWithBlobIds } from "@/types";
import useSWR from "swr";
import { TweetImages } from "../schema";

const KEY = "tweets";

//
// index tweet
//

const indexTweetsApi = async (): Promise<TweetImages[]> => {
  const response = await api.get("/api/v1/tweets");
  return response.data;
};

export const useTweets = () => {
  const key = [KEY];
  const fetcher = indexTweetsApi;
  const { data, mutate, isLoading } = useSWR<TweetImages[]>(key, fetcher);

  return {
    tweets: data,
    mutate,
    isLoading,
  };
};

//
// create tweet
//

const createTweetApi = async (
  values: DynamicPropertyWithBlobIds<TweetsPartial, "tweet">
): Promise<TweetImages> => {
  const response = await api.post("/api/v1/tweets", values);
  return response.data;
};

export const useCreateTweet = ({ onSuccess }: { onSuccess?: () => void }) => {
  const createTweet = async (
    values: DynamicPropertyWithBlobIds<TweetsPartial, "tweet">
  ): Promise<TweetImages> => {
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
