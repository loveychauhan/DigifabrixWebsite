import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Solutions from "./page/Solutions";
import OEE from "./page/OEE";
import Blog from "./page/Blog";
import About from "./page/About";
import { Route, Routes } from "react-router-dom";
import Career from "./page/Career";
import ScrollToTop from "./utils/Scroll";
import Home from "./page/Home";
import DojoLanding from "./page/DOJO";
import Price from "./page/Price";
import EnvironmentMonitoringSystem from "./page/EnvironmentMonitoringSystem";

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/oee-monitoring-software" element={<OEE />} />
        <Route
          path="/solutions/dojo-workforce-intelligence"
          element={<DojoLanding />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/solutions/environment-monitoring-system"
          element={<EnvironmentMonitoringSystem />}
        />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/price" element={<Price />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
