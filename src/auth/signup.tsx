import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import userLogo from "@/assets/login-user-logo.png";
import { useNavigate } from "react-router-dom";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";

function Signup() {
  const form = useForm();
  const navigate = useNavigate();

  async function onSubmit(values: any) {
    try {
      const res = await fetch("http://localhost:8000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      toast("Profile created", {
        description: `Success`,
      });
      navigate("/login");
    } catch (error) {
      toast.error("ss");
      console.log("error");
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div
        className="min-w-[400px] border-grey p-4 border-2 border-gray-600 flex flex-col 
      justify-center items-center gap-4 rounded-lg"
      >
        <img src={userLogo} alt="user logo" />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full flex flex-col items-center justify-center"
          >
            {/* Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full"
                      placeholder="Enter user name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="bg-white text-black font-semibold text-base w-40"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
