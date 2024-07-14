"use client";

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
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoginFormType } from "@/lib/types";

type FormType = z.infer<typeof formSchema>;

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(8),
});

export default function SignInForm() {
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
    try {
      const response = await fetch(
        "http://95.217.228.239:5000/api/Admin/login",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error(error);
    }
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
          <Button type="submit" size="lg" className="w-full">
            Login
          </Button>
          <Button variant="ghost" size="lg" className="w-full">
            Create a new account
          </Button>
        </form>
      </Form>
    </div>
  );
}
