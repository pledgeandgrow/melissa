import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import News from "./News";
import Services from "./Services";
import Layout from "./src//layouts/Layout";
import Social from './Social';
import Customers from './Customers';
const Accueil = () => {
  return (
    <Layout>
      <Home />
      {/* /Home Section */}
      {/* About Section */}
      <About />
      {/* /About Section */}
      {/* Portfolio Section */}
      {/* Services Section */}
      <Services />
      {/* /Services Section */}
      {/* Customers Section */}
      <Customers />
      {/* /Customers Section */}
      {/* News Section */}
      <News />
      {/* /News Section */}
      {/* Contact Section */}
      <Contact />
      <Social />
      {/* /Contact Section */}
    </Layout>
  );
};
export default Accueil;
