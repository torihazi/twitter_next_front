import { LogoImage } from "@/components/logo-image";
import { Textarea } from "@nextui-org/input";
import { inputIconItems } from "../consts/input-icons";
import { Tooltip } from "@nextui-org/tooltip";
import { Button } from "@nextui-org/button";
import { useForm } from "react-hook-form";

export const TweetForm = () => {
  const {} = useForm();

  return (
    <form className="border-b-1 border-gray-800">
      <div className="flex">
        <div className="flex-shrink-0">
          <LogoImage width={20} height={20} className="" />
        </div>
        <div className="flex flex-col flex-1">
          <Textarea
            placeholder="What is happening?"
            radius="none"
            classNames={{
              inputWrapper: [
                "bg-transparent",
                "hover:bg-none",
                "data-[hover=true]:bg-transparent",
                "group-data-[focus=true]:bg-transparent",
                "border-b-1 border-gray-800",
              ],
              input: "bg-transparent",
            }}
          />
          <div className="flex justify-between my-2">
            <div className="flex">
              {inputIconItems.map((item) => (
                <Tooltip
                  key={item.tooltip}
                  placement="bottom"
                  content={item.tooltip}
                >
                  <Button
                    isIconOnly
                    variant="light"
                    radius="full"
                    className="text-[#1C9BEF]"
                  >
                    {item.icon}
                  </Button>
                </Tooltip>
              ))}
            </div>
            <div>
              <Button radius="full" className="bg-[#1C9BEF]">
                post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
