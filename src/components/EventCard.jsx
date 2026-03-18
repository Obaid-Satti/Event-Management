import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle, X } from 'lucide-react';

const EventCard = ({ event }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [attendeeName, setAttendeeName] = useState('');

  const handleRegister = () => {
    if (!isRegistered) {
      setShowModal(true);
    }
  };

  const submitRegistration = (e) => {
    e.preventDefault();
    if (attendeeName.trim()) {
      setIsRegistered(true);
      setShowModal(false);
    }
  };

  return (
    <div className="card event-card h-100 border-0 shadow-sm">
      <div className="event-image-wrapper">
        <img src={event.image} alt={event.name} className="card-img-top event-image" />
        <span className="position-absolute top-0 end-0 m-3 badge bg-primary event-category">{event.category}</span>
      </div>
      <div className="card-body d-flex flex-column event-details">
        <h3 className="card-title event-title">{event.name}</h3>
        <p className="card-text event-description">{event.description}</p>

        <div className="d-flex flex-column gap-2 p-3 bg-dark bg-opacity-25 rounded mb-3 event-meta-list">
          <div className="d-flex align-items-center gap-2 event-meta">
            <Calendar size={16} />
            <span>{event.date}</span>
          </div>
          <div className="d-flex align-items-center gap-2 event-meta">
            <Clock size={16} />
            <span>{event.time}</span>
          </div>
          <div className="d-flex align-items-center gap-2 event-meta">
            <MapPin size={16} />
            <span>{event.location}</span>
          </div>
        </div>

        <button
          className={`btn w-100 mt-4 ${isRegistered ? 'btn-secondary' : 'btn-primary'}`}
          onClick={handleRegister}
          disabled={isRegistered}
          style={{ cursor: isRegistered ? 'not-allowed' : 'pointer', opacity: isRegistered ? 0.8 : 1 }}
        >
          {isRegistered ? (
            <>
              <CheckCircle size={18} className="text-success" />
              Registered
            </>
          ) : (
            'Register'
          )}
        </button>
      </div>

      {showModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal-content glass">
            <button className="custom-modal-close" onClick={() => setShowModal(false)}>
              <X size={20} />
            </button>
            <h4 className="modal-title">Complete Registration</h4>
            <p className="modal-subtitle">Register for {event.name}</p>
            
            <form onSubmit={submitRegistration} className="modal-form">
              <input 
                type="text" 
                placeholder="Enter your full name..." 
                value={attendeeName}
                onChange={(e) => setAttendeeName(e.target.value)}
                className="form-control mb-3"
                autoFocus
                required
              />
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Confirm
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;
