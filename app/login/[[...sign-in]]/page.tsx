import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <SignIn
        path="/login"
        afterSignInUrl={"/create"}
        signUpUrl="/register"
        routing="path"
      />
    </main>
  );
};


