import { useState } from 'react';
import Header from './components/Header';
import VehicleForm from './components/Vehicleform';
import './App.css';


function App() {
  const [vehicles, setVehicles] = useState([]);
  const [showVehicles, setShowVehicles] = useState(false);
  const [editVehicle, setEditVehicle] = useState(null);

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

  const handleDelete =(vehicle_id) =>{
    fetch(`http://localhost:8000/vehicle/${vehicle_id}`,{method: 'DELETE'})
      .then((res) => {
        if (res.ok){
          setVehicles((prev) => prev.filter((v) => v.id !== vehicle_id));
          } else {
            console.error('Delete failed');
          }
        })
        .catch((err) => console.error('Delete error:', err));
    };

    const handleEdit = (vehicle) => {
      setEditVehicle(vehicle);
    };
  
    const clearEdit = () => {
      setEditVehicle(null);
    };

  return (
    <div className="app-container">
      <div>
      <Header className="app-header"/>
      </div><br></br>
      <button onClick={fetchVehicles}>Show all Vehicles</button><br></br>

      {showVehicles && (
        <div>
          {vehicles.length === 0 ? (
        <p>No vehicles found.</p>
      ) : (
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Vehicle No</th>
            <th>Date</th>
            <th>From</th>
            <th>To</th>
            <th>Start</th>
            <th>End</th>
            <th>Currency</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Flags</th>
            <th>Stopages</th>
            <th>Share</th>
            <th>Likes</th>
            <th>Mode</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.id}</td>
              <td>{vehicle.vehicle_no}</td>
              <td>{vehicle.date}</td>
              <td>{vehicle.from_time}</td>
              <td>{vehicle.to_time}</td>
              <td>{vehicle.start_time}</td>
              <td>{vehicle.end_time}</td>
              <td>{vehicle.currency_symbol}</td>
              <td>{vehicle.price}</td>
              <td>{vehicle.discount}</td>
              <td>
                  <input type="checkbox" checked={vehicle.flag1} readOnly />{" "}
                  <input type="checkbox" checked={vehicle.flag2} readOnly />{" "}
                  <input type="checkbox" checked={vehicle.flag3} readOnly />
                </td>
              <td>{vehicle.stopages}</td>
              <td>{vehicle.share}</td>
              <td>{vehicle.likes}</td>
              <td>{vehicle.mode}</td>
              <td>
                <button onClick={() => handleEdit(vehicle)}>✏️</button>
                <button onClick={() => handleDelete(vehicle.id)}>🗑️</button>
              </td>
            </tr>
            ))}
          </tbody>
      </table>
      )}
        </div>
      )}
      <div>
      <VehicleForm onAdd={fetchVehicles} editVehicle={editVehicle} onEditComplete={clearEdit} />

      </div>
    </div>
  );
}

export default App;

