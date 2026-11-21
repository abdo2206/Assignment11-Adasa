
import { Link } from "react-router-dom";
import { CiClock2 } from "react-icons/ci";
import { GoArrowLeft } from "react-icons/go";


export default function BlogGridCard({ article }) {
  return (
      <article className="group card overflow-hidden">
      <Link to={`/blog/${article.slug}`} className="block">

        <div className="relative h-52 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
              {article.category}
            </span>
          </div>
        </div>

        <div className="p-6">

          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
            <span className="flex items-center gap-1">
              <CiClock2 className="w-4 h-4" />
              {article.readTime}
            </span>

            <span className="w-1 h-1 bg-neutral-600 rounded-full" />

            <span>
              {new Date(article.date).toLocaleDateString("ar-EG", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
            {article.title}
          </h3>

          <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-[#262626]">

            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
              />

              <div>
                <p className="text-sm font-medium text-white">
                  {article.author.name}
                </p>

                <p className="text-xs text-neutral-500">
                  {article.author.role}
                </p>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
              <GoArrowLeft className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300" />
            </div>

          </div>
        </div>
      </Link>
    </article>
  )
}



