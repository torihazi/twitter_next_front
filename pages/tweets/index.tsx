import { HomeTemplate } from "@/layouts/home-template";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useEffect, useRef, useState } from "react";
import { TweetForm } from "@/features/tweets/components/tweet-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HomeSubSider } from "@/features/tweets/components/home-sub-sider";
import {
  TweetsImagesWithRelations,
  TweetsPartialWithImages,
  TweetsPartialWithImagesSchema,
} from "@/features/tweets/schema";
import { useTweets } from "@/features/tweets/hooks/useTweet";
import { TweetsIndex } from "@/features/tweets/components/tweets-index";
import { Pagination } from "@/components/pagination";

const TWEETS_PER_PAGE = 10;

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string>("for-you");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { tweets, meta, mutate, isLoading } = useTweets({
    limit: TWEETS_PER_PAGE,
    offset: (currentPage - 1) * TWEETS_PER_PAGE,
  });
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
        <div className="flex-auto border-1 border-b-0 border-gray-800 max-w-[600px] overflow-scroll">
          <Tabs
            selectedKey={selected}
            variant="underlined"
            classNames={{
              base: "grid justify-items-stretch",
              tabList: "border-b-1 border-gray-800",
              tabContent: "group-data-[selected=true]:font-bold",
              cursor: "w-[40px] bg-[#1C9BEF]",
              panel: "px-0",
            }}
            onSelectionChange={setSelected}
          >
            <Tab key="for-you" title="For you">
              <TweetForm form={form} mutate={mutate} />
              <TweetsIndex
                tweets={tweets as TweetsImagesWithRelations[]}
                isLoading={isLoading}
              />
              <Pagination
                totalItems={meta as number}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                itemsPerPage={TWEETS_PER_PAGE}
              />
            </Tab>
            <Tab key="followings" title="Followings">
              <TweetForm form={form} mutate={mutate} />
              <TweetsIndex
                tweets={tweets as TweetsImagesWithRelations[]}
                isLoading={isLoading}
              />
              <Pagination
                totalItems={meta as number}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                itemsPerPage={TWEETS_PER_PAGE}
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
