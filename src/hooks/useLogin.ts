import { loginSchema } from "@/schemas/loginSchema";
import { loginTypeForm } from "@/types/loginFormValidate";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useLogin = () => {
  const {
    control,
    register,
    reset,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<loginTypeForm>({
    resolver: zodResolver(loginSchema),
    reValidateMode: "onChange",
    mode: "onTouched",
    defaultValues: {
      email: '',
      senha: ''
    }
  });

  return {
    register, errors, isSubmitting, handleSubmit, reset, control
  }
};