"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IconClipboard } from "@tabler/icons-react";

const BlogDetailPage = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Card className="w-full rounded-md shadow-md">
        <CardHeader className="w-full flex items-center gap-2 justify-between">
          <div className="flex flex-col gap-3">
            <div className="font-semibold">John Deo</div>
            <div className="w-full flex items-center gap-3">
              <div>August 10, 2025</div>
              <div className="w-1 h-1 bg-gray-700 rounded-full" />
              <div>5 min read</div>
            </div>
          </div>
          <div className="">
            <Button variant="outline" className="">
              <IconClipboard stroke={2} size={20} className="mr-2" /> Copy Link
            </Button>
          </div>
        </CardHeader>
        <CardContent className="w-full flex flex-col gap-6 py-5">
          <div className="font-semibold text-xl md:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eos.
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            officia aperiam, eos minima, saepe neque hic laudantium libero dolor
            repudiandae illum modi. Ut, obcaecati magni ratione, hic reiciendis
            suscipit deserunt deleniti aperiam nobis molestias veritatis
            dolorum. Sequi commodi adipisci, laboriosam eius hic velit omnis
            consequuntur ad quae quo temporibus quaerat corrupti rem consectetur
            natus ratione provident a sunt explicabo odio sapiente mollitia
            assumenda? Maiores dolore aspernatur magni beatae! Consequuntur est
            sequi quibusdam corporis? Delectus rem itaque corrupti neque error
            quia ullam quis fugiat cupiditate commodi illo temporibus mollitia
            obcaecati iste at magnam, molestias illum. Quos dolorum obcaecati
            totam! Aperiam, ab!
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default BlogDetailPage;
