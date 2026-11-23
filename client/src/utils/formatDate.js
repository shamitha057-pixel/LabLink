// Accepts "YYYY-MM-DD" (from <input type="date">) or a full ISO date string.
export function formatDate(value) {
  if (!value) return '—'

  const text = String(value)
  // Date-only strings are treated as local dates to avoid a one-day shift.
  const date = new Date(text.length === 10 ? `${text}T00:00:00` : text)

  if (Number.isNaN(date.getTime())) return text

  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}