import { Input } from "@nextui-org/input";
import { UseFormReturn } from "react-hook-form";

export const InputTextField = ({
  form,
  name,
}: {
  form: UseFormReturn;
  name: string;
}) => {
  return (
    <Input
      {...form.register(name)}
      label={name}
      variant="bordered"
      autoComplete="off"
      isInvalid={!!form.formState.errors[name]}
      errorMessage={
        form.formState.errors[name] &&
        (form.formState.errors[name]?.message as string)
      }
    />
  );
};
