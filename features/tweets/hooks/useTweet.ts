import { api } from "@/lib/api/api-client";
import { TweetsPartial } from "@/prisma/generated/zod/modelSchema/TweetsSchema";
import { ApiSuccessResponse, DynamicPropertyWithBlobIds } from "@/types";
import useSWR from "swr";
import {
  ShowTweetResponse,
  TweetImages,
  TweetsImagesWithRelations,
} from "../schema";

const KEY = "tweets";

const convertQuery = (query: Record<string, number>) => {
  return Object.entries(query).reduce((acc, [key, val]) => {
    return acc + `${key}=${val}` + "&";
  }, "?");
};

//
// index tweet
//

const indexTweetsApi = async (
  query: Record<string, number> = { limit: 10, offset: 0 }
): Promise<ApiSuccessResponse<TweetsImagesWithRelations[]>> => {
  const queryString = convertQuery(query);
  return await api.get(`/api/v1/tweets${queryString}`);
};

export const useTweets = (
  query: Record<string, number> = { limit: 10, offset: 0 }
) => {
  const key = [KEY, query.limit, query.offset];
  const fetcher = () => indexTweetsApi(query);
  const { data, mutate, isLoading } = useSWR<
    ApiSuccessResponse<TweetsImagesWithRelations[]>
  >(key, fetcher);

  return {
    tweets: data?.data,
    meta: data?.meta,
    mutate,
    isLoading,
  };
};

//
// show tweet
//
const showTweetsApi = async (
  id: string
): Promise<ApiSuccessResponse<ShowTweetResponse>> => {
  return await api.get(`/api/v1/tweets/${id}`);
};

export const useTweet = (id: string) => {
  const key = [KEY, id];
  const fetcher = () => showTweetsApi(id);
  const { data, mutate, isLoading } = useSWR<
    ApiSuccessResponse<ShowTweetResponse>
  >(id ? key : null, fetcher);

  return {
    tweet: data?.data?.tweet,
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
