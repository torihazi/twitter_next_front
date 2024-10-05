import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { SubmitHandler, useForm } from "react-hook-form";

import { z } from "zod";

import { LogoImage } from "@/components/logo-image";

import { zodResolver } from "@hookform/resolvers/zod";

import { usersPartialSchema } from "@/prisma/generated/zod/modelSchema/usersSchema";
import { InputPasswordField } from "@/components/input-password-field";
import { InputTextField } from "@/components/input-text-field";

import { useSignin, useSignup } from "@/lib/api/auth-user";
import { useRouter } from "next/router";
import { AuthButton } from "@/components/auth-button";
import { Apple, Atom } from "lucide-react";
import { Divider } from "@nextui-org/divider";
import { DividerWithText } from "@/components/divider-with-text";

type SigninModalTypes = {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
};

const usersSigninSchema = usersPartialSchema.merge(
  z.object({
    password: z.string().min(6, "at least 6 characters").optional(),
  })
);

export type usersSignin = z.infer<typeof usersSigninSchema>;

export const SigninModal = ({
  isOpen,
  onOpen,
  onOpenChange,
}: SigninModalTypes) => {
  const router = useRouter();
  const { signin } = useSignin({
    onSuccess: () => {
      router.push("/tweets");
    },
  });
  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(usersSigninSchema),
  });

  const onSubmit: SubmitHandler<usersSignin> = (data) => {
    signin(data);
  };

  return (
    <Modal
      // TODO
      // 画面幅でsizeをfullにするかxlにするかの処理を入れ込む
      size="xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
    >
      <ModalContent className="p-3">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col items-center">
              <LogoImage width={20} height={20} />
            </ModalHeader>
            <ModalBody>
              <h3 className="font-bold text-3xl md:text-4xl mb-[32px]">
                Xにログイン
              </h3>
              <AuthButton
                className="bg-white border-1 border-slate-400 text-black w-full"
                startContent={<Atom />}
              >
                Googleのアカウントで登録
              </AuthButton>
              <AuthButton
                className="bg-white border-1 border-slate-400 text-black w-full"
                startContent={<Apple />}
              >
                Appleのアカウントで登録
              </AuthButton>

              <DividerWithText className="w-full">または</DividerWithText>
              <form
                className="flex flex-col gap-3"
                id="signin"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <InputTextField form={form} name="email" />
                <InputPasswordField form={form} />
                <Button
                  className={`w-full ${
                    !form.formState.isValid
                      ? "bg-gradient-to-r from-slate-500 cursor-not-allowed"
                      : "bg-gradient-to-tr from-sky-400 to-lime-300 text-white shadow-lg"
                  }`}
                  disabled={!form.formState.isValid}
                  form="signin"
                  type="submit"
                >
                  ログイン
                </Button>
              </form>
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="faded" className="w-full">
                パスワードを忘れた方はこちら
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
