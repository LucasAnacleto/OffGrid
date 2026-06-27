"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, LockKeyhole, Mail, Skull, TriangleAlert } from "lucide-react";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import { loginSchema } from "../schema";
import { useLogin } from "../api/use-login";

type SignInValues = z.infer<typeof loginSchema>;

export const SignInCard = () => {
  const { mutate } = useLogin();

  const form = useForm<SignInValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: SignInValues) => {
    mutate({ json: values });
  };

  const emailError = form.formState.errors.email?.message;
  const passwordError = form.formState.errors.password?.message;

  return (
    <section
      className="relative z-10 mx-auto max-w-full pt-4 text-black"
      style={{ width: "min(680px, calc(100vw - 48px))" }}
    >
      <div className="mb-10 flex justify-center">
        <h1 className="-rotate-2 bg-pink-500 px-6 py-3 text-5xl font-black uppercase leading-none text-black shadow-[6px_6px_0_0_#000]">
          Login
        </h1>
      </div>

      <p className="mx-auto mb-8 max-w-[440px] px-4 py-2 text-center text-lg font-black uppercase leading-tight">
        Use suas credenciais para acessar o painel administrativo.
      </p>

      <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="email"
            className="relative z-10 mb-1 inline-flex bg-black px-2 py-1 text-base font-black uppercase leading-none text-white"
          >
            E-mail
          </label>

          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              className="h-12 rounded-none border-2 border-black bg-white px-5 pr-12 text-base font-bold text-black shadow-[4px_4px_0_0_#000] placeholder:text-zinc-600 focus-visible:ring-0"
              aria-invalid={!!emailError}
              {...form.register("email")}
            />
            <Mail className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-black" />
          </div>

          {emailError ? (
            <p className="text-sm font-black uppercase text-pink-500">
              {emailError}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="password"
            className="relative z-10 mb-1 inline-flex bg-black px-2 py-1 text-base font-black uppercase leading-none text-white"
          >
            Senha
          </label>

          <div className="relative">
            <Input
              id="password"
              type="password"
              placeholder="********"
              className="h-12 rounded-none border-2 border-black bg-white px-5 pr-12 text-base font-bold text-black shadow-[4px_4px_0_0_#000] placeholder:text-zinc-600 focus-visible:ring-0"
              aria-invalid={!!passwordError}
              {...form.register("password")}
            />
            <LockKeyhole className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-black" />
          </div>

          {passwordError ? (
            <p className="text-sm font-black uppercase text-pink-500">
              {passwordError}
            </p>
          ) : null}
        </div>

        <div className="flex items-center justify-between gap-4 text-sm font-black uppercase">
          <label className="flex items-center gap-3">
            <Checkbox className="size-6 rounded-none border-2 border-black bg-white" />
            Lembrar-me
          </label>
          <button
            type="button"
            className="border-b-2 border-pink-500 font-black uppercase leading-none"
          >
            Esqueceu sua senha?
          </button>
        </div>

        <Button
          type="submit"
          className="h-14 w-full rounded-none border-2 border-black bg-pink-500 text-2xl font-black uppercase text-black shadow-[5px_5px_0_0_#000] hover:bg-pink-500 hover:text-black"
        >
          Entrar
          <ArrowRight className="size-7" />
        </Button>

        <div className="flex items-center">
          <div className="h-px flex-1 bg-black" />
          <span className="bg-black px-3 py-1 text-base font-black uppercase text-white">
            Ou
          </span>
          <div className="h-px flex-1 bg-black" />
        </div>

        <Button
          type="button"
          variant="secondary"
          className="h-12 w-full rounded-none border-2 border-black bg-white text-lg font-black uppercase text-black shadow-[4px_4px_0_0_#000] hover:bg-white"
        >
          <FaGithub className="size-6" />
          Entrar com Github
        </Button>

        <div className="relative min-h-24 overflow-hidden bg-black px-7 py-5 text-white shadow-[4px_4px_0_0_#000]">
          <div className="relative z-10 flex items-center gap-5 pr-0 sm:pr-28">
            <TriangleAlert className="size-12 shrink-0 fill-pink-500 text-pink-500" />
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-pink-500">
                Esta e uma area restrita.
              </p>
              <p className="mt-2 text-xs leading-tight">
                Se voce nao deveria estar aqui, feche esta pagina agora.
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 right-5 hidden h-full w-28 sm:block">
            <Skull className="absolute right-4 top-1/2 size-20 -translate-y-1/2 rotate-12 text-white/80" />
            <span className="absolute bottom-7 right-0 h-1 w-24 -rotate-12 bg-pink-500" />
            <span className="absolute bottom-5 right-2 h-1 w-20 -rotate-12 bg-pink-500" />
            <span className="absolute bottom-3 right-7 h-1 w-14 -rotate-12 bg-pink-500" />
          </div>
        </div>
      </form>
    </section>
  );
};
