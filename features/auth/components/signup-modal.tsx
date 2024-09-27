import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { LogoImage } from "@/components/logo-image";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  usersPartial,
  usersPartialSchema,
} from "@/prisma/generated/zod/modelSchema/usersSchema";
import { InputPasswordField } from "@/components/input-password-field";
import { InputTextField } from "@/components/input-text-field";
import { DatePicker } from "@nextui-org/date-picker";
import { useState } from "react";
import { DateValue, parseDate } from "@internationalized/date";
import { z } from "zod";
import { useSignup } from "@/lib/api/auth-user";

type SignupModalTypes = {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
};

const usersSignupSchema = usersPartialSchema.merge(
  z.object({
    password: z.string().min(6, "at least 6 characters").optional(),
  })
);

export type usersSignup = z.infer<typeof usersSignupSchema>;

export const SignupModal = ({
  isOpen,
  onOpen,
  onOpenChange,
}: SignupModalTypes) => {
  const [value, setValue] = useState<DateValue>(parseDate("2024-04-04"));
  const { signup } = useSignup({});
  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(usersSignupSchema),
  });

  const onSubmit: SubmitHandler<usersSignup> = (data) => {
    const newData: usersSignup = {
      ...data,
      birth: value.toString(),
    };
    signup(newData);
    form.reset();
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
                アカウントを作成
              </h3>
              <form
                className="flex flex-col gap-3"
                id="signup"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <InputTextField form={form} name="name" />
                <InputTextField form={form} name="email" />
                <InputPasswordField form={form} />

                <h5 className="font-bold text-lg">生年月日</h5>
                <p className="text-gray-500 text-sm">
                  この情報は公開されません。このアカウントをビジネス、ペットなどに使う場合でも、ご自身の年齢を確認してください。
                </p>
                <DatePicker
                  label="birth"
                  variant="bordered"
                  value={value}
                  onChange={setValue}
                />
              </form>
            </ModalBody>
            <ModalFooter>
              <Button
                className={`w-full ${
                  !form.formState.isValid
                    ? "bg-gradient-to-r from-slate-500 cursor-not-allowed"
                    : "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                }`}
                disabled={!form.formState.isValid}
                form="signup"
                type="submit"
              >
                登録する
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
