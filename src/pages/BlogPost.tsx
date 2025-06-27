import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import Layout from "../components/layout/Layout";
import { format } from "date-fns";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="container px-4 py-32 mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">Article not found</h1>
          <p className="mb-8 text-slate">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const formattedDate = format(new Date(post.date), 'MMMM d, yyyy');

  // Debug image path
  console.log('Image path:', post.coverImage);

  return (
    <Layout>
      <article className="pt-16 pb-24">
        <div className="container px-4 mx-auto">
          {/* Back button */}
          <div className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center font-mono text-aqua hover:underline"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to all articles
            </Link>
          </div>

          {/* Article header */}
          <header className="mb-12">
            <div className="flex items-center font-mono text-sm text-aqua mb-4">
              <Calendar size={16} className="mr-2" />
              <span>{formattedDate}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-light mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-sm font-mono px-2 py-1 rounded bg-navy-light text-aqua"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="aspect-[21/9] w-full overflow-hidden rounded-lg">
              <img 
                src={post.coverImage} 
                alt={post.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Image failed to load:', post.coverImage);
                  e.currentTarget.src = '/placeholder.svg';
                }}
                onLoad={() => {
                  console.log('Image loaded successfully:', post.coverImage);
                }}
              />
            </div>
          </header>

          <Separator className="my-10 bg-slate-dark" />

          {/* Article content */}
          <div className="max-w-3xl mx-auto prose prose-invert prose-headings:text-slate-light prose-h1:text-3xl prose-h1:font-bold prose-h2:text-2xl prose-h2:font-bold prose-h3:text-xl prose-h3:font-bold prose-p:text-slate prose-a:text-aqua prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-light prose-code:text-aqua prose-code:bg-navy-light prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-navy-light prose-pre:border prose-pre:border-slate-dark">
            <ReactMarkdown>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
