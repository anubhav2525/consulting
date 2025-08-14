import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

type RecommendationType = {
  title: string;
  description: string;
  url?: string;
};

const ChooseUsUI = () => {
  const recommendations: RecommendationType[] = [
    {
      title: "Proven Expertise",
      description:
        "A track record of delivering measurable results across industries.",
      url: "/staffing-services",
    },
    {
      title: "Customized Solutions",
      description: "Strategies tailored to your unique business needs.",
      url: "/staffing-services",
    },
    {
      title: "Collaborative Approach",
      description:
        "Working alongside your team to ensure seamless implementation.",
      url: "/staffing-services",
    },
    {
      title: "Innovation-Driven",
      description:
        "Leveraging the latest tools and technologies to stay ahead.",
      url: "/staffing-services",
    },
  ];

  return (
    <section className="w-full bg-slate-50">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 px-4 py-8 lg:py-16 lg:px-6">
        <div className="w-full flex flex-col gap-2 items-center">
          <h2 className="text-2xl font-bold">Why Choose Us</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            laborum.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendations.map((item: RecommendationType, idx: number) => (
            <Card className="rounded shadow-none" key={idx}>
              <CardHeader>
                <CardTitle className="text-lg font-semibold md:text-xl">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>{item.description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUsUI;
