
import { useState, useEffect } from 'react';
import RentalRequestModal from '../components/equipment/RentalRequestModal.jsx';
import { useRentalRequests } from '../context/useRentalRequests.js';

export default function EquipmentCatalogue() {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const { requests, addRequest } = useRentalRequests();

  useEffect(() => {
    fetch('http://localhost:8080/api/equipment')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load equipment');
        }
        return response.json();
      })
      .then(data => {
        const formattedData = data.map(item => ({
          id: item.id,
          name: item.name,
          category: item.category,
          description: 'Laboratory equipment available for your projects.',
          price: item.pricePerDay,
          quantity: item.availableQuantity,
          available: item.availableQuantity > 0
        }));

        setEquipment(formattedData);
      })
      .catch(err => {
        console.error(err);
        setError('Unable to connect to LabLink backend.');
      })
      .finally(() => setLoading(false));
  }, []);

  const categories = [
    'All',
    ...new Set(equipment.map(item => item.category))
  ];

  const filteredEquipment = equipment.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || item.category === category;

    return matchesSearch && matchesCategory;
  });

  function handleRequestSubmit(request) {
    addRequest({
      equipmentId: request.equipmentId,
      equipmentName: request.equipmentName,
      startDate: request.startDate,
      endDate: request.endDate,
    });

    setSelectedEquipment(null);
  }

  return (
    <div className="page">
      <div className="page__header">
        <h1>Equipment Catalogue</h1>
        <p>Find and rent laboratory equipment for your projects.</p>
      </div>

      <input
        type="text"
        placeholder="Search equipment..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="equipment-search"
      />

      {loading && <p>Loading equipment...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <>
          <div className="equipment-filters">
            {categories.map(item => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={category === item ? 'active' : ''}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="equipment-grid">
            {filteredEquipment.map(item => (
              <div className="equipment-card" key={item.id}>
                <span className="equipment-card__category">
                  {item.category}
                </span>

                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>₹{item.price} / day</p>

                <p className={item.available ? 'available' : 'unavailable'}>
                  {item.available
                    ? `Available (${item.quantity} units)`
                    : 'Currently unavailable'}
                </p>

                <button
                  disabled={!item.available}
                  onClick={() => setSelectedEquipment(item)}
                >
                  {item.available ? 'Request Equipment' : 'Unavailable'}
                </button>
              </div>
            ))}
          </div>

          {filteredEquipment.length === 0 && (
            <p>No equipment found. Try another search.</p>
          )}
        </>
      )}

      {selectedEquipment && (
        <RentalRequestModal
          equipment={selectedEquipment}
          onClose={() => setSelectedEquipment(null)}
          onSubmit={handleRequestSubmit}
        />
      )}

      {requests.length > 0 && (
        <div className="rental-requests">
          <h2>My Rental Requests</h2>

          {requests.map(request => (
            <div className="rental-request-item" key={request.id}>
              <h3>{request.equipmentName}</h3>
              <p>From: {request.startDate}</p>
              <p>To: {request.endDate}</p>
              <span className="request-pending">
                {request.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
