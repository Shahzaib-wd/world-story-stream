import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BlogGrid from "@/components/BlogGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BlogGrid />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
