
import AppRouter from './routes/AppRouter.jsx'
import { RentalRequestProvider } from './context/RentalRequestProvider.jsx'
import { WorkspaceBookingProvider } from './context/WorkspaceBookingProvider.jsx'

// Global providers live here, wrapped around the router.
export default function App() {
  return (
    <RentalRequestProvider>
      <WorkspaceBookingProvider>
        <AppRouter />
      </WorkspaceBookingProvider>
    </RentalRequestProvider>
  )
}