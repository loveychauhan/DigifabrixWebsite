import { Navigate, useParams } from "react-router-dom";
import EnvironmentMonitoringBlog from "./Blogs/EnvironmentMonitoringBlog.jsx.jsx";
import OEEProductionEfficiencyBlog from "./Blogs/OEEProductionEfficiencyBlog";
import ShopfloorDigitalizationBlog from "./Blogs/ShopfloorDigitalizationBlog";

const blogPageMap = {
  "environment-monitoring-manufacturing": EnvironmentMonitoringBlog,
  "oee-production-efficiency": OEEProductionEfficiencyBlog,
  "shopfloor-digitalization-guide": ShopfloorDigitalizationBlog,
};

const BlogDetail = () => {
  const { slug } = useParams();
  const BlogPage = blogPageMap[slug];

  if (!BlogPage) {
    return <Navigate to="/404" replace />;
  }

  return <BlogPage />;
};

export default BlogDetail;
