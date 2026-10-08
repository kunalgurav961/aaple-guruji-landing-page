import HeroSection from "./components/HeroSection";
import CTASection from "./components/CTASection";
import PoojaSection from "./components/PoojaSection";
import TestimonialsSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="w-full overflow-hidden bg-[#080604]">
      <HeroSection />
      <CTASection />
      <PoojaSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default App;
