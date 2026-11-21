import { Link } from "react-router-dom";
import {
  FaHeart,
  
  FaArrowLeft,
} from "react-icons/fa";

import { siteInfo, categories } from "../../constant/constant";

const navigationLinks = [
  { name: "الرئيسية", path: "" },
  { name: "المدونة", path: "blog" },
  { name: "من نحن", path: "about" },
];

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
    >
      <FaArrowLeft className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500" />
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(249,115,22,0.3)]">
                <span className="text-white font-bold text-xl">ع</span>
              </div>

              <span className="text-xl font-bold text-white">
                {siteInfo.name}
              </span>
            </Link>

            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              {siteInfo.description}
            </p>

            <div className="flex gap-2">
              {siteInfo.social.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.name}
                    to={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
              استكشف
            </h3>

            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <FooterLink to={link.path}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
              التصنيفات
            </h3>

            <ul className="space-y-4">
              {categories.slice(0, 4).map((category) => (
                <li key={category.name}>
                  <FooterLink
                    to={`/blog?category=${encodeURIComponent(category.name)}`}
                  >
                    {category.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
              ابقى على اطلاع
            </h3>

            <p className="text-sm text-neutral-500 mb-4">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

            <form onSubmit={() => {}} className="space-y-3">
              <input
                type="email"
                required
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600"
              />

              <button type="submit" className="w-full btn-primary text-sm">
                اشترك
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative border-t border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-600 flex items-center gap-1 flex-wrap justify-center">
              © {new Date().getFullYear()} {siteInfo.name}. صنع بكل
              <FaHeart className="w-4 h-4 text-orange-500 fill-orange-500" />
              جميع الحقوق محفوظة.
            </p>

            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
              >
                سياسة الخصوصية
              </Link>

              <Link
                to="/terms"
                className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
              >
                شروط الخدمة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
