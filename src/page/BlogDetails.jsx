import { Navigate, useParams } from "react-router-dom";
import blogs from "../Constants/BlogsConstant";
import SEO from "../component/SEO";
import BlogArticleLayout from "../component/Blogs/BlogArticleLayout";

const BlogDetail = () => {
  const { slug } = useParams();

  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEO
        title={blog.metaTitle}
        description={blog.metaDescription}
        canonical={`https://digifabrix.com/blog/${blog.slug}`}
      />

      <BlogArticleLayout
        category={blog.category}
        date={blog.date}
        title={blog.title}
        description={blog.excerpt}
      >
        {blog.sections.map((section, index) => {
          if (section.type === "heading") {
            return <h2 key={index}>{section.content}</h2>;
          }

          if (section.type === "paragraph") {
            return <p key={index}>{section.content}</p>;
          }

          return null;
        })}
      </BlogArticleLayout>
    </>
  );
};

export default BlogDetail;
