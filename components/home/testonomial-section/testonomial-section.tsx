"use client";
import { Deck, DeckCards, DeckEmpty, DeckItem } from "@/components/ui/deck";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MoveRight, MoveLeft } from "lucide-react";
import Image from "next/image";

const TestimonialSectionUI = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Manager, Acme Inc.",
      content:
        "Working with Radiance Consulting has been a game-changer. Their expertise helped us scale faster than we imagined.",
      avatar: "/avatars/sarah.jpg",
    },
    {
      id: 2,
      name: "James Lee",
      role: "Founder, StartupX",
      content:
        "The professionalism and creativity were beyond our expectations. Highly recommended!",
      avatar: "/avatars/james.jpg",
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "HR Head, GlobalTech",
      content:
        "Their team provided top-notch talent solutions. We couldn’t be happier with the results.",
      avatar: "/avatars/priya.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right"
  >("left");

  const nextCardLeft = () => {
    setAnimationDirection("left");
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev + 1 >= testimonials.length ? 0 : prev + 1
      );
    }, 0);
  };

  const nextCardRight = () => {
    setAnimationDirection("right");
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev + 1 >= testimonials.length ? 0 : prev + 1
      );
    }, 0);
  };

  return (
    <section className="w-full px-4 py-8 lg:py-16 lg:px-6">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8">
        {/* Heading */}
        <div className="w-full flex flex-col gap-2 items-center">
          <h2 className="text-2xl font-bold">Our students</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            laborum.
          </p>
        </div>

        {/* Deck Section */}
        <div className="space-y-4 w-full">
          <Deck className="w-full mx-auto h-[320px]">
            <DeckCards
              animateOnIndexChange
              className="w-full h-full"
              currentIndex={currentIndex}
              indexChangeDirection={animationDirection}
              onCurrentIndexChange={setCurrentIndex}
            >
              {testimonials.map((t, index: number) => (
                <DeckItem
                  key={t.id}
                  className="flex flex-col items-center justify-center gap-4 text-center p-2 shadow-none border-none w-full"
                >
                  <p className="text-lg italic leading-relaxed text-muted-foreground text-center w-full">
                    “{t.content}”
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="text-left">
                      <h3 className="font-semibold">{t.name}</h3>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </DeckItem>
              ))}
            </DeckCards>
            <DeckEmpty>No more testimonials</DeckEmpty>
          </Deck>

          {/* Navigation */}
          <div className="flex w-full items-center justify-center pt-8">
            <div className="flex gap-3">
              <Button
                disabled={currentIndex >= testimonials.length}
                onClick={nextCardLeft}
                size="sm"
                variant="outline"
              >
                <MoveLeft size={20} />
              </Button>
              <Button
                disabled={currentIndex >= testimonials.length}
                onClick={nextCardRight}
                size="sm"
                variant="outline"
              >
                <MoveRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSectionUI;
