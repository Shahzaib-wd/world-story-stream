import { useState, useEffect } from "react";
import { Clock, Eye, Share2, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredStories = [
    {
      id: 1,
      title: "Breaking: Revolutionary AI Technology Transforms Global Healthcare",
      excerpt: "A groundbreaking artificial intelligence system is revolutionizing patient care across 50+ countries, reducing diagnosis time by 85%.",
      category: "Technology",
      readTime: "5 min read",
      views: "45.2K",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop",
      isBreaking: true
    },
    {
      id: 2,
      title: "Climate Summit 2024: Nations Unite for Ambitious Carbon Goals",
      excerpt: "World leaders announce unprecedented climate commitments as global temperatures continue to rise at alarming rates.",
      category: "Environment",
      readTime: "8 min read",
      views: "32.1K",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=800&h=500&fit=crop",
      isBreaking: false
    },
    {
      id: 3,
      title: "Economic Markets Surge Amid Tech Innovation Boom",
      excerpt: "Global markets reach new heights as technology sector drives unprecedented growth across emerging economies.",
      category: "Business",
      readTime: "6 min read",
      views: "28.7K",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
      isBreaking: false
    }
  ];

  const trendingTopics = [
    "AI Healthcare Revolution",
    "Climate Action 2024",
    "Tech Market Surge",
    "Global Economic Outlook",
    "Renewable Energy Breakthrough"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredStories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentStory = featuredStories[currentSlide];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trending Badge */}
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium text-sm">Trending Now</span>
            </div>

            {/* Breaking News Badge */}
            {currentStory.isBreaking && (
              <Badge variant="destructive" className="animate-pulse">
                🔴 BREAKING NEWS
              </Badge>
            )}

            {/* Main Headline */}
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20">
                {currentStory.category}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                {currentStory.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {currentStory.excerpt}
              </p>
            </div>

            {/* Meta Information */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{currentStory.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>{currentStory.views} views</span>
              </div>
              <Button variant="ghost" size="sm" className="p-0 h-auto">
                <Share2 className="w-4 h-4 mr-1" />
                Share
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="primary-gradient text-primary-foreground shadow-medium hover:shadow-strong transition-smooth">
                Read Full Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-border">
                View All Breaking News
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-strong">
                <img
                  src={currentStory.image}
                  alt={currentStory.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Story Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {featuredStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-smooth ${
                      index === currentSlide
                        ? "bg-white shadow-glow"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trending Topics Bar */}
        <div className="mt-12 p-6 bg-card rounded-2xl shadow-soft border border-border">
          <div className="flex flex-wrap items-center gap-4">
            <h3 className="font-heading font-semibold text-card-foreground">
              Trending Topics:
            </h3>
            <div className="flex flex-wrap gap-2">
              {trendingTopics.map((topic, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;