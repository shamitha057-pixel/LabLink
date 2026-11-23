import { useEffect, useState } from 'react'
import Icon from '../common/Icon.jsx'
import { useWorkspaceBookings } from '../../context/useWorkspaceBookings.js'
import { validateBookingForm } from '../../utils/workspaceBookingValidation.js'
import { getTodayString } from '../../utils/timeUtils.js'

const EMPTY_FORM = { date: '', startTime: '', endTime: '', purpose: '' }

export default function WorkspaceBookingModal({ workspace, onClose, onBooked }) {
  const { bookings, addBooking } = useWorkspaceBookings()
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})

  // Close with the Escape key.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))

    // Clear the error for the field being edited (and the overlap message).
    setErrors((current) => {
      if (!current[name] && !current.overlap) return current
      const next = { ...current }
      delete next[name]
      delete next.overlap
      return next
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = validateBookingForm(form, bookings, workspace.id)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const result = addBooking({
      workspaceId: workspace.id,
      workspaceName: workspace.name,
      date: form.date,
      startTime: form.startTime,
      endTime: form.endTime,
      purpose: form.purpose.trim(),
    })

    if (!result.ok) {
      setErrors({ overlap: result.error })
      return
    }

    onBooked(result.booking)
    onClose()
  }

  const fieldClass = (name) => `ws-field ${errors[name] ? 'ws-field--error' : ''}`

  return (
    <div
      className="ws-modal-overlay"
      onClick={(event) => {
        // Close only when the dark background itself is clicked.
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="ws-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ws-modal-title"
      >
        <div className="ws-modal__header">
          <div>
            <h2 id="ws-modal-title" className="ws-modal__title">
              Book workspace
            </h2>
            <p className="ws-modal__subtitle">
              Your request will be sent as pending until it is reviewed.
            </p>
          </div>
          <button
            type="button"
            className="ws-modal__close"
            aria-label="Close booking form"
            onClick={onClose}
          >
            <Icon name="x" size={18} />
          </button>
        </div>

        <form className="ws-form" onSubmit={handleSubmit} noValidate>
          {errors.overlap && (
            <div className="ws-form__alert" role="alert">
              {errors.overlap}
            </div>
          )}

          <div className="ws-field">
            <label htmlFor="ws-name">Workspace</label>
            <input id="ws-name" type="text" value={workspace.name} readOnly />
          </div>

          <div className={fieldClass('date')}>
            <label htmlFor="ws-date">Booking date</label>
            <input
              id="ws-date"
              name="date"
              type="date"
              min={getTodayString()}
              value={form.date}
              onChange={handleChange}
            />
            {errors.date && <p className="ws-form__error">{errors.date}</p>}
          </div>

          <div className="ws-form__row">
            <div className={fieldClass('startTime')}>
              <label htmlFor="ws-start">Start time</label>
              <input
                id="ws-start"
                name="startTime"
                type="time"
                value={form.startTime}
                onChange={handleChange}
              />
              {errors.startTime && <p className="ws-form__error">{errors.startTime}</p>}
            </div>

            <div className={fieldClass('endTime')}>
              <label htmlFor="ws-end">End time</label>
              <input
                id="ws-end"
                name="endTime"
                type="time"
                value={form.endTime}
                onChange={handleChange}
              />
              {errors.endTime && <p className="ws-form__error">{errors.endTime}</p>}
            </div>
          </div>

          <div className={fieldClass('purpose')}>
            <label htmlFor="ws-purpose">Purpose / project description</label>
            <textarea
              id="ws-purpose"
              name="purpose"
              maxLength={300}
              placeholder="e.g. Testing the sensor circuit for my IoT mini project"
              value={form.purpose}
              onChange={handleChange}
            />
            {errors.purpose && <p className="ws-form__error">{errors.purpose}</p>}
          </div>

          <div className="ws-form__actions">
            <button type="button" className="btn btn--secondary btn--sm" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn--primary btn--sm">
              Submit booking
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}