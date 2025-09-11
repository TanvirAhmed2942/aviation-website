import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Private Aviation",
    excerpt: "Discover how technology is shaping the future of private flights...",
    author: "Alex Johnson",
    date: "March 15, 2025",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    categoryColor: "bg-blue-500"
  },
  {
    id: 2,
    title: "Top 5 Private Jet Destinations for",
    excerpt: "Explore the most luxurious and exclusive destinations...",
    author: "Sarah Williams",
    date: "March 10, 2025",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    categoryColor: "bg-green-500"
  },
  {
    id: 3,
    title: "Sustainable Aviation: The Green",
    excerpt: "How private aviation is embracing sustainability...",
    author: "Michael Brown",
    date: "March 5, 2025",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    categoryColor: "bg-emerald-500"
  }
];


type postType = {
  post: any
}

const BlogCard: React.FC<postType> = ({ post }) => {
  return (
    <Card className="overflow-hidden group p-0 hover:shadow-lg transition-all duration-300 h-full cursor-pointer">
      <div className="relative">
        <div
          className="h-64 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
        </div>
      </div>

      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <span>{post.date}</span>
          <span>•</span>
          <Badge variant="secondary" className={`${post.categoryColor} text-white border-0 text-xs`}>
            {post.category}
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm text-gray-500">By {post.author}</span>
          <Button
            variant="ghost"
            size="sm"
            className="border px-4  py-2 h-auto font-medium"
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
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Latest from Our Blog
            </h2>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden flex justify-center">
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