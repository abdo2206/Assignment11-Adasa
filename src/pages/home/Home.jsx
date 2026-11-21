import { FaChevronLeft } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

import { IoMdInformationCircleOutline } from "react-icons/io";

import { Link } from "react-router-dom";
import { aboutStats, categories, posts } from "../../constant/constant";
import FeaturedArticleCard from "../../components/Cards/FeaturedArticleCard";
import CategoryCard from "../../components/Cards/CategoryCard";
import BlogGridCard from "../../components/Cards/BlogGridCard";
import NewsletterSection from "../../components/Newsletter/Newsletter";
import AboutStatsCard from "../../components/Cards/AboutStatsCard";

export default function Home() {
  return (
    <>
      <header className="flex relative justify-center items-center min-h-screen bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] animate-[float_6s_ease-in-out_infinite]" />

          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite_1s]" />
        </div>
        <div className="text-center py-5 relative flex flex-col justify-center items-center gap-4 text-white">
          <div className="section-label relative inline-flex items-center gap-2 mb-5 animate-fade-in">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
            </span>
            <span className="text-sm font-medium text-neutral-300">
              {" "}
              مرحباً بك في عدسة
            </span>
          </div>
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight tracking-tight">
              اكتشف <span className="gradient-text">فن</span>
              <br /> التصوير الفوتوغرافي
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/blog"
              className="btn-primary inline-flex items-center justify-center gap-2 group"
            >
              استكشف المقالات <FaArrowLeftLong size={21} />
            </Link>

            <Link
              to="/about"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <IoMdInformationCircleOutline size={21} /> اعرف المزيد
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 px-10 w-full max-w-5xl">
            {aboutStats.map((stat, idx) => {
              return <AboutStatsCard key={idx} stat={stat} />;
            })}
          </div>
        </div>
      </header>

      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <div className="section-label relative inline-flex items-center gap-2 mb-5 animate-fade-in">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                </span>
                <span className="text-sm font-medium text-orange-500">
                  {" "}
                  مميز
                </span>
              </div>
              <div>
                <h2 className="section-title">مقالات مختارة</h2>
                <p className="section-subtitle max-w-lg">
                  محتوى منتقى لبدء رحلة تعلمك
                </p>
              </div>
            </div>

            <Link
              to={"blog"}
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              عرض الكل <FaChevronLeft />
            </Link>
          </div>
          <div className="space-y-8">
            {posts.slice(0, 3).map((article) => (
              <FeaturedArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-label relative inline-flex items-center gap-2 mb-5 animate-fade-in">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              </span>
              <span className="text-sm font-medium text-orange-500">
                {" "}
                التصنيفات
              </span>
            </div>
            <h2 className="section-title text-white"> استكشف حسب الموضوع</h2>
            <p className="section-subtitle max-w-lg mx-auto">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, idx) => (
              <CategoryCard key={idx} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <div className="section-label relative inline-flex items-center gap-2 mb-5 animate-fade-in">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                </span>
                <span className="text-sm font-medium text-orange-500">
                  {" "}
                  الأحدث
                </span>
              </div>
              <div>
                <h2 className="section-title text-white">أحدث المقالات</h2>
                <p className="section-subtitle max-w-lg">
                  محتوى جديد طازج من المطبعة
                </p>
              </div>
            </div>

            <Link
              to={"blog"}
              className="group inline-flex items-center gap-2 py-2.5  text-orange-500 rounded-xl font-medium transition-all duration-300"
            >
              عرض جميع المقالات{" "}
              <FaArrowLeftLong className="group-hover:-translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(3, 6).map((article) => (
              <BlogGridCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
