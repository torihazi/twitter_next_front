import { Input } from "@nextui-org/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

export const InputPasswordField = ({ form }: { form: UseFormReturn }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      {...form.register("password")}
      label="password"
      variant="bordered"
      isInvalid={!!form.formState.errors.password}
      errorMessage={
        form.formState.errors.password &&
        (form.formState.errors.password.message as string)
      }
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? <EyeOff /> : <Eye />}
        </button>
      }
      type={isVisible ? "text" : "password"}
    />
  );
};
