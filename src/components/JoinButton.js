// src/components/JoinButton.js
import React, { useState, useEffect } from 'react';
import clubData from '../data/clubData';
import '../styles/joinbutton.css';

const JoinButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    email: '',
    reason: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Candidature soumise:', formData);
    alert('Candidature soumise! (Ceci est une démo)');
    
    setIsModalOpen(false);
    setFormData({
      fullName: '',
      studentId: '',
      email: '',
      reason: ''
    });
  };
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  return (
    <>
      <button 
        className="btn btn-white join-button"
        onClick={() => setIsModalOpen(true)}
      >
        Rejoindre le club
      </button>
      
      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-content join-modal">
            <div className="modal-header">
              <h3>Rejoindre {clubData.name}</h3>
              <button 
                className="close-button"
                onClick={() => setIsModalOpen(false)}
                aria-label="Fermer"
              >
                &times;
              </button>
            </div>
            
            <form className="join-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Nom Complet</label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Votre nom complet"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="studentId">Numéro d'Étudiant</label>
                <input
                  type="text"
                  id="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  placeholder="Votre numéro d'étudiant"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="reason">Pourquoi voulez-vous rejoindre?</label>
                <textarea
                  id="reason"
                  rows="3"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Dites-nous pourquoi vous êtes intéressé(e) à rejoindre le club"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-button">
                Soumettre la Candidature
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default JoinButton;