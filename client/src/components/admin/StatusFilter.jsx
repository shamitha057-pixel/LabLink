const FILTER_OPTIONS = [
  { value: 'all', label: 'All', countKey: 'total' },
  { value: 'pending', label: 'Pending', countKey: 'pending' },
  { value: 'approved', label: 'Approved', countKey: 'approved' },
  { value: 'rejected', label: 'Rejected', countKey: 'rejected' },
]

// counts is the object returned by getStatusCounts(): { total, pending, approved, rejected }
export default function StatusFilter({ value, onChange, counts }) {
  return (
    <div className="admin-filter" role="group" aria-label="Filter by status">
      {FILTER_OPTIONS.map((option) => {
        const isActive = value === option.value

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            className={`admin-filter__btn ${isActive ? 'is-active' : ''}`}
            onClick={() => onChange(option.value)}
          >
            {option.label}
            <span className="admin-filter__count">{counts[option.countKey]}</span>
          </button>
        )
      })}
    </div>
  )
}