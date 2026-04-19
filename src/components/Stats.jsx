function Stats({ jobs }) {
  const applied = jobs.filter(j => j.status === "applied").length
  const interview = jobs.filter(j => j.status === "interview").length
  const offer = jobs.filter(j => j.status === "offer").length
  const rejected = jobs.filter(j => j.status === "rejected").length

  const stats = [
    { label: "Başvuruldu", value: applied, color: "from-blue-500 to-blue-600", icon: "📨" },
    { label: "Mülakat", value: interview, color: "from-yellow-500 to-orange-500", icon: "🎯" },
    { label: "Teklif", value: offer, color: "from-green-500 to-emerald-600", icon: "🎉" },
    { label: "Reddedildi", value: rejected, color: "from-red-500 to-rose-600", icon: "❌" },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.label} className={`bg-gradient-to-br ${s.color} rounded-2xl p-4 text-white shadow-lg`}>
          <p className="text-2xl mb-1">{s.icon}</p>
          <p className="text-3xl font-bold">{s.value}</p>
          <p className="text-sm opacity-80">{s.label}</p>
        </div>
      ))}
    </div>
  )
}

export default Stats