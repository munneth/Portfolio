
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import { format } from "date-fns";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  slug: string;
  coverImage?: string;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const formattedDate = format(new Date(post.date), 'MMMM d, yyyy');
  
  return (
    <Link 
      to={`/blog/${post.slug}`} 
      className={cn(
        "block group transition-all duration-300 h-full",
        featured ? "md:flex gap-8" : ""
      )}
    >
      <div 
        className={cn(
          "relative aspect-video overflow-hidden rounded-lg mb-4",
          featured ? "md:flex-1" : ""
        )}
      >
        <div className="absolute inset-0 bg-aqua/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        <img 
          src={post.coverImage || '/placeholder.svg'} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className={cn(
        "space-y-3",
        featured ? "md:flex-1" : ""
      )}>
        <div className="flex items-center font-mono text-sm text-aqua mb-1">
          <Calendar size={14} className="mr-1" />
          <span>{formattedDate}</span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-light group-hover:text-aqua transition-colors">
          {post.title}
        </h3>
        
        <p className="text-slate line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {post.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs font-mono px-2 py-1 rounded bg-navy-light text-aqua"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="text-aqua font-mono text-sm pt-2">
          Read more →
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
