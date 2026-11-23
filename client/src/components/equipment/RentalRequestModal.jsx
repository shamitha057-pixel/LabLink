
import { useState } from 'react';

export default function RentalRequestModal({ equipment, onClose, onSubmit }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (endDate <= startDate) {
      alert('End date must be after the start date.');
      return;
    }

    onSubmit({
      equipmentId: equipment.id,
      equipmentName: equipment.name,
      startDate,
      endDate,
      status: 'Pending',
    });
  }

  return (
    <div className="rental-modal-overlay">
      <div className="rental-modal">
        <button className="rental-modal-close" onClick={onClose}>×</button>

        <h2>Request Equipment</h2>
        <h3>{equipment.name}</h3>
        <p>Rental price: ₹{equipment.price} / day</p>

        <form onSubmit={handleSubmit}>
          <label>Start Date</label>
          <input
            type="date"
            required
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <label>End Date</label>
          <input
            type="date"
            required
            min={startDate || undefined}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />

          <button type="submit">Submit Request</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
