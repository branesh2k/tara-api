import { useState } from 'react';
import Header from './Header';
import VechicleForm from './Vehicleform';
import './App.css';


function App() {
  const [vehicles, setVehicles] = useState([]);
  const [showVehicles, setShowVehicles] = useState(false);

  const fetchVehicles =() => {
    fetch('http://localhost:8000/vehicles')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched:', data);
        setVehicles(data);
        setShowVehicles(true);
      })
      .catch((err) => console.error('Fetch error:', err));
  };

  return (
    <div className="app-container">
      <Header className="app-header"/><br></br>
      <button onClick={fetchVehicles}>List all Vehicles</button><br></br>

      {showVehicles && (
        <div>
          {vehicles.length === 0 ? (
        <p>No vehicles found.</p>
      ) : (
        <ul>
          {vehicles.map((v) => (
            <li key={v.id}>
              <strong>ID:</strong> {v.id}, <strong>Vehicle No:</strong> {v.vehicle_no}, <strong>Date:</strong> {v.date}
                  <strong>From Time:</strong> {v.from_time},
                  <strong>To Time:</strong> {v.to_time},
                  <strong>Start Time:</strong> {v.start_time},
                  <strong>End Time:</strong> {v.end_time},
                  <strong>Currency:</strong> {v.currency_symbol},
                  <strong>Price:</strong> {v.price},
                  <strong>Discount:</strong> {v.discount},
                  <strong>Flag1:</strong> {v.flag1 ? 'Yes' : 'No'},
                  <strong>Flag2:</strong> {v.flag2 ? 'Yes' : 'No'},
                  <strong>Flag3:</strong> {v.flag3 ? 'Yes' : 'No'},
                  <strong>Stopages:</strong> {v.stopages},
                  <strong>Share:</strong> {v.share},
                  <strong>Likes:</strong> {v.likes},
                  <strong>Mode:</strong> {v.mode}
            </li>
          ))}
        </ul>
      )}
        </div>
      )}<br></br>
      <VechicleForm/>
    </div>
  );
}

export default App;

