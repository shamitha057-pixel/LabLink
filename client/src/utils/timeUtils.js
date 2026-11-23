// Returns today's date as "YYYY-MM-DD" in the user's local time.
export function getTodayString() {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Minutes since midnight for the current time.
export function getCurrentMinutes() {
  const now = new Date()
  return now.getHours() * 60 + now.getMinutes()
}

// Converts "HH:MM" to minutes since midnight. Returns NaN if invalid.
export function timeToMinutes(value) {
  if (typeof value !== 'string') return NaN
  const [hours, minutes] = value.split(':').map(Number)
  return hours * 60 + minutes
}

// Converts "14:30" to "2:30 PM".
export function formatTime(value) {
  if (typeof value !== 'string') return '—'
  const [hours, minutes] = value.split(':').map(Number)
  if (Number.isNaN(hours) || Number.isNaN(minutes)) return value

  const period = hours >= 12 ? 'PM' : 'AM'
  const hour12 = hours % 12 || 12
  return `${hour12}:${String(minutes).padStart(2, '0')} ${period}`
}