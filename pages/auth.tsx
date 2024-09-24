import { AuthButton } from "@/components/auth-button";
import { Divider } from "@/components/divider";
import { AuthTemplate } from "@/layouts/auth-template";
import { Button } from "@nextui-org/button";
import { Apple, Atom } from "lucide-react";

import Image from "next/image";

const AuthPage = () => {
  return (
    <AuthTemplate>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="w-auto p-[32px] flex justify-center items-center flex-grow">
          <Image src="/logo-black.png" alt="x-icon" width={300} height={300} />
        </div>
        <div className="max-w-[800px] flex flex-col p-[16px]">
          <h1 className="font-bold text-6xl md:text-7xl my-[48px]">
            すべての話題が、ここに。
          </h1>
          <h3 className="font-bold text-3xl md:text-4xl mb-[32px]">
            今すぐ参加しましょう
          </h3>

          <div className="flex flex-col">
            <AuthButton
              className="bg-white border-1 border-slate-400"
              startContent={<Atom />}
            >
              Googleのアカウントで登録
            </AuthButton>
            <AuthButton
              className="bg-white border-1 border-slate-400"
              startContent={<Apple />}
            >
              Appleのアカウントで登録
            </AuthButton>
            {/* TODO childrenありの自作Dividerを作る */}
            <Divider>または</Divider>
            <AuthButton className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
              アカウントを作成
            </AuthButton>
            <div className="my-2">
              <span className="inline-block w-[300px] text-tiny leading-3">
                アカウントを登録することにより、利用規約とプライバシーポリシー（Cookieの使用を含む）に同意したとみなされます。
              </span>
            </div>
            <div className="mt-3">
              <h4 className="font-bold text-2xl mb-2">
                アカウントをお持ちの場合
              </h4>
              <AuthButton className="bg-gradient-to-tr from-sky-400 to-lime-300 text-white">
                ログイン
              </AuthButton>
            </div>
          </div>
        </div>
      </div>
    </AuthTemplate>
  );
};

export default AuthPage;
