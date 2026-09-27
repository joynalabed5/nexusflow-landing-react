import BrandLogo from "./components/BrandLogo";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="bg-black text-[#ededed] font-sans antialiased selection:bg-white selection:text-black overflow-x-hidden">
      <Header />
      <Hero />
      <BrandLogo />
      <Features />
      <Testimonial />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
