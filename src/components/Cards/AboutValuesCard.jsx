export default function AboutValuesCard({ value, index }) {
  const Icon = value.icon;

  return (
    <div
      key={index}
      className="group relative overflow-hidden rounded-2xl border border-[#262626] bg-[#161616] p-6 text-center transition-all duration-300 hover:border-orange-500/30"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

      <div className="relative flex justify-center items-center flex-col h-full">
        <Icon className="mb-4 block text-4xl text-orange-500" />

        <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-orange-500">
          {value.title}
        </h3>

        <p className="text-sm text-neutral-400">{value.description}</p>
      </div>
    </div>
  );
}
