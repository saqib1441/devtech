import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <main className="bg-primary">
      <Navbar />
      <Header />
      <AboutUs />
      <Services />
      <Team />
      <Portfolio />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Home;
