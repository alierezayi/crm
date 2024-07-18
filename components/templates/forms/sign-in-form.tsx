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
import { loginAPI } from "@/services/auth";
import { toast } from "sonner";
import { useState } from "react";
import { useSession } from "@/context/session-context";

type FormType = z.infer<typeof formSchema>;

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(8),
});

export default function SignInForm() {
  const { addSession } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // handle form
  const onSubmit = async (values: LoginFormType) => {
    setIsLoading(true);

    const { res, error } = await loginAPI(values);

    if (res?.status !== 200 || error) {
      toast.error("Login failed", {
        description: error?.message,
        action: {
          label: "OK",
          onClick: () => console.log("OK"),
        },
      });
    }

    if (res) {
      const data = res.data;

      if (data.towFactor) {
        router.push("/two-factor");
      } else {
        // set token to cookies
        addSession(data.token);

        router.push("/dashboard");

        toast.success("Successfuly", {
          description: data.message,
          action: {
            label: "OK",
            onClick: () => console.log("OK"),
          },
        });
      }
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
            {isLoading ? "processing . . ." : "Login"}
          </Button>
          <Button variant="ghost" size="lg" className="w-full">
            Create a new account
          </Button>
        </form>
      </Form>
    </div>
  );
}
