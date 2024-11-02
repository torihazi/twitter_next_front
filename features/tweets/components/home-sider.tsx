import { LogoImage } from "@/components/logo-image";
import { homeSiderItems } from "../constants/home-sider-items";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthButton } from "@/components/auth-button";
import { Button } from "@nextui-org/button";

export const HomeSider = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between h-screen p-2">
      <div>
        <Button radius="full" variant="light" className="flex justify-start">
          <LogoImage width={20} height={20} />
        </Button>
        <div className="flex flex-col gap-2">
          {homeSiderItems.map((item) => (
            <Button
              key={item.href}
              className="w-fit"
              radius="full"
              variant="light"
              onPress={() => router.push(item.href)}
            >
              {item.icon}
              {item.label}
            </Button>
          ))}
          <Button
            className="bg-gradient-to-tr from-sky-400 to-lime-300 text-white w-[200px]"
            onClick={() => console.log("click")}
          >
            Post
          </Button>
        </div>
      </div>
      <Button variant="light" radius="full" className="flex justify-start">
        <LogoImage width={20} height={20} className="mr-2 flex-shrink-0" />
        <div className="flex flex-col">
          <span>Name</span>
          <sub>username</sub>
        </div>
      </Button>
    </div>
  );
};
