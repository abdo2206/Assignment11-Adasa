import AboutStatsCard from "../../components/Cards/AboutStatsCard";
import TeamCard from "../../components/Cards/TeamCard";
import { aboutStats, aboutValues, teamMembers } from "../../constant/constant";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import AboutValuesCard from "../../components/Cards/AboutValuesCard";

export default function About() {
  return (
    <>
      <header className="flex relative justify-center items-center min-h-screen bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] animate-[float_6s_ease-in-out_infinite]" />

          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite_1s]" />
        </div>
        <div className="text-center relative flex flex-col min-h-screen justify-center items-center gap-4 text-white">
          <div className="section-label relative inline-flex items-center gap-2 mb-5 animate-fade-in">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
            </span>
            <span className="text-sm font-medium text-orange-500"> من نحن</span>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              مهمتنا هي <span className="gradient-text">الإعلام والإلهام</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
              المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.{" "}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 w-full max-w-5xl">
            {aboutStats.map((stat, idx) => {
              return <AboutStatsCard key={idx} stat={stat} />;
            })}
          </div>
        </div>
      </header>

      <section className="py-20 bg-[#111111] border-y border-[#262626]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <span className="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"></span>
              قيمنا
              <span className="w-1.5 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutValues.map((value, index) => {
              return <AboutValuesCard key={index} value={value} index={index} />;
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label relative inline-flex items-center gap-2 mb-5 animate-fade-in">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              </span>
              <span className="text-sm font-medium text-orange-500">
                {" "}
                فريقنا
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              تعرف على كتابنا
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            لديك أسئلة؟ دعنا نتحدث!
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
            أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={"mailto:hello@adasah.com"}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5"
            >
              <MdOutlineEmail size={21} />
              تواصل معنا
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
              to={"blog"}
              data-discover="true"
            >
              تصفح المقالات
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
