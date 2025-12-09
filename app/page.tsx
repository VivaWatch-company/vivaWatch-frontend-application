"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type LoginFormInput = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();

  function onSubmit(data: LoginFormInput) {
    console.log(data);
    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-sm rounded-2xl p-8 border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-6">
          VivaWatch
        </h1>

        <p className="text-gray-500 text-center mb-8">Entre na sua conta</p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              {...register("email", { required: "Informe o e-mail" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                         outline-none transition"
              placeholder="seuemail@exemplo.com"
            />

            {errors.email && (
              <span className="text-sm text-red-500">
                {String(errors.email.message)}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              {...register("password", { required: "Informe a senha" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                         outline-none transition"
              placeholder="••••••••"
            />

            {errors.password && (
              <span className="text-sm text-red-500">
                {String(errors.password.message)}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl
                       font-medium transition shadow-sm"
          >
            Entrar
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} VivaWatch
        </div>
      </div>
    </main>
  );
}
