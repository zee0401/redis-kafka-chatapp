"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

const LoginModal = () => {
  const handleLogin = () => {
    signIn("google", {
      redirect: true,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Getting Start</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl">
            Welcome to Blaze Chat
          </AlertDialogTitle>
          <AlertDialogDescription>
            Blaze Chat is a secure and private chat application that allows you
            to create and join chat rooms with ease.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Button onClick={handleLogin}>
          <Image
            src="/images/google.png"
            alt="google"
            width={25}
            height={25}
            className="mr-4"
          />
          Continue with Google
        </Button>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LoginModal;
