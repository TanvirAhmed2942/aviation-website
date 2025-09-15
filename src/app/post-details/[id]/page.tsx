import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ArticlePage() {
  return (
    <div className=" max-w-4xl mx-auto py-8">
      {/* Featured Image Card */}
      <Card className="mb-6 overflow-hidden border-0 shadow-none">
        <img
          src="/images/blog/image1.jpg"
          alt="Private Jet"
          className="w-full h-auto rounded-sm aspect-video object-cover"
        />
      </Card>

      {/* Metadata Section */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-4">
        <span>March 15, 2025</span>
        <Separator orientation="vertical" className="h-4" />
        <Badge variant="secondary" className="rounded-md">
          Industry Trends
        </Badge>
        <Separator orientation="vertical" className="h-4" />
        <div className="flex items-center gap-1.5">
          <Avatar className="w-5 h-5">
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <span>By Alex Johnson</span>
        </div>
      </div>

      {/* Article Title */}
      <CardTitle className="text-3xl font-extrabold tracking-tight mb-6">
        The Future of Private Aviation
      </CardTitle>

      {/* Article Body */}
      <Card className="border-0 shadow-none bg-transparent">
        <CardContent className="prose prose-gray max-w-none p-0 [&_h3]:text-xl [&_h3]:font-semibold [&_p]:text-muted-foreground [&_p]:leading-relaxed">
          <p>
            The private aviation industry is undergoing a remarkable transformation, driven by technological advancements and changing consumer preferences. In this article, we explore the latest trends and innovations that are shaping the future of private flights.
          </p>

          <h3>The Rise of Electric Aircraft</h3>
          <p>
            Electric aviation is no longer a distant dream. Companies around the world are investing heavily in developing electric aircraft that promise to revolutionize short-haul private flights. These aircraft offer reduced operational costs and environmental impact while maintaining the luxury and convenience that private aviation clients expect.
          </p>

          <h3>Advanced Booking Platforms</h3>
          <p>
            Digital transformation has reached private aviation, with sophisticated booking platforms making it easier than ever to arrange private flights. These platforms leverage artificial intelligence to optimize routes, predict maintenance needs, and enhance the overall customer experience.
          </p>
        </CardContent>
      </Card>

      {/* Share Section */}
      <div className="mt-10">
        <h3 className="text-sm font-medium text-foreground mb-4">Share this article</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" size="sm" className="text-xs font-medium">
            Twitter
          </Button>
          <Button variant="outline" size="sm" className="text-xs font-medium">
            Facebook
          </Button>
          <Button variant="outline" size="sm" className="text-xs font-medium">
            LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
}