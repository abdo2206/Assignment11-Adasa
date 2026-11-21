import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";


export default function FeaturedArticleCard({ article }) {
  return (
    <article className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">
      <Link to={`blog/${article.slug}`} className="block">
        <div className="grid md:grid-cols-2 gap-0">

          <div className="relative h-72 md:h-[400px] overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {article.featured && (
              <span className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                <FaStar size={14} fill="currentColor" />
                مميز
              </span>
            )}
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full">
                {article.category}
              </span>

              <span className="flex items-center gap-1 text-sm text-neutral-500">
                <CiClock2 size={16} />
                {article.readTime} دقائق للقراءة
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
              {article.title}
            </h2>

            <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
              {article.description}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="text-sm font-semibold text-white">
                    {article.author.name}
                  </p>
                  <p className="text-xs text-neutral-500">
                    {article.date}
                  </p>
                </div>
              </div>

              <span className="flex items-center gap-2 text-orange-500 font-semibold text-sm">
                اقرأ المقال
                <GoArrowLeft size={20} />
              </span>
            </div>
          </div>

        </div>
      </Link>
    </article>
  );
};

