import React from "react";
import './Details.css';

const Details = () => {
  return (
    <section className="details">
      <div className="info">
        <h3>MY HOBBY</h3>
        <ul>
          <li>Aviation</li>
          <li>Automotive</li>
        </ul>
      </div>
      <div className="info">
        <h3>BORN</h3>
        <p>25 October 2003</p>
      </div>
      <div className="info">
        <h3>EDUCATION</h3>
        <ul>
          <li>2009: SD GMIM 37 Karegesan</li>
          <li>2015: SMP Kristen Karegesan</li>
          <li>2018: SMA Katolik Don Bosco Lembean</li>
          <li>2022: Universitas Klabat - Fakultas Ilmu Komputer - Sistem Informasi</li>
        </ul>
      </div>
    </section>
  );
};

export default Details;
