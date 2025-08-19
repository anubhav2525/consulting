"use client";
import React, { useState } from "react";
import { Calendar, User, ArrowRight, Search, Filter, Tag } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Posts", count: 24 },
    { id: "strategy", name: "Strategy", count: 8 },
    { id: "digital-transformation", name: "Digital Transformation", count: 6 },
    { id: "leadership", name: "Leadership", count: 5 },
    { id: "innovation", name: "Innovation", count: 3 },
    { id: "case-studies", name: "Case Studies", count: 2 },
  ];

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

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);
  return (
    <section className="w-full h-full">
      <div className="w-full min-h-[50%]">
        <Image
          src={"/assets/images/background.avif"}
          alt="Blogs"
          className="w-full h-full object-cover"
          height={800}
          width={1000}
        />
      </div>

      {/* Search and Filter Section */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-4 py-8 lg:py-16 lg:px-0">
        <div className="flex flex-col gap-6 px-2">
          <h1 className="text-black text-4xl font-bold">Blogs</h1>
          <p className="text-slate-600">
            As an experienced outsourcing partner&#44; Radiance Technologies is
            providing solutions on various fronts such as Staffing and
            Recruitment&#44; Placement services&#44; Automation and Design
            engineering and Administrative services.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between w-full py-10">
          {/* Search Bar */}
          <div className="relative flex-1 md:max-w-md w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-4 overflow-x-auto pb-2 lg:pb-0 w-full md:w-auto">
            <Filter className="text-gray-400 h-5 w-5 flex-shrink-0" />
            <div className="flex gap-2 overflow-scroll whitespace-nowrap no-scrollbar">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Featured Articles
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post: BlogPost) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Latest Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <LatestPost key={post.id} {...post} />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No articles found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or selecting a different category.
            </p>
          </div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsPage;

const BlogCard = ({
  id,
  title,
  excerpt,
  author,
  date,
  category,
  readTime,
  image,
  featured,
  tags,
}: BlogPost) => {
  return (
    <article
      key={id}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      {featured && (
        <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-600 relative">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute top-4 left-4">
            <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          </div>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <span>{readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <Button
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            variant="secondary"
          >
            Read More
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
};

export const LatestPost = ({
  id,
  title,
  excerpt,
  author,
  date,
  category,
  readTime,
  image,
  featured,
  tags,
}: BlogPost) => {
  return (
    <article
      key={id}
      className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <div className="aspect-video bg-gradient-to-r from-gray-400 to-gray-600"></div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full capitalize">
            {category.replace("-", " ")}
          </span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
            Read
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </article>
  );
};
