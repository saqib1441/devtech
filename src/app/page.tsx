import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <main className="bg-primary">
      <Navbar />
      <Header />
      <AboutUs />
      <Portfolio />
      <Team />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Home;
