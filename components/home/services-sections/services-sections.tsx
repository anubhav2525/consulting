import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";

type SeriveType = {
  title: string;
  description: string;
  url: string;
};

const ServicesSectionUI = () => {
  const services: SeriveType[] = [
    {
      title: "Staffing Services",
      description:
        "Providing skilled professionals to meet short- and long-term project needs.",
      url: "/staffing-services",
    },
    {
      title: "Placement Services",
      description:
        "Connecting companies with the right talent for permanent roles.",
      url: "/placement-services",
    },
    {
      title: "Automation & Design Engineering",
      description:
        "Streamlining processes and boosting efficiency with tailored automation solutions.",
      url: "/staffing-services",
    },
    {
      title: "Administrative & Accounting Services",
      description:
        "Ensuring accurate, compliant, and efficient back-office operations.",
      url: "/staffing-services",
    },
    {
      title: "Business Process Optimization",
      description:
        "Improving workflows to reduce costs and enhance productivity.",
      url: "/staffing-services",
    },
    {
      title: "Strategic Advisory",
      description:
        "Offering insight-driven strategies to position your business for future growth.",
      url: "/staffing-services",
    },
  ];

  return (
    <section className="w-full">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 px-4 py-8 lg:py-16 lg:px-6">
        <div className="w-full flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Services we serve</h2>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel nihil
            dolorum voluptates tempore nesciunt officia totam itaque, eligendi
            delectus maiores?
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service: SeriveType, idx: number) => (
            <Card className="rounded shadow-none" key={idx}>
              <CardHeader>
                <CardTitle className="text-lg font-semibold md:text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>{service.description}</CardContent>
              <CardFooter>
                <Link href={service.url}>
                  <Button
                    variant="link"
                    className="text-red-500 p-0 has-[>svg]:px-0"
                  >
                    <span>Learn More</span>
                    <IconPlus stroke={2} size={20} />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionUI;
