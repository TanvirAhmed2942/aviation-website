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
      <div className=" max-w-4xl mx-auto py-8">
        {/* Featured Image Card */}
        <Card className="mb-6 overflow-hidden border-0 shadow-none">
          <img
            src={blogArticles[0].image}
            alt="Private Jet"
            className="w-full h-auto rounded-sm aspect-video object-cover"
          />
        </Card>

        {/* Metadata Section */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-4">
          <span>{blogArticles[0].date}</span>
          <Separator orientation="vertical" className="h-4" />
          <Badge variant="secondary" className="rounded-md">
            {blogArticles[0].category}
          </Badge>
          <Separator orientation="vertical" className="h-4" />
          <div className="flex items-center gap-1.5">
            <Avatar className="w-5 h-5">
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <span>By {blogArticles[0].author}</span>
          </div>
        </div>

        {/* Article Title */}
        <CardTitle className="text-3xl font-extrabold tracking-tight mb-6">
          {blogArticles[0].title}
        </CardTitle>

        {/* Article Body */}
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="prose prose-gray max-w-none p-0 [&_h3]:text-xl [&_h3]:font-semibold [&_p]:text-muted-foreground [&_p]:leading-relaxed">
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
        <div className="mt-10">
          <h3 className="text-sm font-medium text-foreground mb-4">
            Share this article
          </h3>
          <div className="flex flex-wrap gap-3">
            {socialShareButtons.map((button) => (
              <Button
                key={button.id}
                variant="outline"
                size="sm"
                className="text-xs font-medium"
                onClick={() => window.open(button.href, "_blank")}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8">
        <RelatedArticles />
      </div>
    </>
  );
}

const RelatedArticles = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-foreground mb-4">
          Related Articles
        </h3>
        <span className="text-sm text-muted-foreground flex items-center gap-2 hover:text-primary cursor-pointer">
          View All
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogArticles
          .slice(1, 6) // Skip the first article (current one) and show next 5
          .map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden p-0 transition-all hover:shadow-lg"
            >
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
                  <span className="text-muted-foreground">
                    By {post.author}
                  </span>
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
    </>
  );
};
