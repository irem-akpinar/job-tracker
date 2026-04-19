import { useState, useEffect } from "react"
import { defaultJob } from "../interfaces/job"

function JobForm({ onSave, editingJob, onCancel }) {
  const [form, setForm] = useState(defaultJob)

  useEffect(() => {
    if (editingJob) setForm(editingJob)
    else setForm(defaultJob)
  }, [editingJob])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.company || !form.position) return alert("Şirket ve pozisyon zorunlu!")
    onSave(form)
    setForm(defaultJob)
  }

  return (
    <div className="bg-white border border-amber-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-amber-900 mb-5">
        {editingJob ? "✏️ Başvuruyu Düzenle" : "➕ Yeni Başvuru Ekle"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="company"
          placeholder="Şirket Adı *"
          value={form.company}
          onChange={handleChange}
          className="border border-amber-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-50"
        />
        <input
          name="position"
          placeholder="Pozisyon *"
          value={form.position}
          onChange={handleChange}
          className="border border-amber-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-50"
        />
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="border border-amber-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-50"
        />
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border border-amber-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-50"
        >
          <option value="applied">Başvuruldu</option>
          <option value="interview">Mülakat</option>
          <option value="offer">Teklif</option>
          <option value="rejected">Reddedildi</option>
        </select>
        <input
          name="link"
          placeholder="İş İlanı Linki"
          value={form.link}
          onChange={handleChange}
          className="border border-amber-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-50 sm:col-span-2"
        />
        <textarea
          name="notes"
          placeholder="Notlar"
          value={form.notes}
          onChange={handleChange}
          rows={2}
          className="border border-amber-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-50 sm:col-span-2"
        />
      </div>
      <div className="flex gap-3 mt-5">
        <button
          onClick={handleSubmit}
          className="bg-amber-800 hover:bg-amber-900 text-amber-50 px-6 py-2.5 rounded-xl font-medium transition shadow"
        >
          {editingJob ? "Güncelle" : "Ekle"}
        </button>
        {editingJob && (
          <button
            onClick={onCancel}
            className="bg-amber-100 hover:bg-amber-200 text-amber-800 px-6 py-2.5 rounded-xl font-medium transition border border-amber-200"
          >
            İptal
          </button>
        )}
      </div>
    </div>
  )
}

export default JobForm