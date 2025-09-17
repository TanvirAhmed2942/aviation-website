import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from 'next/image';
import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Private Aviation",
    excerpt:
      "Discover how technology is shaping the future of private flights...",
    author: "Alex Johnson",
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "Industry Trends",
    image:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    categoryColor: "bg-blue-500",
  },
  {
    id: 2,
    title: "Top 5 Private Jet Destinations for 2025",
    excerpt: "Explore the most luxurious and exclusive destinations...",
    author: "Sarah Williams",
    date: "March 10, 2025",
    readTime: "7 min read",
    category: "Travel",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    categoryColor: "bg-green-500",
  },
  {
    id: 3,
    title: "Sustainable Aviation: The Green Revolution",
    excerpt: "How private aviation is embracing sustainability...",
    author: "Michael Brown",
    date: "March 5, 2025",
    readTime: "6 min read",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    categoryColor: "bg-emerald-500",
  },
];

type postType = {
  post: {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    categoryColor: string;
  };
};

const BlogCard: React.FC<postType> = ({ post }) => {
  return (
    <Card className="overflow-hidden group p-0 hover:shadow-lg transition-all duration-300 h-full cursor-pointer flex flex-col">
      <div className="relative flex-shrink-0">
        <div className="h-48 sm:h-56 md:h-48 lg:h-56 xl:h-64 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
      </div>

      <CardContent className="p-4 sm:p-5 md:p-4 lg:p-5 xl:p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 flex-wrap">
          <span className="whitespace-nowrap">{post.date}</span>
          <span>•</span>
          <Badge
            variant="secondary"
            className={`${post.categoryColor} text-white border-0 text-xs px-2 py-1`}
          >
            {post.category}
          </Badge>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 sm:mb-6 flex-grow line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto flex-wrap gap-2">
          <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
            By {post.author}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="text-xs sm:text-sm border px-3 py-1.5 sm:px-4 sm:py-2 h-auto font-medium"
          >
            Read More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const BlogSection = () => {
  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-0">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Latest from Our Blog
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:hidden">
              Insights and trends in private aviation
            </p>
          </div>

          <Button
            variant="ghost"
            className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-medium"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 mb-6 sm:mb-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden flex justify-center mt-2">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-medium"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;