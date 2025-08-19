import StatsUI from "@/components/home/stats/stats";
import Image from "next/image";
import React from "react";

type TeamCardType = {
  name: string;
  designation: string;
  imageUrl: string;
};

const AboutUsPage = () => {
  const aboutContent = [
    "At Your company, we are more than just consultants — we are your trusted partners in growth. With deep industry expertise and a passion for solving complex challenges, we deliver innovative and practical solutions that empower businesses to thrive in competitive markets.",
    "From Staffing and Recruitment to Placement Services, Automation & Design Engineering, Administrative & Accounting Services, Business Process Optimization, and Strategic Advisory, our services are designed to address every aspect of your business needs. We combine strategic insight with hands-on execution to ensure sustainable results.",
  ];
  return (
    <section className="w-full h-full">
      {/* background image for top */}
      <div className="w-full min-h-[50%]">
        <Image
          src={"/assets/images/background.avif"}
          alt="Our Services"
          className="w-full h-full object-cover"
          height={800}
          width={1000}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-4 py-8 lg:py-16 lg:px-0">
        <div className="flex flex-col gap-6 px-2">
          <h1 className="text-black text-4xl font-bold">About us</h1>
          <div className="w-full flex flex-col gap-2 text-slate-600">
            {aboutContent.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-50">
        <div className="w-full max-w-7xl mx-auto">
          <div className="px-4 py-8 lg:py-16 lg:px-6 xl:gap-16 grid md:grid-cols-2 gap-6">
            <Image
              className="w-full"
              height={400}
              width={400}
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
              alt="dashboard image"
            />

            <div className="w-full flex flex-col gap-2">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Our Mission
              </h2>
              <p className="font-light text-gray-500 md:text-lg">
                To enable organizations to operate smarter&#44; faster&#44; and
                more efficiently by delivering tailored consulting solutions
                that drive measurable business outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full max-w-7xl mx-auto">
          <div className="px-4 py-8 lg:py-16 lg:px-6 xl:gap-16 grid md:grid-cols-2 gap-6">
            <Image
              className="w-full order-2"
              height={400}
              width={400}
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
              alt="dashboard image"
            />

            <div className="w-full flex flex-col gap-2 order-1">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Our Vision
              </h2>
              <p className="font-light text-gray-500 md:text-lg">
                To be recognized as a global leader in consulting&#44; known for
                transforming challenges into opportunities and ideas into
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* our team section */}
      <OurTeam />

      {/* success card section */}
      <StatsUI />
    </section>
  );
};

export default AboutUsPage;

const OurTeam = () => {
  const team: TeamCardType[] = [
    {
      name: "John Doe",
      designation: "Co-Founder",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      name: "John Doe",
      designation: "Co-Founder",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];
  return (
    <>
      <div className="w-full px-4 py-8 bg-slate-50">
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-black">Our Team</h2>
          <p className="text-gray-500">
            Our team is a blend of industry veterans&#44; problem-solvers&#44;
            and innovators who bring diverse perspectives to every project. With
            experience across multiple sectors&#44; we approach each client
            engagement with a fresh perspective&#44; ensuring our strategies
            align with your unique business goals.
          </p>
        </div>
      </div>
      <div className="w-full py-10 px-4 max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {team.map((member, index) => (
            <div key={index} className="p-4 flex flex-col items-center">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-32 h-32 md:w-64 md:h-64 rounded-full mb-4 border border-slate-200"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
