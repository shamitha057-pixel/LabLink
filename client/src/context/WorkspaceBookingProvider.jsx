import { useCallback, useEffect, useMemo, useState } from 'react'
import { WorkspaceBookingContext } from './WorkspaceBookingContext.js'
import { REQUEST_STATUS, normalizeStatus } from '../constants/rentalStatus.js'
import { createRequestId } from '../utils/rentalRequestStorage.js'
import { loadBookings, saveBookings } from '../utils/workspaceBookingStorage.js'
import { findOverlappingBooking } from '../utils/workspaceBookingValidation.js'

export function WorkspaceBookingProvider({ children }) {
  // Passing a function means localStorage is read only once, on first load.
  const [bookings, setBookings] = useState(loadBookings)

  // Save to localStorage every time the list changes.
  useEffect(() => {
    saveBookings(bookings)
  }, [bookings])

  // Adds a booking. New bookings always start as "pending".
  // Expected data: { workspaceId, workspaceName, date, startTime, endTime, purpose }
  // Returns { ok: true, booking } or { ok: false, error }.
  const addBooking = useCallback(
    (bookingData) => {
      const conflict = findOverlappingBooking(bookings, bookingData)
      if (conflict) {
        return {
          ok: false,
          error: 'This time slot overlaps with an existing booking.',
        }
      }

      const newBooking = {
        ...bookingData,
        id: createRequestId(),
        status: REQUEST_STATUS.PENDING,
        createdAt: new Date().toISOString(),
      }
      setBookings((current) => [newBooking, ...current])
      return { ok: true, booking: newBooking }
    },
    [bookings],
  )

  // Changes the status of one booking. Invalid statuses are ignored.
  // A future Admin Dashboard can call this same function.
  const updateBookingStatus = useCallback((bookingId, newStatus) => {
    const status = normalizeStatus(newStatus)
    if (!status) return

    setBookings((current) =>
      current.map((booking) =>
        booking.id === bookingId ? { ...booking, status } : booking,
      ),
    )
  }, [])

  const clearBookings = useCallback(() => {
    setBookings([])
  }, [])

  const value = useMemo(
    () => ({ bookings, addBooking, updateBookingStatus, clearBookings }),
    [bookings, addBooking, updateBookingStatus, clearBookings],
  )

  return (
    <WorkspaceBookingContext.Provider value={value}>
      {children}
    </WorkspaceBookingContext.Provider>
  )
}