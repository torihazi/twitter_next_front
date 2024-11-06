import { TweetsImagesWithRelations } from "../schema";
import { Spinner } from "@nextui-org/spinner";
import { TweetShowView } from "./tweet-show-view";

interface TweetsShowProps {
  tweet: TweetsImagesWithRelations;
  isLoading: boolean;
}

export const TweetShow = ({ tweet, isLoading }: TweetsShowProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="">
      <TweetShowView
        key={tweet.id ?? tweet.createdAt.toString()}
        tweet={tweet}
      />
    </div>
  );
};
