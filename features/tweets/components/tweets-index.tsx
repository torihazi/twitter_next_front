import { TweetsImagesWithRelations } from "../schema";
import { Spinner } from "@nextui-org/spinner";
import { TweetIndexView } from "./tweet-index-view";

interface TweetsIndexProps {
  tweets: TweetsImagesWithRelations[];
  isLoading: boolean;
}

export const TweetsIndex = ({ tweets, isLoading }: TweetsIndexProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!tweets?.length) {
    return (
      <div className="flex justify-center items-center min-h-[200px] text-gray-500">
        No tweets found
      </div>
    );
  }

  return (
    <div className="">
      {tweets.map((tweet) => (
        <TweetIndexView
          key={tweet.id ?? tweet.createdAt.toString()}
          tweet={tweet}
        />
      ))}
    </div>
  );
};
