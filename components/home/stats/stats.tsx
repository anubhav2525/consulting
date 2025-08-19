import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

type ArrayType = {
  title: string;
  values: string;
};

const StatsUI = () => {
  const data: ArrayType[] = [
    { title: "Clients", values: "70+" },
    { title: "Projects", values: "150+" },
    { title: "Placements", values: "10+" },
    { title: "Retention Rate", values: "82%" },
  ];
  return (
    <section className="w-full bg-slate-50">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 px-4 py-8 lg:py-16 lg:px-6">
        <div className="w-full flex flex-col gap-2 items-center">
          <h2 className="text-2xl font-bold">We Deliver Results</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            laborum.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((item: ArrayType, idx: number) => (
            <Card className="rounded shadow-none border-none" key={idx}>
              <CardHeader>
                <CardTitle className="text-lg font-semibold md:text-xl text-center lg:text-2xl xl:text-3xl">
                  {item.values}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">{item.title}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsUI;
