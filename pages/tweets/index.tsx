import { HomeTemplate } from "@/layouts/home-template";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useState } from "react";
import { TweetForm } from "@/features/tweets/components/tweet-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HomeSubSider } from "@/features/tweets/components/home-sub-sider";
import {
  TweetImages,
  TweetsPartialWithImages,
  TweetsPartialWithImagesSchema,
} from "@/features/tweets/schema";
import { useTweets } from "@/features/tweets/hooks/useTweet";
import { TweetsIndex } from "@/features/tweets/components/tweets-index";

const Index = () => {
  const [selected, setSelected] = useState<string>("for-you");
  const { tweets, mutate, isLoading } = useTweets();
  const form = useForm<TweetsPartialWithImages>({
    resolver: zodResolver(TweetsPartialWithImagesSchema),
    mode: "onChange",
    defaultValues: {
      content: "",
      images: [],
    },
  });
  return (
    <HomeTemplate>
      <div className="flex h-screen">
        <div className="flex-auto border-1 border-gray-800 max-w-[600px]">
          <Tabs
            selectedKey={selected}
            variant="underlined"
            classNames={{
              base: "grid justify-items-stretch",
              tabList: "border-b-1 border-gray-800",
              tabContent: "group-data-[selected=true]:font-bold",
              cursor: "w-[40px] bg-[#1C9BEF]",
            }}
            onSelectionChange={setSelected}
          >
            <Tab key="for-you" title="For you">
              <TweetForm form={form} mutate={mutate} />
              <TweetsIndex
                tweets={tweets as TweetImages[]}
                isLoading={isLoading}
              />
            </Tab>
            <Tab key="followings" title="Followings">
              <TweetForm form={form} mutate={mutate} />
              <TweetsIndex
                tweets={tweets as TweetImages[]}
                isLoading={isLoading}
              />
            </Tab>
          </Tabs>
        </div>
        <div className="flex-none max-w-[400px] p-2 ">
          <HomeSubSider />
        </div>
      </div>
    </HomeTemplate>
  );
};

export default Index;
