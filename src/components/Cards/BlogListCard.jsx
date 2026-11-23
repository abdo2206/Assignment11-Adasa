
import { FiClock, FiCalendar, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function BlogListCard({ article, animationDelay = 0 }) {
  const formattedDate = new Date(article.date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article
      className="group min-w-full bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <Link
        to={`/blog/${article.slug}`}
        className="flex flex-col md:flex-row"
      >
        <div className="relative w-full md:w-72 lg:w-80 h-52 md:h-auto flex-shrink-0 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="flex-1 p-6 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
              {article.category}
            </span>

            <span className="flex items-center gap-1 text-sm text-neutral-500">
              <FiClock className="w-4 h-4" />
              {article.readTime}
            </span>

            <span className="flex items-center gap-1 text-sm text-neutral-500">
              <FiCalendar className="w-4 h-4" />
              {formattedDate}
            </span>
          </div>

          <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
            {article.title}
          </h2>

          <p className="text-neutral-400 mb-4 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]"
              />

              <div>
                <p className="text-sm font-semibold text-white">
                  {article.author.name}
                </p>

                <p className="text-xs text-neutral-500">
                  {article.author.role}
                </p>
              </div>
            </div>

            <span className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
              اقرأ المقال
              <FiArrowLeft className="w-5 h-5" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

