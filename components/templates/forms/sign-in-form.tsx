"use client";

import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoginFormType } from "@/lib/types";
import { useState } from "react";
import { loginAPI, profileAPI } from "@/services/auth";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";

type FormType = z.infer<typeof formSchema>;

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(8),
});

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);

  const { refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: profileAPI,
  });

  const router = useRouter();

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // handle form
  const onSubmit = async (credentials: LoginFormType) => {
    setIsLoading(true);
    const { res, error } = await loginAPI(credentials);
    if (error) {
      toast.error(error.message);
      return;
    }
    const data = res?.data;
    if (data.twoFactor) {
      router.push("two-factor");
    } else {
      Cookies.set("token", data.token, {
        expires: 1,
      });
      router.push("/main");
      refetch();
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-[448px]">
      <h1 className="text-4xl mb-4 font-bold">Access your account</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="pl-2 font-semibold text-base">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Enter your email address"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center pl-2 pr-4">
                  <FormLabel className="font-semibold text-base">
                    Password
                  </FormLabel>
                  <Link href="/reset-password">Forgot?</Link>
                </div>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Enter your password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isLoading}
            size="lg"
            className="w-full"
          >
            {isLoading ? "loading ..." : "Login"}
          </Button>
          <Button variant="ghost" size="lg" className="w-full">
            Create a new account
          </Button>
        </form>
      </Form>
    </div>
  );
}
