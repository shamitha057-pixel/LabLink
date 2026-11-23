import { useCallback, useEffect, useMemo, useState } from 'react'
import { RentalRequestContext } from './RentalRequestContext.js'
import { REQUEST_STATUS, normalizeStatus } from '../constants/rentalStatus.js'
import {
  loadRequests,
  saveRequests,
  createRequestId,
} from '../utils/rentalRequestStorage.js'

export function RentalRequestProvider({ children }) {
  // Passing a function means localStorage is read only once, on first load.
  const [requests, setRequests] = useState(loadRequests)

  // Save to localStorage every time the list changes.
  useEffect(() => {
    saveRequests(requests)
  }, [requests])

  // Adds a new request. New requests always start as "pending".
  // Expected data: { equipmentId, equipmentName, startDate, endDate }
  const addRequest = useCallback((requestData) => {
    const newRequest = {
      ...requestData,
      id: createRequestId(),
      status: REQUEST_STATUS.PENDING,
      createdAt: new Date().toISOString(),
    }
    setRequests((current) => [newRequest, ...current])
    return newRequest
  }, [])

  // Changes the status of one request. Invalid statuses are ignored.
  const updateRequestStatus = useCallback((requestId, newStatus) => {
    const status = normalizeStatus(newStatus)
    if (!status) return

    setRequests((current) =>
      current.map((request) =>
        request.id === requestId ? { ...request, status } : request,
      ),
    )
  }, [])

  const clearRequests = useCallback(() => {
    setRequests([])
  }, [])

  const value = useMemo(
    () => ({ requests, addRequest, updateRequestStatus, clearRequests }),
    [requests, addRequest, updateRequestStatus, clearRequests],
  )

  return (
    <RentalRequestContext.Provider value={value}>
      {children}
    </RentalRequestContext.Provider>
  )
}