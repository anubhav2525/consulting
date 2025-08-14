import { Button } from "@/components/ui/button";
import React from "react";
import { IconEye } from "@tabler/icons-react";
import { LatestPost } from "@/app/(public)/blogs/page";
import { Search } from "lucide-react";
import Link from "next/link";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured: boolean;
  tags: string[];
};

const BlogSectionUI = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title:
        "Strategic Digital Transformation: A Blueprint for Modern Enterprises",
      excerpt:
        "Discover how leading companies are navigating digital transformation while maintaining operational excellence and driving sustainable growth.",
      author: "Sarah Chen",
      date: "2025-08-10",
      category: "digital-transformation",
      readTime: "8 min read",
      image: "/api/placeholder/600/300",
      featured: true,
      tags: ["Digital Strategy", "Enterprise", "Innovation"],
    },
    {
      id: "2",
      title:
        "Leadership in Times of Uncertainty: Building Resilient Organizations",
      excerpt:
        "Exploring proven methodologies for organizational resilience and adaptive leadership in today's volatile business environment.",
      author: "Michael Rodriguez",
      date: "2025-08-08",
      category: "leadership",
      readTime: "6 min read",
      image: "/api/placeholder/600/300",
      featured: true,
      tags: ["Leadership", "Change Management", "Resilience"],
    },
    {
      id: "3",
      title: "Data-Driven Decision Making: From Analytics to Action",
      excerpt:
        "How to transform raw data into strategic insights that drive measurable business outcomes and competitive advantage.",
      author: "Dr. Amanda Foster",
      date: "2025-08-05",
      category: "strategy",
      readTime: "10 min read",
      image: "/api/placeholder/600/300",
      featured: false,
      tags: ["Analytics", "Strategy", "Data Science"],
    },
    {
      id: "4",
      title:
        "Innovation Framework: Scaling Creative Solutions Across Industries",
      excerpt:
        "A comprehensive guide to implementing systematic innovation processes that deliver consistent results.",
      author: "James Thompson",
      date: "2025-08-03",
      category: "innovation",
      readTime: "7 min read",
      image: "/api/placeholder/600/300",
      featured: false,
      tags: ["Innovation", "Process", "Scaling"],
    },
    {
      id: "5",
      title: "Case Study: Fortune 500 Operational Excellence Transformation",
      excerpt:
        "Deep dive into a successful operational transformation that resulted in 40% efficiency gains and $50M cost savings.",
      author: "Lisa Park",
      date: "2025-07-30",
      category: "case-studies",
      readTime: "12 min read",
      image: "/api/placeholder/600/300",
      featured: false,
      tags: ["Case Study", "Operations", "ROI"],
    },
    {
      id: "6",
      title:
        "The Future of Consulting: AI-Powered Insights and Human Expertise",
      excerpt:
        "Exploring how artificial intelligence is reshaping the consulting landscape while highlighting the irreplaceable value of human insight.",
      author: "David Kumar",
      date: "2025-07-28",
      category: "strategy",
      readTime: "9 min read",
      image: "/api/placeholder/600/300",
      featured: false,
      tags: ["AI", "Future", "Consulting"],
    },
  ];
  return (
    <section className="w-full">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 px-4 py-8 lg:py-16 lg:px-6">
        <div className="w-full grid grid-cols-3 gap-2 sm:grid-cols-7 lg:grid-cols-12">
          <div className="w-full grid col-span-2 sm:col-span-5 md:col-span-9">
            <div className="w-full flex flex-col gap-2">
              <h2 className="text-2xl font-bold">Experts Insights</h2>
              <p className="text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                nihil dolorum voluptates
              </p>
            </div>
          </div>
          <div className="w-full grid col-span-1 sm:col-span-2 md:col-span-3">
            <div className="w-full flex items-center justify-end">
              <Link href={"/blogs"}>
                <Button
                  className="w-fit inline-flex items-center justify-center gap-2"
                  variant="outline"
                >
                  <IconEye className="h-4 w-4" />
                  <span className="hidden md:flex">View All</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="py-6 w-full gap-6">
          {/* Regular Posts Grid */}
          {blogPosts.length > 0 && (
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <LatestPost key={post.id} {...post} />
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {blogPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No articles found
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSectionUI;
