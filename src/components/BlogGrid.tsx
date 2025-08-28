import { useState } from "react";
import { Clock, Eye, Heart, Share2, Filter, Grid, List, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BlogGrid = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Renewable Energy: Solar Innovation Breakthrough",
      excerpt: "Scientists develop new solar panel technology that increases efficiency by 40% while reducing costs significantly.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Dr. Sarah Johnson",
      category: "Environment",
      country: "USA",
      readTime: "7 min read",
      views: "15.3K",
      likes: 284,
      publishedAt: "2024-01-15",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Global Economic Shifts: Emerging Markets Lead Growth",
      excerpt: "Analysis of how developing nations are driving global economic recovery post-pandemic.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Michael Chen",
      category: "Business",
      country: "Singapore",
      readTime: "12 min read",
      views: "8.7K",
      likes: 156,
      publishedAt: "2024-01-14",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Revolutionary AI Helps Doctors Diagnose Rare Diseases",
      excerpt: "Machine learning algorithm achieves 95% accuracy in identifying rare genetic conditions.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Dr. Elena Rodriguez",
      category: "Technology",
      country: "Spain",
      readTime: "9 min read",
      views: "22.1K",
      likes: 432,
      publishedAt: "2024-01-13",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 4,
      title: "Climate Action: Nordic Countries Lead Carbon Neutral Push",
      excerpt: "Scandinavian nations implement groundbreaking policies to achieve carbon neutrality by 2030.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Erik Andersen",
      category: "Environment",
      country: "Denmark",
      readTime: "6 min read",
      views: "11.2K",
      likes: 203,
      publishedAt: "2024-01-12",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "Space Exploration: Private Companies Make History",
      excerpt: "Commercial space missions achieve new milestones in lunar exploration and asteroid mining.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Commander James Wright",
      category: "Science",
      country: "USA",
      readTime: "15 min read",
      views: "31.5K",
      likes: 687,
      publishedAt: "2024-01-11",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 6,
      title: "Cultural Renaissance: Digital Art Transforms Museums",
      excerpt: "Virtual reality and AI create immersive cultural experiences in world-renowned museums.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Isabella Romano",
      category: "Entertainment",
      country: "Italy",
      readTime: "8 min read",
      views: "9.4K",
      likes: 178,
      publishedAt: "2024-01-10",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      featured: false
    }
  ];

  const categories = ["all", "Technology", "Environment", "Business", "Science", "Entertainment", "Health", "Politics"];
  const countries = ["all", "USA", "Singapore", "Spain", "Denmark", "Italy", "Germany", "Japan", "Brazil"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesCountry = selectedCountry === "all" || post.country === selectedCountry;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesCountry && matchesSearch;
  });

  const BlogCard = ({ post, isListView = false }: { post: typeof blogPosts[0], isListView?: boolean }) => (
    <article className={`group cursor-pointer transition-smooth hover:blog-card-hover ${
      isListView ? "flex gap-6 p-6" : "block"
    } bg-card rounded-2xl shadow-soft border border-border overflow-hidden`}>
      {/* Image */}
      <div className={`relative overflow-hidden ${
        isListView ? "w-80 h-48 flex-shrink-0" : "aspect-[16/10] w-full"
      } rounded-xl`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
        {post.featured && (
          <Badge className="absolute top-3 left-3 accent-gradient text-accent-foreground">
            Featured
          </Badge>
        )}
        <div className="absolute top-3 right-3">
          <Button variant="ghost" size="sm" className="glass-effect text-white hover:bg-white/20">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className={`${isListView ? "flex-1" : "p-6"} space-y-4`}>
        {/* Category & Meta */}
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-primary border-primary/20">
            {post.category}
          </Badge>
          <span className="text-xs text-muted-foreground">{post.country}</span>
        </div>

        {/* Title & Excerpt */}
        <div className="space-y-2">
          <h3 className={`font-heading font-semibold text-card-foreground group-hover:text-primary transition-smooth ${
            isListView ? "text-xl" : "text-lg"
          } line-clamp-2`}>
            {post.title}
          </h3>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Author & Date */}
        <div className="flex items-center space-x-3 text-sm text-muted-foreground">
          <span className="font-medium">{post.author}</span>
          <span>•</span>
          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{post.views}</span>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
            <Heart className="w-4 h-4 mr-1" />
            {post.likes}
          </Button>
        </div>
      </div>
    </article>
  );

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Latest Stories & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover compelling stories and expert analysis from around the globe
          </p>
        </div>

        {/* Filters & Search */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search articles, authors, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-secondary/50 border-border"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Filters:</span>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country === "all" ? "All Countries" : country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* View Toggle */}
            <div className="flex items-center bg-secondary rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "primary-gradient text-primary-foreground" : ""}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "primary-gradient text-primary-foreground" : ""}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredPosts.length} of {blogPosts.length} articles
          </p>
        </div>

        {/* Blog Grid/List */}
        <div className={`${
          viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            : "space-y-6"
        }`}>
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} isListView={viewMode === "list"} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-border">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;