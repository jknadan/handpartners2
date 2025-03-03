"use client";

import Link from "next/link";
import { Button } from "src/components/ui/button";
import { Checkbox } from "src/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "src/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import HandPartnersLogo from "../../../../../public/images/handpartners_logo.png";
import { Input } from "src/components/ui/input";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  email: z.string().email({ message: "이메일 형식이 올바르지 않습니다." }),
  isAgree: z
    .boolean()
    .refine((val) => val === true, { message: "약관에 동의해야 합니다." }),
  password: z
    .string()
    .min(2, { message: "비밀번호는 2자 이상 20자 이하입니다." })
    .max(20, { message: "비밀번호는 2자 이상 20자 이하입니다." }),
});

export default function Login() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      isAgree: false,
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // console.log(data);
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
    router.push("/");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center w-1/2 bg-white border shadow-lg "
      >
        <div className="flex flex-col items-center justify-center p-4 px-8">
          <Image src={HandPartnersLogo} alt="logo" />
          <div className="flex flex-col items-center w-full gap-4 p-4">
            <div className="mb-4 text-xl font-bold">비밀유지 서약</div>
            <div className="text-center">
              본 심사위원은 스포츠 창업 데모데이에 <br />
              출품된 아이디어가 출품자의 지식재산임을 인정합니다. 심사과정에서
              <br />
              열람한 내용을 출품자의 서면 허락없이 사용하거나 외부에 발설하는 등
              <br />
              출품자의 지식재산권을 침해 할 만한 행위를 하지 않겠으며, 이로 인한
              <br />
              법적 문제 발생 시 민·형사상 책임을 지도록 하겠습니다.
              <br />
            </div>
            <FormField
              control={form.control}
              name="isAgree"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start gap-2 p-4 rounded-md">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>위 비밀유지 서약에 동의합니다.</FormLabel>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="이메일 주소" {...field} />
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
                  <FormControl>
                    <Input placeholder="비밀번호" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full mt-4" type="submit">
            로그인
          </Button>
        </div>
      </form>
    </Form>
  );
}
