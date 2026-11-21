export default function AboutStatsCard({ stat, idx }) {
  const IconComponent = stat.icon;
  return (
    <div
      key={idx}
      className="glass-card flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300"
    >
      <IconComponent className="text-orange-500 text-2xl mb-3" />
      <h3 className="text-2xl font-bold gradient-text">{stat.value}</h3>
      <p className="text-neutral-500 text-sm">{stat.label}</p>
    </div>
  );
}
