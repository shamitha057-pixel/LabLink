// DEMO DATA: sample student names for the prototype.
// Replaced by real student profiles once authentication exists.
const DEMO_STUDENT_NAMES = [
  'Aarav Sharma',
  'Priya Nair',
  'Rohan Mehta',
  'Ananya Iyer',
  'Karthik Reddy',
  'Sneha Patil',
]

// The same id always returns the same name.
export function getDemoStudentName(id) {
  const text = String(id ?? '')
  let hash = 0

  for (let index = 0; index < text.length; index += 1) {
    hash = (hash * 31 + text.charCodeAt(index)) >>> 0
  }

  return DEMO_STUDENT_NAMES[hash % DEMO_STUDENT_NAMES.length]
}