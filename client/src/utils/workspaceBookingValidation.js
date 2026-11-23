import { REQUEST_STATUS, normalizeStatus } from '../constants/rentalStatus.js'
import { formatDate } from './formatDate.js'
import {
  formatTime,
  getCurrentMinutes,
  getTodayString,
  timeToMinutes,
} from './timeUtils.js'

// Only pending and approved bookings block a time slot.
const BLOCKING_STATUSES = [REQUEST_STATUS.PENDING, REQUEST_STATUS.APPROVED]

// Finds an existing booking that overlaps the requested slot.
// Back-to-back bookings (one ends at 12:00, next starts at 12:00) are allowed.
export function findOverlappingBooking(bookings, { workspaceId, date, startTime, endTime }) {
  const newStart = timeToMinutes(startTime)
  const newEnd = timeToMinutes(endTime)

  const match = bookings.find((booking) => {
    const status = normalizeStatus(booking.status) ?? REQUEST_STATUS.PENDING
    if (!BLOCKING_STATUSES.includes(status)) return false
    if (booking.workspaceId !== workspaceId) return false
    if (booking.date !== date) return false

    const existingStart = timeToMinutes(booking.startTime)
    const existingEnd = timeToMinutes(booking.endTime)
    return newStart < existingEnd && newEnd > existingStart
  })

  return match ?? null
}

// Returns an object of error messages. An empty object means "valid".
// Possible keys: date, startTime, endTime, purpose, overlap
export function validateBookingForm(form, bookings, workspaceId) {
  const errors = {}
  const today = getTodayString()

  if (!form.date) {
    errors.date = 'Please choose a booking date.'
  } else if (form.date < today) {
    errors.date = 'Booking date cannot be in the past.'
  }

  if (!form.startTime) {
    errors.startTime = 'Please choose a start time.'
  }

  if (!form.endTime) {
    errors.endTime = 'Please choose an end time.'
  }

  if (
    form.startTime &&
    form.endTime &&
    timeToMinutes(form.endTime) <= timeToMinutes(form.startTime)
  ) {
    errors.endTime = 'End time must be later than the start time.'
  }

  if (!form.purpose.trim()) {
    errors.purpose = 'Please describe the purpose of your booking.'
  }

  // Booking for today: the start time must not have passed already.
  if (
    !errors.date &&
    !errors.startTime &&
    form.date === today &&
    timeToMinutes(form.startTime) < getCurrentMinutes()
  ) {
    errors.startTime = 'This start time has already passed today.'
  }

  // Only check overlaps once the date and times themselves are valid.
  if (Object.keys(errors).length === 0) {
    const conflict = findOverlappingBooking(bookings, {
      workspaceId,
      date: form.date,
      startTime: form.startTime,
      endTime: form.endTime,
    })

    if (conflict) {
      errors.overlap = `This workspace is already booked on ${formatDate(
        form.date,
      )} from ${formatTime(conflict.startTime)} to ${formatTime(
        conflict.endTime,
      )}. Please choose a different time.`
    }
  }

  return errors
}