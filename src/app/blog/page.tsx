// app/blog/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Card, CardFooter, CardHeader } from "../../components/ui/card";
import { useRouter } from "next/navigation";

// Mock data
const blogPosts: Array<{
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
  href: string;
}> = [
  {
    id: 1,
    title: "The Future of Private Aviation",
    excerpt:
      "Discover how technology is shaping the future of private flights...",
    image: "/images/blog/image1.jpg",
    date: "March 15, 2025",
    category: "Industry Trends",
    author: "Alex Johnson",
    href: "/blog/post-details/1234567890",
  },
  {
    id: 2,
    title: "Top 5 Private Jet Destinations for 25",
    excerpt: "Explore the most luxurious and exclusive destinations...",
    image: "/images/blog/image2.jpg",
    date: "March 10, 2025",
    category: "Travel",
    author: "Sarah Williams",
    href: "/blog/post-details/1234567890",
  },
  {
    id: 3,
    title: "Sustainable Aviation: The Green",
    excerpt: "How private aviation is embracing sustainability...",
    image: "/images/blog/image3.jpg",
    date: "March 5, 2025",
    category: "Sustainability",
    author: "Michael Brown",
    href: "/blog/post-details/1234567890",
  },
  {
    id: 4,
    title: "Sustainable Aviation: The Green",
    excerpt: "How private aviation is embracing sustainability...",
    image: "/images/blog/image4.png",
    date: "March 5, 2025",
    category: "Sustainability",
    author: "Michael Brown",
    href: "/blog/post-details/1234567890",
  },
  {
    id: 5,
    title: "The Future of Private Aviation",
    excerpt:
      "Discover how technology is shaping the future of private flights...",
    image: "/images/blog/image5.jpg",
    date: "March 15, 2025",
    category: "Industry Trends",
    author: "Alex Johnson",
    href: "/blog/post-details/1234567890",
  },
  {
    id: 6,
    title: "Top 5 Private Jet Destinations for 25",
    excerpt: "Explore the most luxurious and exclusive destinations...",
    image: "/images/blog/image6.jpg",
    date: "March 10, 2025",
    category: "Travel",
    author: "Sarah Williams",
    href: "/blog/post-details/1234567890",
  },
];

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const router = useRouter();
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-muted-foreground mt-2">
          Latest insights and updates from the world of private aviation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <Card className="overflow-hidden p-0 transition-all hover:shadow-lg">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader className="p-4 pt-4">
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.category}</span>
              </div>
              <h3 className="font-semibold text-lg">{post.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {post.excerpt}
              </p>
            </CardHeader>
            <CardFooter className="p-4 pt-0">
              <div className="text-sm w-full flex justify-between items-center ">
                <span className="text-muted-foreground">By {post.author}</span>
                <button
                  type="button"
                  className="text-sm border px-2 py-1 rounded cursor-pointer font-medium text-primary hover:underline"
                  onClick={() => {
                    router.push(post.href);
                  }}
                >
                  Read More
                </button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-12">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          Page {currentPage} of {totalPages}
        </p>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            «
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            _
          </Button>
          {[...Array(totalPages)].map((_, i) => (
            <Button
              key={i + 1}
              variant={i + 1 === currentPage ? "default" : "outline"}
              size="sm"
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            +
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            »
          </Button>
        </div>
        <select
          className="mt-4 sm:mt-0 border rounded-md px-3 py-1 text-sm"
          defaultValue="7"
        >
          <option value="7">7 / page</option>
          <option value="10">10 / page</option>
          <option value="15">15 / page</option>
        </select>
      </div>
    </div>
  );
}
