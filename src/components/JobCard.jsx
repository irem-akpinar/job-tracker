import { statusLabels, statusColors } from "../interfaces/job"

function JobCard({ job, onEdit, onDelete }) {
  return (
    <div className="bg-white border border-amber-100 rounded-2xl shadow-sm p-5 flex flex-col gap-3 hover:shadow-md transition">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-amber-900">{job.company}</h3>
          <p className="text-amber-700 text-sm">{job.position}</p>
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColors[job.status]}`}>
          {statusLabels[job.status]}
        </span>
      </div>
      {job.date && (
        <p className="text-xs text-amber-500">📅 {job.date}</p>
      )}
      {job.link && (
        <a href={job.link} target="_blank" rel="noreferrer" className="text-xs text-amber-700 hover:underline truncate">
          🔗 {job.link}
        </a>
      )}
      {job.notes && (
        <p className="text-xs text-amber-800 bg-amber-50 rounded-lg p-2">{job.notes}</p>
      )}
      <div className="flex gap-2 mt-1">
        <button
          onClick={() => onEdit(job)}
          className="flex-1 bg-amber-100 hover:bg-amber-200 text-amber-800 text-sm py-1.5 rounded-lg font-medium transition"
        >
          ✏️ Düzenle
        </button>
        <button
          onClick={() => onDelete(job.id)}
          className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 text-sm py-1.5 rounded-lg font-medium transition"
        >
          🗑️ Sil
        </button>
      </div>
    </div>
  )
}

export default JobCard