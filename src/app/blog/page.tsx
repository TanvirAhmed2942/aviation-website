// app/blog/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, CardFooter, CardHeader } from "../../components/ui/card";

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
  const [postsPerPage, setPostsPerPage] = useState(6);
  const router = useRouter();
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePostsPerPageChange = (value: string) => {
    setPostsPerPage(Number(value));
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Blog</h1>
        <p className="text-muted-foreground mt-2 text-sm sm:text-base">
          Latest insights and updates from the world of private aviation
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {currentPosts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden p-0 transition-all hover:shadow-lg flex flex-col h-full"
          >
            <div className="relative h-40 sm:h-48 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <CardHeader className="p-3 sm:p-4 pt-3 sm:pt-4 flex-grow">
              <div className="flex items-center text-xs sm:text-sm text-muted-foreground mb-1">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.category}</span>
              </div>
              <h3 className="font-semibold text-base sm:text-lg line-clamp-2">{post.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2">
                {post.excerpt}
              </p>
            </CardHeader>
            <CardFooter className="p-3 sm:p-4 pt-0">
              <div className="text-xs sm:text-sm w-full flex justify-between items-center">
                <span className="text-muted-foreground">By {post.author}</span>
                <button
                  type="button"
                  className="text-xs sm:text-sm border px-2 py-1 rounded cursor-pointer font-medium text-primary hover:underline"
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
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-12 space-y-4 sm:space-y-0">
        <p className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 sm:h-9 sm:w-9"
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            «
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 sm:h-9 sm:w-9"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ‹
          </Button>

          {/* Show limited page numbers on mobile */}
          {totalPages <= 5 ? (
            // Show all pages if total pages is 5 or less
            [...Array(totalPages)].map((_, i) => (
              <Button
                key={i + 1}
                variant={i + 1 === currentPage ? "default" : "outline"}
                size="sm"
                className="h-8 w-8 p-0 sm:h-9 sm:w-9"
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </Button>
            ))
          ) : (
            // Show limited pages with ellipsis on mobile
            <>
              {currentPage > 2 && (
                <Button variant="outline" size="sm" className="h-8 w-8 p-0 sm:h-9 sm:w-9" disabled>
                  ...
                </Button>
              )}

              {[
                // Always show first page
                1,
                // Show pages around current page
                currentPage - 1,
                currentPage,
                currentPage + 1,
                // Always show last page
                totalPages
              ]
                .filter((page, index, array) =>
                  page > 0 && page <= totalPages && array.indexOf(page) === index
                )
                .map((page) => (
                  <Button
                    key={page}
                    variant={page === currentPage ? "default" : "outline"}
                    size="sm"
                    className="h-8 w-8 p-0 sm:h-9 sm:w-9"
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Button>
                ))}

              {currentPage < totalPages - 1 && (
                <Button variant="outline" size="sm" className="h-8 w-8 p-0 sm:h-9 sm:w-9" disabled>
                  ...
                </Button>
              )}
            </>
          )}

          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 sm:h-9 sm:w-9"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            ›
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 sm:h-9 sm:w-9"
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            »
          </Button>
        </div>

        <div className="flex items-center">
          <select
            className="border rounded-md px-2 py-1 text-sm"
            value={postsPerPage}
            onChange={(e) => handlePostsPerPageChange(e.target.value)}
          >
            <option value="3">3 / page</option>
            <option value="6">6 / page</option>
            <option value="9">9 / page</option>
            <option value="12">12 / page</option>
          </select>
        </div>
      </div>
    </div>
  );
}