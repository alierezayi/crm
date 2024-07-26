"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

type FormType = z.infer<typeof formSchema>;

const formSchema = z.object({
  email: z.string().email(),
});

export default function EmailVerifyForm() {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // handle form
  function onSubmit(values: FormType) {
    console.log(values);
  }

  return (
    <div className="w-full max-w-[448px]">
      <h1 className="text-4xl mb-4 font-bold">Reset Password</h1>
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
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Reset
          </Button>
        </form>
      </Form>
    </div>
  );
}
