import JobCard from "./JobCard"

function JobList({ jobs, onEdit, onDelete }) {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        <p className="text-5xl mb-4">📭</p>
        <p className="text-lg">Henüz başvuru yok.</p>
        <p className="text-sm">Yukarıdan yeni bir başvuru ekle!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default JobList