// src/components/Members.js
import React from 'react';
import clubData from '../data/clubData';
import '../styles/members.css'; // اختياري إذا عندك تنسيق

const Members = () => {
  return (
    <section id="members" className="members-section">
      <h2>Notre Équipe</h2>
      <div className="members-list">
        {clubData.members.map(member => (
          <div key={member.id} className="member-card">
            <img src={member.photo} alt={member.name} className="member-photo" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;
