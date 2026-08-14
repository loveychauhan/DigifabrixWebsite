import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

const BlogArticleLayout = ({
  category,
  date,
  title,
  description,
  children,
  relatedArticles = [],
}) => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* ARTICLE HERO */}
      <header className="border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-24 lg:px-8 lg:pb-20 lg:pt-32">
          <Link
            to="/blog"
            className="mb-10 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Insights
          </Link>

          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span>{category}</span>
              <span aria-hidden="true">•</span>
              <time>{date}</time>
              <span aria-hidden="true">•</span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
              {description}
            </p>
          </div>
        </div>
      </header>

      {/* ARTICLE BODY */}
      <article className="mx-auto grid max-w-5xl gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_220px] lg:px-8 lg:py-20">
        <div className="article-content min-w-0">{children}</div>

        {/* SIDE PANEL */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 border-l border-slate-800 pl-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              DigiFabrix Insights
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Practical insights for manufacturers working on production
              monitoring, OEE, traceability, and shopfloor digitalization.
            </p>

            <Link
              to="/solutions"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition hover:text-white"
            >
              Explore solutions
              <ArrowRight size={15} />
            </Link>
          </div>
        </aside>
      </article>

      {/* RELATED ARTICLES */}
      {relatedArticles.length > 0 && (
        <section className="border-t border-slate-800 bg-slate-900/30">
          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Continue Reading
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Related manufacturing insights
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {relatedArticles.map((article) => (
                <Link
                  key={article.href}
                  to={article.href}
                  className="group rounded-xl border border-slate-800 bg-slate-950 p-6 transition hover:border-slate-700"
                >
                  <p className="text-xs text-slate-500">{article.category}</p>

                  <h3 className="mt-3 text-lg font-semibold leading-7 text-slate-100 group-hover:text-white">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {article.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-slate-300">
                    Read article
                    <ArrowRight size={15} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ARTICLE TYPOGRAPHY */}
      <style>{`
        .article-content h2 {
          color: #f8fafc;
          font-size: 1.75rem;
          line-height: 1.25;
          font-weight: 600;
          margin-top: 3rem;
          margin-bottom: 1rem;
        }

        .article-content h3 {
          color: #f1f5f9;
          font-size: 1.25rem;
          line-height: 1.5;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }

        .article-content p {
          color: #94a3b8;
          font-size: 1rem;
          line-height: 1.9;
          margin-bottom: 1.5rem;
        }

        .article-content ul,
        .article-content ol {
          margin: 1.5rem 0;
          padding-left: 1.25rem;
        }

        .article-content li {
          color: #cbd5e1;
          margin-bottom: 0.8rem;
          line-height: 1.75;
        }

        .article-content ul li {
          list-style: disc;
        }

        .article-content ol li {
          list-style: decimal;
        }

        .article-content strong {
          color: #e2e8f0;
          font-weight: 600;
        }

        .article-content a {
          color: #e2e8f0;
          text-decoration: underline;
          text-underline-offset: 4px;
          text-decoration-color: #475569;
        }

        .article-content a:hover {
          text-decoration-color: #cbd5e1;
        }

        .article-content blockquote {
          border-left: 2px solid #475569;
          padding-left: 1.25rem;
          margin: 2rem 0;
          color: #cbd5e1;
        }
      `}</style>
    </main>
  );
};

export default BlogArticleLayout;
