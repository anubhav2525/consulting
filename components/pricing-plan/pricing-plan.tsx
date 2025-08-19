"use client";
// import NumberFlow from "@number-flow/react";
import { NumberTicker } from "../ui/number-ticker";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const plans = [
  {
    id: "hobby",
    name: "Hobby",
    price: {
      monthly: "Free forever",
      yearly: "Free forever",
    },
    description:
      "The perfect starting place for your web app or personal project.",
    features: [
      "50 API calls / month",
      "60 second checks",
      "Single-user account",
      "5 monitors",
      "Basic email support",
    ],
    cta: "Get started for free",
  },
  {
    id: "pro",
    name: "Pro",
    price: {
      monthly: 90,
      yearly: 75,
    },
    description: "Everything you need to build and scale your business.",
    features: [
      "Unlimited API calls",
      "30 second checks",
      "Multi-user account",
      "10 monitors",
      "Priority email support",
    ],
    cta: "Subscribe to Pro",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: {
      monthly: "Get in touch for pricing",
      yearly: "Get in touch for pricing",
    },
    description: "Critical security, performance, observability and support.",
    features: [
      "You can DDOS our API.",
      "Nano-second checks.",
      "Invite your extended family.",
      "Unlimited monitors.",
      "We'll sit on your desk.",
    ],
    cta: "Contact us",
  },
];

const PricingPlan = ({ bgColour }: { bgColour?: string }) => {
  const [frequency, setFrequency] = useState<string>("monthly");
  return (
    <div className={`w-full px-4 py-8 lg:py-16 lg:px-6 ${bgColour}`}>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="w-full flex flex-col gap-2 items-center">
          <h2 className="text-2xl font-bold">Simple, transparent pricing</h2>
          <p className="text-gray-600">
            Managing a business is hard enough, so why not make your life
            easier? Our pricing plans are simple, transparent and scale with
            you.
          </p>
        </div>
        <Tabs defaultValue={frequency} onValueChange={setFrequency}>
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">
              Yearly
              <Badge variant="secondary">20% off</Badge>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="grid w-full max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <Card
              className={cn(
                "relative w-full text-left",
                plan.popular && "ring-2 ring-blue-500"
              )}
              key={plan.id}
            >
              {plan.popular && (
                <Badge className="-translate-x-1/2 -translate-y-1/2 absolute top-0 left-1/2 rounded-full bg-blue-500 text-white">
                  Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="font-medium text-xl">
                  {plan.name}
                </CardTitle>
                <CardDescription>
                  <p>{plan.description}</p>
                  {typeof plan.price[frequency as keyof typeof plan.price] ===
                  "number" ? (
                    <div className="flex font-semibold gap-1 lg:text-lg">
                      <span>$</span>
                      <NumberTicker
                        value={
                          plan.price[
                            frequency as keyof typeof plan.price
                          ] as number
                        }
                        className="whitespace-pre-wrap font-medium tracking-tighter text-black"
                      />
                      <span>{`/month, billed ${frequency}.`}</span>
                    </div>
                  ) : (
                    <span className="font-medium text-foreground">
                      {plan.price[frequency as keyof typeof plan.price]}.
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2">
                {plan.features.map((feature, index) => (
                  <div
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                    key={index}
                  >
                    <BadgeCheck className="h-4 w-4" />
                    {feature}
                  </div>
                ))}
              </CardContent>
              {/* <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "secondary"}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter> */}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
