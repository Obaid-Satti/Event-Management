import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { DUMMY_EVENTS } from '../data/eventsData';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import EventCard from '../components/EventCard';
import Footer from '../components/Footer';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchEvents = () => {
      setTimeout(() => {
        setEvents(DUMMY_EVENTS);
        setIsLoaded(true);
      }, 800);
    };
    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event => 
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <section className="featured-events" id="events">
          <div className="container">
            <div className="d-flex flex-wrap justify-content-between align-items-end mb-5 gap-3">
              <h2 className="section-title mb-0">Featured Events</h2>
              
              <div className="input-group search-wrapper glass" style={{ maxWidth: '400px' }}>
                <span className="input-group-text bg-transparent border-0 text-secondary">
                  <Search size={18} />
                </span>
                <input 
                  type="text" 
                  placeholder="Filter events by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control bg-transparent border-0 text-white search-input"
                />
              </div>
            </div>

            {!isLoaded ? (
              <div className="loading-state">
                <div className="spinner"></div>
                <p>Loading events...</p>
              </div>
            ) : filteredEvents.length > 0 ? (
              <div className="row g-4 mt-2">
                {filteredEvents.map(event => (
                  <div className="col-12 col-md-6 col-xl-4" key={event.id}>
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state glass text-center p-5 rounded">
                <h3>No events found</h3>
                <p className="text-tertiary">We couldn't find any events matching "{searchTerm}"</p>
                <button 
                  className="btn btn-secondary mt-3"
                  onClick={() => setSearchTerm('')}
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
