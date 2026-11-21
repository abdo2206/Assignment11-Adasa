
import { FiFrown, FiRefreshCw } from "react-icons/fi";

export default function BlogEmptyState({ onReset }) {
  return (
    <div className="text-center col-span-full w-full py-20">
      <div className="w-24 h-24 bg-[#161616] border border-[#262626] rounded-full flex items-center justify-center mx-auto mb-6">
        <FiFrown className="w-12 h-12 text-neutral-500" />
      </div>

      <h3 className="text-2xl font-bold text-white mb-3">
        لا توجد مقالات
      </h3>

      <p className="text-neutral-400 mb-6">
        حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
      </p>

      <button
        onClick={onReset}
        className="btn-primary inline-flex items-center gap-2"
      >
        <FiRefreshCw className="w-5 h-5" />
        إعادة تعيين الفلاتر
      </button>
    </div>
  );
};

