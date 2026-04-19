function SearchBar({ search, setSearch, filterStatus, setFilterStatus }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        placeholder="Şirket veya pozisyon ara..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 border border-amber-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
      />
      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        className="border border-amber-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
      >
        <option value="">Tüm Durumlar</option>
        <option value="applied">Başvuruldu</option>
        <option value="interview">Mülakat</option>
        <option value="offer">Teklif</option>
        <option value="rejected">Reddedildi</option>
      </select>
    </div>
  )
}

export default SearchBar