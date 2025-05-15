// src/components/Events.js
import React, { useState, useEffect } from 'react';
import clubData from '../data/clubData';
import '../styles/events.css';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // هنا يمكن أن تتخيل تحميل بيانات من API أو مصدر خارجي في المستقبل
    setEvents(clubData.events);
  }, []);

  return (
    <section id="events" className="events">
      <div className="container">
        <h2 className="section-title">Événements à Venir</h2>
        
        <div className="events-container">
          {events.map(event => {
            // Traitement de la date pour l'affichage
            const dateParts = event.date.split(' ');
            const day = dateParts[0];
            const month = dateParts[1];
            const year = dateParts[2] || '';
            
            return (
              <div key={event.id} className="event-card">
                <div className="event-date">
                  <div className="event-day">{day}</div>
                  <div className="event-month">{month}</div>
                  <div className="event-year">{year}</div>
                </div>
                
                <div className="event-details">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  
                  <div className="event-meta">
                    <div className="event-meta-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    
                    <div className="event-meta-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
