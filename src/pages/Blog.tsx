
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import BlogCard from "../components/blog/BlogCard";
import { blogPosts } from "../data/blogPosts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get unique tags across all blog posts
  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  ).sort();

  // Filter posts based on search term and selected tag
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  return (
    <Layout>
      <div className="container px-4 mx-auto py-16 md:py-24">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-light mb-6">Blog</h1>
          <p className="text-slate text-lg">
            Thoughts, ideas, and insights about software development, tech industry trends, and personal growth.
          </p>
        </div>

        {/* Search and filter */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-10">
          <div className="relative md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate" size={18} />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-navy-light border-slate-dark focus:border-aqua text-slate-light"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              onClick={() => setSelectedTag(null)}
              variant={selectedTag === null ? "default" : "outline"}
              size="sm" 
              className={selectedTag === null 
                ? "bg-aqua text-navy hover:bg-aqua/90"
                : "text-slate hover:text-aqua hover:border-aqua"
              }
            >
              All
            </Button>
            
            {allTags.map((tag) => (
              <Button 
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                variant={tag === selectedTag ? "default" : "outline"}
                size="sm"
                className={tag === selectedTag 
                  ? "bg-aqua text-navy hover:bg-aqua/90"
                  : "text-slate hover:text-aqua hover:border-aqua"
                }
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured article */}
        {filteredPosts.length > 0 && (
          <div className="mb-16">
            <BlogCard post={filteredPosts[0]} featured />
          </div>
        )}

        {/* Article grid */}
        {filteredPosts.length > 1 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <div key={post.id} className="h-full">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate text-lg">No articles found matching your criteria.</p>
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default Blog;
