import Image from "next/image";
import React from "react";

const StaffingServicesPage = () => {
  const imageUrl = "/assets/images/background.avif";
  const content = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nam veritatis vero soluta quo totam cumque voluptatum quod eaque dicta sapiente ad praesentium quas animi nulla repellendus dolore libero omnis fuga dolorum repellat, quaerat dignissimos! Odio aperiam dolorum molestiae minus odit ducimus eum hic eius maiores! Consectetur dignissimos necessitatibus voluptatem ex consequuntur? Ullam porro animi, eos et fugit voluptates delectus?",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nam veritatis vero soluta quo totam cumque voluptatum quod eaque dicta sapiente ad praesentium quas animi nulla repellendus dolore libero omnis fuga dolorum repellat, quaerat dignissimos! Odio aperiam dolorum molestiae minus odit ducimus eum hic eius maiores! Consectetur dignissimos necessitatibus voluptatem ex consequuntur? Ullam porro animi, eos et fugit voluptates delectus?",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nam veritatis vero soluta quo totam cumque voluptatum quod eaque dicta sapiente ad praesentium quas animi nulla repellendus dolore libero omnis fuga dolorum repellat, quaerat dignissimos! Odio aperiam dolorum molestiae minus odit ducimus eum hic eius maiores! Consectetur dignissimos necessitatibus voluptatem ex consequuntur? Ullam porro animi, eos et fugit voluptates delectus?",
  ];
  return (
    <>
      <div className="flex flex-col gap-6 px-2">
        <h1 className="text-black text-4xl font-bold">Our Services</h1>
        <p className="text-slate-600">
          As an experienced outsourcing partner, Radiance Technologies is
          providing solutions on various fronts such as Staffing and
          Recruitment, Placement services, Automation and Design engineering and
          Administrative services.
        </p>
      </div>

      <div className="w-full max-w-[70%] mx-auto py-10">
        <Image
          src={"/assets/images/background.avif"}
          alt="Our Services"
          className="w-full h-full object-contain rounded-lg"
          height={800}
          width={800}
        />
      </div>

      <div className="w-full flex flex-col gap-4 px-4">
        {content.map((item: string, index: number) => (
          <p key={index} className="text-slate-600 ">
            {item}
          </p>
        ))}
      </div>
    </>
  );
};

export default StaffingServicesPage;
