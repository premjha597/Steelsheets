import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FeaturesBar from "@/components/FeaturesBar";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import InterestForm from "@/components/InterestForm";

const Index = () => (
  <Layout>
    <HeroSection />
    <FeaturesBar />
    <AboutSection />
    <ProductsSection />
    <WhyChooseUs />
    <TestimonialsSection />
    <InterestForm />
  </Layout>
);

export default Index;
