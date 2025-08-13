"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod/v3";
import { useForm } from "react-hook-form";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconWorldWww,
} from "@tabler/icons-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SocialLinkType = {
  icon: React.ReactNode;
  url: string;
  title?: string;
};

const ContactUsPage = () => {
  return (
    <section className="w-full min-h-screen ">
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold">Get in Touch</h1>
        <p className="pt-4">Get A Full Time Job In USA In No Time</p>

        <div className="pt-8 w-full grid lg:grid-cols-2 gap-8">
          <div>
            <ContactDetails />
          </div>
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
  const FormSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    email: z.string().email("Invalid email address"),
    phone: z.string(),
    message: z.string(),
    subject: z.string(),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
      subject: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <Card className="w-full rounded-lg">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>
          Enter your details below to get in touch with us.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <Form {...form}>
          <form
            // onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4"
          >
            <div className="w-full grid lg:grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Deo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full grid lg:grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Deo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your message here..."
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

const ContactDetails = () => {
  const socialLink: SocialLinkType[] = [
    {
      icon: <IconBrandFacebook stroke={2} size={30} />,
      title: "Facebook",
      url: "https://www.facebook.com",
    },
    {
      icon: <IconBrandLinkedin stroke={2} size={30} />,
      title: "Linkedin",
      url: "https://www.facebook.com",
    },
    {
      icon: <IconBrandInstagram stroke={2} size={30} />,
      title: "Instagram",
      url: "https://www.facebook.com",
    },
    {
      icon: <IconWorldWww stroke={2} size={30} />,
      title: "Website",
      url: "https://www.facebook.com",
    },
  ];
  return (
    <section className="w-full h-full py-2">
      <Card>
        <CardHeader>
          <CardTitle>Contact Details</CardTitle>
        </CardHeader>
        <CardContent className="w-full flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="w-full flex gap-2 text-lg md:text-xl items-center">
              <Mail size={20} />
              <span>Email:</span>
            </div>
            <div className="pl-9">
              <p className="text-muted-foreground">johndoe@example.com</p>
              <p className="text-muted-foreground">johndoe@example.com</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-full flex gap-2 text-lg md:text-xl items-center">
              <Phone size={20} />
              <span>Phone:</span>
            </div>
            <div className="pl-8">
              <p className="text-muted-foreground">+1 123 456 7890</p>
              <p className="text-muted-foreground">+1 123 456 7890</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-full flex gap-2 text-lg md:text-xl items-center">
              <MapPin size={20} />
              <span>Contact:</span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="pl-8">
                <span className="font-semibold">USA:</span>
                <p className="text-muted-foreground">
                  1309 Coffeen Ave, Suite # 3060, Sheridan, WY, 82801
                </p>
              </div>
              <div className="pl-8">
                <span className="font-semibold ">India:</span>
                <p className="text-muted-foreground">
                  4th Floor Shree Square A, Near GTPL House off Sindhu Bhavan
                  Marg, Ahmedabad, Gujarat. 380054
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-full flex gap-2 text-lg md:text-xl items-center">
              <Globe size={20} />
              <span>Follw us:</span>
            </div>
            <div className="w-full flex gap-4 items-center justify-end">
              {socialLink.map((item: SocialLinkType, idx: number) => (
                <Link href={item.url} className="" key={idx}>
                  <Tooltip>
                    <TooltipTrigger> {item.icon}</TooltipTrigger>
                    <TooltipContent>
                      <p>{item.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
