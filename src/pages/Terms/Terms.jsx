import { Link } from "react-router-dom";
import {
  FiChevronLeft,
  FiFileText,
  FiAlertTriangle,
  FiX,
  FiMail,
} from "react-icons/fi";
import { termsPolicy } from "../../constant/constant";

export default function Terms({ siteName = "عدسة" }) {
  const replaceSiteName = (text) => text.replaceAll("{siteName}", siteName);

  return (
    <div className="bg-[#0a0a0a]">
      <header className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm mb-8">
            <Link
              to="/"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              الرئيسية
            </Link>

            <FiChevronLeft className="w-4 h-4 text-neutral-600" />

            <span className="text-orange-500 font-medium">شروط الخدمة</span>
          </nav>

          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/30 mb-6">
            <FiFileText className="w-8 h-8 text-orange-500" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            شروط الخدمة
          </h1>

          <p className="text-neutral-400 text-lg">آخر تحديث: 15 يناير 2026</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 mb-12">
          <div className="flex gap-4">
            <FiAlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0" />

            <div>
              <h3 className="font-semibold text-yellow-500 mb-1">إشعار مهم</h3>

              <p className="text-yellow-300/80 text-sm">
                يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول أو
                استخدام {siteName}، فإنك توافق على الالتزام بهذه الشروط.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {termsPolicy.map((section, index) => (
            <section key={index} className="group">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg flex-shrink-0">
                  {index + 1}
                </span>

                {section.title}
              </h2>

              <div className="pr-11">
                {section.content && (
                  <p className="text-neutral-400 leading-relaxed mb-4">
                    {replaceSiteName(section.content)}
                  </p>
                )}

                {section.listTitle && (
                  <p className="text-neutral-300 font-medium mb-3">
                    {section.listTitle}
                  </p>
                )}

                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-neutral-400"
                      >
                        <FiX className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />

                        <span>
                          {typeof item === "string" ? (
                            item
                          ) : (
                            <>
                              <strong className="text-white">
                                {item.label}:
                              </strong>{" "}
                              {item.desc}
                            </>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.email && (
                  <a
                    href={`mailto:${section.email}`}
                    className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium"
                  >
                    <FiMail className="w-5 h-5" />
                    {section.email}
                  </a>
                )}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#262626]">
          <p className="text-neutral-500 text-sm text-center">
            باستخدام موقعنا، فإنك توافق على شروط الخدمة هذه. انظر أيضاً{" "}
            <Link
              to="/privacy"
              className="text-orange-500 hover:text-orange-400 font-medium"
            >
              سياسة الخصوصية
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
