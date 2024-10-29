import { Image } from "@nextui-org/image";
import { TweetImages } from "../schema";
import { Spinner } from "@nextui-org/spinner";

export const TweetsIndex = ({
  tweets,
  isLoading,
}: {
  tweets: TweetImages[];
  isLoading: boolean;
}) => {
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
        tweets?.map((tweet, index) => (
          <div key={index} className="border">
            {tweet.content}
            {tweet.imageUrls?.length > 0 &&
              tweet.imageUrls.map((url, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={url}
                  alt={`Tweet image ${imgIndex + 1}`}
                />
              ))}
          </div>
        ))
      )}
    </>
  );
};
