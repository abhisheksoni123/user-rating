import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import userLogo from "@/assets/login-user-logo.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

function Login() {
  const form = useForm();
  const navigate = useNavigate();

  async function onSubmit(values: any) {
    try {
      const response = await fetch("http://localhost:8000/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error.message || "Error in login");
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
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="w-full"
                      placeholder="Enter email Id"
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
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="bg-white hover:bg-white text-black font-semibold text-base w-40"
              type="submit"
              disabled={!form.formState.isValid}
            >
              Submit
            </Button>
            <Link to="/signup" className="text-gray-400 underline">
              Create an account
            </Link>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Login;
