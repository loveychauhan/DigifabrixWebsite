import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Solutions from "./page/Solutions";
import WhyUs from "./component/WhyUs";
import OEE from "./page/OEE";
import Features from "./page/Feature";
import Testimonials from "./page/Testimonial";
import { Route, Routes } from "react-router-dom";
import Career from "./page/Career";
import ScrollToTop from "./utils/Scroll";
import Home from "./page/Home";

function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/oee" element={<OEE />} />
        <Route path="/features" element={<Features />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
