import { SignUp } from '@clerk/nextjs';
import React from 'react'

export default function Page() {
    return (
        <main className="min-h-screen flex items-center justify-center">
          <SignUp
            path="/register"
            afterSignUpUrl={"/login"}
            signInUrl="/login"
            routing="path"
          />
        </main>
      );
}
