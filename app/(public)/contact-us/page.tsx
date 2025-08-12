"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod/v3";
import { useForm } from "react-hook-form";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactUsPage = () => {
  return (
    <section className="w-full min-h-screen ">
      <div className="max-w-7xl mx-auto py-10">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="pt-4">Get A Full Time Job In USA In No Time</p>

        <div className="pt-8 w-full grid lg:grid-cols-2 gap-8">
          <div></div>
          <div className="flex flex-col gap-6 items-center rounded-lg border p-4 bg-gray-100">
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;

const LoginForm = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>
          Enter your details below to get in touch with us.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
            <div className="flex flex-col gap-3">
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline underline-offset-4">
              Sign up
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
