import { useState, useEffect } from "react"
import JobForm from "../components/JobForm"
import JobList from "../components/JobList"
import SearchBar from "../components/SearchBar"
import Stats from "../components/Stats"

function Home() {
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem("jobs")
    return saved ? JSON.parse(saved) : []
  })
  const [editingJob, setEditingJob] = useState(null)
  const [search, setSearch] = useState("")
  const [filterStatus, setFilterStatus] = useState("")

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs))
  }, [jobs])

  const handleSave = (form) => {
    if (form.id) {
      setJobs(jobs.map(j => j.id === form.id ? form : j))
    } else {
      setJobs([...jobs, { ...form, id: Date.now() }])
    }
    setEditingJob(null)
  }

  const handleDelete = (id) => {
    if (window.confirm("Bu başvuruyu silmek istediğine emin misin?")) {
      setJobs(jobs.filter(j => j.id !== id))
    }
  }

  const filteredJobs = jobs.filter(job => {
    const matchSearch =
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.position.toLowerCase().includes(search.toLowerCase())
    const matchStatus = filterStatus ? job.status === filterStatus : true
    return matchSearch && matchStatus
  })

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 to-yellow-800">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-amber-50 tracking-tight">💼 Job Tracker</h1>
            <p className="text-amber-200 text-sm mt-0.5">İş başvurularını düzenli takip et</p>
          </div>
          <div className="bg-amber-700/50 border border-amber-400/30 rounded-xl px-4 py-2 text-center">
            <p className="text-2xl font-bold text-amber-50">{jobs.length}</p>
            <p className="text-amber-200 text-xs">Toplam</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
        <Stats jobs={jobs} />
        <JobForm onSave={handleSave} editingJob={editingJob} onCancel={() => setEditingJob(null)} />
        <SearchBar search={search} setSearch={setSearch} filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
        <JobList jobs={filteredJobs} onEdit={setEditingJob} onDelete={handleDelete} />
      </div>
    </div>
  )
}

export default Home