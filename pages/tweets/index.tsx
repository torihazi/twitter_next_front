import { LogoImage } from "@/components/logo-image";
import { HomeTemplate } from "@/layouts/home-template";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input, Textarea } from "@nextui-org/input";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Tooltip } from "@nextui-org/tooltip";
import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { inputIconItems } from "@/features/home/consts/input-icons";
import { TweetForm } from "@/features/home/components/tweet-form";

const TweetsIndex = () => {
  const [selected, setSelected] = useState<string>("for-you");

  return (
    <HomeTemplate>
      <div className="flex h-screen">
        <div className="flex-auto border-1 border-gray-800">
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
              <TweetForm />
            </Tab>
            <Tab key="followings" title="Followings">
              <TweetForm />
            </Tab>
          </Tabs>
        </div>
        <div className="flex-none max-w-[400px] p-2 ">
          <div className="p-2">
            <Input
              placeholder="Search"
              startContent={<Search />}
              variant="bordered"
              radius="full"
            />
          </div>
          <Card className="m-2">
            <CardHeader>Subscribe to Premium</CardHeader>
            <CardBody>
              Subscribe to unlock new features and if eligible, receive a share
              of ads revenue.
            </CardBody>
            <CardFooter>
              <Button radius="full">Subscribe</Button>
            </CardFooter>
          </Card>
          <Card className="m-2">
            <CardHeader>Whats Happening</CardHeader>
            <CardBody>
              Subscribe to unlock new features and if eligible, receive a share
              of ads revenue.
            </CardBody>
            <CardBody>
              Subscribe to unlock new features and if eligible, receive a share
              of ads revenue.
            </CardBody>
            <CardBody>
              Subscribe to unlock new features and if eligible, receive a share
              of ads revenue.
            </CardBody>
            <CardBody>
              Subscribe to unlock new features and if eligible, receive a share
              of ads revenue.
            </CardBody>
          </Card>
        </div>
      </div>
    </HomeTemplate>
  );
};

export default TweetsIndex;
