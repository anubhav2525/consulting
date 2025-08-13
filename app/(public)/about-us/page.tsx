import { Divide } from "lucide-react";
import Image from "next/image";
import React from "react";

type TeamCardType = {
  name: string;
  designation: string;
  imageUrl: string;
};

const AboutUsPage = () => {
  return (
    <section className="w-full min-h-screen">
      {/* background image for top */}
      <div className="w-full min-h-[50%] lg:min-h-[80%] bg-black">
        <Image
          src={"/assets/images/background.avif"}
          alt="Our Services"
          className="w-full h-full object-cover"
          height={800}
          width={1000}
        />
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center py-10">
        <div className="flex flex-col gap-6 px-2">
          <h1 className="text-black text-4xl font-bold">About us</h1>
          <p className="text-slate-600">
            As an experienced outsourcing partner, Radiance Technologies is
            providing solutions on various fronts such as Staffing and
            Recruitment, Placement services, Automation and Design engineering
            and Administrative services.
          </p>
        </div>

        {/* cta section */}
        <div>
          <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <Image
              className="w-full dark:hidden"
              height={400}
              width={400}
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
              alt="dashboard image"
            />

            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Let's create more tools and ideas that brings us together.
              </h2>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                id voluptatum et voluptatibus incidunt illum perspiciatis
                necessitatibus tenetur obcaecati sed sapiente, architecto saepe
                eum facilis commodi veritatis modi labore ipsum at quos,
                inventore in hic non! Quisquam architecto labore delectus?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* our team section */}
      <OurTeam />

      {/* success card section */}

      <div className="px-4 py-8 text-center lg:py-16 lg:px-6 bg-blue-400">
        <dl className="flex items-center justify-center gap-6 text-gray-900  dark:text-white">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              developers
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              contributors
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              organizations
            </dd>
          </div>
        </dl>
      </div>
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
      <div className="w-full px-4 py-8 bg-blue-400">
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-white">Our Team</h2>
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            quis pariatur soluta quas velit officiis, maxime blanditiis
            consequatur molestiae sit quos voluptatibus laboriosam explicabo
            doloremque, non sint animi. Nisi provident quasi cum? Dolorum
            placeat blanditiis et dolores commodi quidem quis quaerat delectus,
            praesentium totam suscipit, soluta unde sint deleniti ut maiores
            iure similique! Eveniet nisi impedit, repellendus eos fugit illo
            dolorum atque ad eligendi quibusdam soluta earum explicabo modi
            rerum aperiam iure, sapiente mollitia aspernatur reiciendis, animi
            cumque tempora? Magnam voluptatem minus repudiandae debitis tempore
            nostrum ab delectus molestias, facilis atque. Aliquid explicabo
            earum voluptatum suscipit magni temporibus, illo, soluta corporis
            sit magnam natus unde dolores maiores placeat iste sed velit. Fugiat
            magnam sapiente temporibus, labore unde dolorem dicta eos ipsa
            aliquam reprehenderit corrupti, blanditiis sequi doloribus error.
            Inventore est, sint nisi repellat doloremque accusamus aspernatur
            laborum placeat repudiandae sequi ut sunt voluptatum architecto
            incidunt, velit corrupti recusandae neque. Quaerat aperiam
            consequatur vitae repudiandae perspiciatis voluptas exercitationem
            qui quos mollitia quas sunt natus deserunt reprehenderit, doloribus
            molestiae tempora dicta. Laudantium voluptates voluptatibus dolore,
            quas laborum atque dolorem. Fugiat natus deserunt debitis
            necessitatibus veritatis quia alias, sit quod ducimus quasi
            consequatur illum esse voluptas tenetur. Blanditiis id eum adipisci
            tenetur in?
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
