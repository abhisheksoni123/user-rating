import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import userLogo from "@/assets/login-user-logo.png";

function Login() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div
        className="min-w-[400px] border-grey p-4 border-2 border-gray-600 flex flex-col 
      justify-center items-center gap-4 rounded-lg"
      >
        <img src={userLogo} alt="user logo" />

        <Input type="email" placeholder="Enter email id" className="" />
        <Input type="password" placeholder="Enter password" />
        <Button className="bg-white text-black font-semibold text-base">
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
