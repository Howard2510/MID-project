import React from "react";
import './Profile.css';

const Profile = () => {
  return (
    <section className="profile">
      <img src="profile-picture.jpg" alt="Profile" className="profile-picture" />
      <div className="profile-details">
        <h2>Refaneo Howard Matthieu</h2>
        <p>
          I was born on October 25, 2003. Currently, I live in Karegesan village,
          Kauditan subdistrict, North Minahasa district. Before I studied at Klabat
          University, I wanted to become an airplane pilot. I enjoy aviation, cars,
          and have two younger sisters named Renaia and Priscilla Matthieu.
        </p>
      </div>
    </section>
  );
};

export default Profile;
