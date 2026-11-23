import { useContext } from 'react'
import { RentalRequestContext } from './RentalRequestContext.js'

export function useRentalRequests() {
  const context = useContext(RentalRequestContext)

  if (!context) {
    throw new Error('useRentalRequests must be used inside a RentalRequestProvider')
  }

  return context
}