import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import WhySection from "@/components/WhySection";
import PartnersSection from "@/components/PartnersSection";
import ClientsSection from "@/components/ClientsSection";
import AboutSection from "@/components/AboutSection";
import CoveragesSection from "@/components/CoveragesSection";
import AssistancesSection from "@/components/AssistancesSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemsSection />
        <WhySection />
        <ClientsSection />
        <AboutSection />
        <PartnersSection />
        <CoveragesSection />
        <AssistancesSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
