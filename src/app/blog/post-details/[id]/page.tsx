"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Data declarations
const blogArticles = [
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
    title: "Sustainable Aviation: The Green Revolution",
    excerpt: "How private aviation is embracing sustainability...",
    image: "/images/blog/image3.jpg",
    date: "March 5, 2025",
    category: "Sustainability",
    author: "Michael Brown",
    href: "/blog/post-details/1234567890",
  },
  {
    id: 4,
    title: "Luxury Travel Trends 2025",
    excerpt: "The latest trends in luxury private jet travel...",
    image: "/images/blog/image4.png",
    date: "March 1, 2025",
    category: "Luxury",
    author: "Emma Davis",
    href: "/blog/post-details/1234567890",
  },
];

const socialShareButtons = [
  { id: 1, label: "Twitter", href: "#" },
  { id: 2, label: "Facebook", href: "#" },
  { id: 3, label: "LinkedIn", href: "#" },
];

export default function ArticlePage() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Featured Image Card */}
        <Card className="mb-4 sm:mb-6 overflow-hidden border-0 shadow-none">
          <Image
            src={blogArticles[0].image}
            alt="Private Jet"
            width={1000}
            height={500}
            className="w-full h-auto rounded-sm aspect-video object-cover"
          />
        </Card>

        {/* Metadata Section */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
          <span>{blogArticles[0].date}</span>
          <Separator orientation="vertical" className="h-3 sm:h-4" />
          <Badge variant="secondary" className="rounded-md text-xs">
            {blogArticles[0].category}
          </Badge>
          <Separator orientation="vertical" className="h-3 sm:h-4" />
          <div className="flex items-center gap-1.5">
            <Avatar className="w-4 h-4 sm:w-5 sm:h-5">
              <AvatarFallback className="text-xs">AJ</AvatarFallback>
            </Avatar>
            <span>By {blogArticles[0].author}</span>
          </div>
        </div>

        {/* Article Title */}
        <CardTitle className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 sm:mb-6">
          {blogArticles[0].title}
        </CardTitle>

        {/* Article Body */}
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="prose prose-gray max-w-none p-0 [&_h3]:text-lg sm:[&_h3]:text-xl [&_h3]:font-semibold [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:text-sm sm:[&_p]:text-base">
            <p>
              The private aviation industry is undergoing a remarkable
              transformation, driven by technological advancements and changing
              consumer preferences. In this article, we explore the latest
              trends and innovations that are shaping the future of private
              flights.
            </p>

            <h3>The Rise of Electric Aircraft</h3>
            <p>
              Electric aviation is no longer a distant dream. Companies around
              the world are investing heavily in developing electric aircraft
              that promise to revolutionize short-haul private flights. These
              aircraft offer reduced operational costs and environmental impact
              while maintaining the luxury and convenience that private aviation
              clients expect.
            </p>

            <h3>Advanced Booking Platforms</h3>
            <p>
              Digital transformation has reached private aviation, with
              sophisticated booking platforms making it easier than ever to
              arrange private flights. These platforms leverage artificial
              intelligence to optimize routes, predict maintenance needs, and
              enhance the overall customer experience.
            </p>
          </CardContent>
        </Card>

        {/* Share Section */}
        <div className="mt-8 sm:mt-10">
          <h3 className="text-sm font-medium text-foreground mb-3 sm:mb-4">
            Share this article
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {socialShareButtons.map((button) => (
              <Button
                key={button.id}
                variant="outline"
                size="sm"
                className="text-xs font-medium h-8 px-3"
                onClick={() => window.open(button.href, "_blank")}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <RelatedArticles />
      </div>
    </>
  );
}

const RelatedArticles = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base sm:text-lg font-medium text-foreground">
          Related Articles
        </h3>
        <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 sm:gap-2 hover:text-primary cursor-pointer">
          View All
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {blogArticles
          .slice(1, 4) // Show only 3 related articles for better mobile layout
          .map((post) => (
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
                  <span className="mx-1 sm:mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                <h3 className="font-semibold text-base sm:text-lg line-clamp-2">{post.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2">
                  {post.excerpt}
                </p>
              </CardHeader>
              <CardFooter className="p-3 sm:p-4 pt-0">
                <div className="text-xs sm:text-sm w-full flex justify-between items-center">
                  <span className="text-muted-foreground">
                    By {post.author}
                  </span>
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
    </>
  );
};