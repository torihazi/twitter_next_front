import { IconButton } from "@/components/icon-button";
import { HomeSubSider } from "@/features/tweets/components/home-sub-sider";
import { TweetShow } from "@/features/tweets/components/tweet-show";
import { useTweet } from "@/features/tweets/hooks/useTweet";
import { TweetsImagesWithRelations } from "@/features/tweets/schema";
import { HomeTemplate } from "@/layouts/home-template";
import { ArrowLeft, Ellipsis } from "lucide-react";
import { useRouter } from "next/router";

const Show = () => {
  const router = useRouter();
  const { tweet, isLoading } = useTweet(router.query.id as string);
  return (
    <>
      <HomeTemplate>
        <div className="flex h-screen">
          <div className="flex-auto border-1 border-b-0 border-gray-800 max-w-[600px] overflow-scroll">
            {/* header部分 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <IconButton
                  className="text-white"
                  onClick={() => router.back()}
                >
                  <ArrowLeft />
                </IconButton>
                <div className="font-bold text-lg">Post</div>
              </div>
            </div>

            {/* Tweet部分 */}
            <TweetShow
              tweet={tweet as TweetsImagesWithRelations}
              isLoading={isLoading}
            />
            {/* TODO:コメントフォーム */}
            {/* TODO:コメント一覧 */}
          </div>
          <div className="flex-none max-w-[400px] p-2 ">
            <HomeSubSider />
          </div>
        </div>
      </HomeTemplate>
    </>
  );
};

export default Show;
