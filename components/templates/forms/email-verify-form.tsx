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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../../ui/input-otp";
import useOtpCounter from "@/hooks/useOtpCounter";

type FormType = z.infer<typeof formSchema>;

const formSchema = z.object({
  code: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export default function EmailVerifyForm() {
  const email = "im1.bitcode@gmail.com";

  // counter
  const { timeLeft, formatTime } = useOtpCounter(300);

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  });

  // handle form
  function onSubmit(values: FormType) {
    console.log(values);
  }

  return (
    <div className="w-full max-w-[448px]">
      <h1 className="text-4xl mb-4 font-bold">Email verification</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between mb-4">
                  <FormLabel className="pl-2 font-semibold text-base">
                    One-Time Password
                  </FormLabel>

                  <div>{formatTime(timeLeft)}</div>
                </div>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                      <InputOTPSlot index={1} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                      <InputOTPSlot index={4} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription className="mt-4">
                  Enter the 6-digit code sent to{" "}
                  <span className="font-bold">{email}</span>, check your inbox.{" "}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit"  className="w-full">
            Verify
          </Button>
          <Button
            variant="ghost"
            disabled={timeLeft !== 0}
            
            className="w-full"
          >
            Resend code
          </Button>
        </form>
      </Form>
    </div>
  );
}
