import { FaSearch } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import BlogGridCard from "../../components/Cards/BlogGridCard";
import { posts } from "../../constant/constant";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { CiGrid41 } from "react-icons/ci";
import { FaListUl } from "react-icons/fa6";
import BlogListCard from "../../components/Cards/BlogListCard";
import BlogEmptyState from "../../components/EmptyData/EmptyBlogData";
import { useSearchParams } from "react-router-dom";

export default function Blog() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  console.log(category);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(category || "all");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"

  const POSTS_PER_PAGE = 6;

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;

    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery) ||
      post.excerpt.toLowerCase().includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  return (
    <>
      <div className="min-h-screen bg-[#0a0a0a]">
        <header className="flex relative justify-center overflow-hidden items-center bg-[#0A0A0A]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] animate-[float_6s_ease-in-out_infinite]" />

            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite_1s]" />
          </div>
          <div className="relative text-center flex flex-col min-h-full h-[50vh] justify-center items-center gap-4 text-white">
            <div className="section-label relative inline-flex items-center gap-2 mb-0 animate-fade-in">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              </span>
              <span className="text-sm font-medium flex items-center gap-2 text-orange-500 text-neutral-300">
                <IoNewspaperOutline /> مدونتنا
              </span>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                استكشف <span className="gradient-text">مقالاتنا</span>
              </h1>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
              </p>
            </div>
          </div>
        </header>

        <section>
          <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="relative w-full md:w-80">
                  <input
                    placeholder="ابحث في المقالات..."
                    className="input-dark w-full px-5 py-3 pr-12"
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                  <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    className={
                      selectedCategory === "all"
                        ? "active-category-btn"
                        : "category-btn"
                    }
                    onClick={() => handleCategoryChange("all")}
                  >
                    جميع المقالات
                  </button>
                  <button
                    className={
                      selectedCategory === "إضاءة"
                        ? "active-category-btn"
                        : "category-btn"
                    }
                    onClick={() => handleCategoryChange("إضاءة")}
                  >
                    إضاءة
                  </button>
                  <button
                    className={
                      selectedCategory === "بورتريه"
                        ? "active-category-btn"
                        : "category-btn"
                    }
                    onClick={() => handleCategoryChange("بورتريه")}
                  >
                    بورتريه
                  </button>
                  <button
                    className={
                      selectedCategory === "مناظر طبيعية"
                        ? "active-category-btn"
                        : "category-btn"
                    }
                    onClick={() => handleCategoryChange("مناظر طبيعية")}
                  >
                    مناظر طبيعية
                  </button>
                  <button
                    className={
                      selectedCategory === "تقنيات"
                        ? "active-category-btn"
                        : "category-btn"
                    }
                    onClick={() => handleCategoryChange("تقنيات")}
                  >
                    تقنيات
                  </button>
                  <button
                    className={
                      selectedCategory === "معدات"
                        ? "active-category-btn"
                        : "category-btn"
                    }
                    onClick={() => handleCategoryChange("معدات")}
                  >
                    معدات
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[146px]">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-400">
              عرض{" "}
              <span className="font-bold text-white">
                {filteredPosts.length}
              </span>{" "}
              مقالات
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                <button
                  className={
                    viewMode === "grid"
                      ? "p-2 rounded-lg transition-all duration-300 bg-orange-500 text-white"
                      : "p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-white"
                  }
                  title="عرض شبكي"
                  onClick={() => setViewMode("grid")}
                >
                  <CiGrid41 />
                </button>
                <button
                  className={
                    viewMode === "list"
                      ? "p-2 rounded-lg transition-all duration-300 bg-orange-500 text-white"
                      : "p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-white"
                  }
                  title="عرض قائمة"
                  onClick={() => setViewMode("list")}
                >
                  <FaListUl />
                </button>
              </div>
            </div>
          </div>
          <div
            className={`grid justify-items-center ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "grid-cols-1 gap-6"}`}
          >
            {currentPosts.length > 0 ? (
              viewMode === "list" ? (
                currentPosts.map((post) => (
                  <BlogListCard key={post.id} article={post} />
                ))
              ) : (
                currentPosts.map((post) => (
                  <BlogGridCard key={post.id} article={post} />
                ))
              )
            ) : (
              <BlogEmptyState onReset={handleResetFilters} />
            )}
          </div>
        </section>

        <section className="pb-15">
          {totalPages > 1 && (
            <>
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className="p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 disabled:cursor-not-allowed disabled:opacity-40 enabled:text-white enabled:hover:border-orange-500/50"
                >
                  <GrNext />
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, idx) => {
                    const page = idx + 1;

                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                          currentPage === page
                            ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                            : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className="p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <GrPrevious />
                </button>
              </div>
              <p className="text-center text-neutral-500 mt-4 text-sm">
                صفحة {currentPage} من {totalPages}
              </p>
            </>
          )}
        </section>
      </div>
    </>
  );
}
