import { useState } from "react";
import { Mail, CheckCircle, Globe, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate subscription
    setIsSubscribed(true);
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive our latest insights directly in your inbox.",
    });
    setEmail("");
  };

  const stats = [
    { icon: Users, label: "Active Subscribers", value: "125K+" },
    { icon: Globe, label: "Countries Reached", value: "85+" },
    { icon: TrendingUp, label: "Weekly Growth", value: "12%" },
  ];

  return (
    <section className="py-20 subtle-gradient relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 primary-gradient rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 accent-gradient rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 primary-gradient rounded-2xl mb-6 shadow-glow">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Stay Informed, Stay Ahead
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of readers who rely on Global Insights for breaking news, expert analysis, and exclusive stories from around the world.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-card rounded-xl shadow-soft mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-heading font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Subscription Form */}
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-card border-border"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="primary-gradient text-primary-foreground shadow-medium hover:shadow-strong transition-smooth whitespace-nowrap"
                >
                  Subscribe Now
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                No spam, unsubscribe at any time. Read our{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto p-6 bg-card rounded-2xl shadow-soft border border-border">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-success" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-card-foreground mb-2">
                Welcome to Global Insights!
              </h3>
              <p className="text-muted-foreground">
                Check your inbox for a confirmation email and get ready for amazing content.
              </p>
            </div>
          )}

          {/* Newsletter Benefits */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Daily Digest",
                description: "Curated top stories delivered every morning"
              },
              {
                title: "Exclusive Insights",
                description: "Access to premium content and expert analysis"
              },
              {
                title: "Breaking Alerts",
                description: "Real-time notifications for major news events"
              },
              {
                title: "Weekly Roundup",
                description: "Comprehensive summary of global trends"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-4">
                <h4 className="font-heading font-semibold text-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;