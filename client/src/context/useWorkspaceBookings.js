import { useContext } from 'react'
import { WorkspaceBookingContext } from './WorkspaceBookingContext.js'

export function useWorkspaceBookings() {
  const context = useContext(WorkspaceBookingContext)

  if (!context) {
    throw new Error('useWorkspaceBookings must be used inside a WorkspaceBookingProvider')
  }

  return context
}