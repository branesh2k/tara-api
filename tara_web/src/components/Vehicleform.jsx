import { useEffect,useState } from "react";
import './Vehicleform.css';


function VehicleForm({ onAdd,editVehicle, onEditComplete }){

    const [vehicleId, setVehicleId] = useState("");
    const [vehicleNo, setVehicleNo] = useState("");
    const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));

    const currentTime = new Date().toISOString().slice(11, 16);

    const [fromTime, setFromTime] = useState(currentTime);
    const [toTime, setToTime] = useState(currentTime);
    const [startTime, setStartTime] = useState(currentTime);
    const [endTime, setEndTime] = useState(currentTime);
    const [currencySymbol, setCurrencySymbol] = useState("$");
    const [price, setPrice] = useState("0");
    const [discount, setDiscount] = useState("0");
    const [flag1, setFlag1] = useState(false);
    const [flag2, setFlag2] = useState(false);
    const [flag3, setFlag3] = useState(false);
    const [stopages, setStopages] = useState("0");
    const [share, setShare] = useState("0");
    const [likes, setLikes] = useState("0");
    const [mode, setMode] = useState("");

    useEffect(() => {
        const currentTime = new Date().toISOString().slice(11, 16);
        if (editVehicle) {
          setVehicleId(editVehicle.id?.toString() || "");
          setVehicleNo(editVehicle.vehicle_no || "");
          setDate(editVehicle.date || new Date().toISOString().slice(0, 10));
          setFromTime(editVehicle.from_time || currentTime);
          setToTime(editVehicle.to_time || currentTime);
          setStartTime(editVehicle.start_time || currentTime);
          setEndTime(editVehicle.end_time || currentTime);
          setCurrencySymbol(editVehicle.currency_symbol || "$");
          setPrice(editVehicle.price?.toString() || "0");
          setDiscount(editVehicle.discount?.toString() || "0");
          setFlag1(editVehicle.flag1 || false);
          setFlag2(editVehicle.flag2 || false);
          setFlag3(editVehicle.flag3 || false);
          setStopages(editVehicle.stopages?.toString() || "0");
          setShare(editVehicle.share?.toString() || "0");
          setLikes(editVehicle.likes?.toString() || "0");
          setMode(editVehicle.mode || "");
        }
      }, [editVehicle]);

    return(
        <div className="vehicle-form">
            <h2>{editVehicle ? "Update a Vehicle" : "Add New Vehicle"}</h2>

            <div>
                <label htmlFor="vehicleId">Vehicle ID:</label>
                <input id="vehicleId" type="text" placeholder="Vehicle ID" value={vehicleId} onChange={(e) => setVehicleId(e.target.value)} /><br />
            </div>
            <div>
                <label htmlFor="vehicleNo">Vehicle No:</label>
                <input id="vehicleNo" type="text" placeholder="Vehicle No" value={vehicleNo} onChange={(e) => setVehicleNo(e.target.value)} /><br />
            </div>

            <div>
                <label htmlFor="date">Date:</label>
                <input id="date" type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} /><br />
            </div>
            
            <div>
                <label htmlFor="fromTime">From Time:</label>
                <input id="fromTime" type="time" placeholder="From Time" value={fromTime} onChange={(e) => setFromTime(e.target.value)} /><br />
            </div>

            <div>
                <label htmlFor="toTime"> To Time:</label>
                <input id="toTime" type="time" placeholder="To Time" value={toTime} onChange={(e) => setToTime(e.target.value)} /><br />
            </div>
            
            <div>
                <label htmlFor="startTime"> Start Time:</label>
                <input id="startTime" type="time" placeholder="Start Time" value={startTime} onChange={(e) => setStartTime(e.target.value)} /><br />
            </div>

            <div>
                <label htmlFor="endTime">End Time: </label>
                <input id="endTime" type="time" placeholder="End Time" value={endTime} onChange={(e) => setEndTime(e.target.value)} /><br />
            </div>

            <div>
                <label htmlFor="currencySymbol">Currency Symbol:</label>
                <select value={currencySymbol} onChange={(e) => setCurrencySymbol(e.target.value)}>
                        <option value="$">$</option>
                        <option value="₹">₹</option>
                        <option value="€">€</option>
                </select><br />
            </div>
            
            <div>
                <label htmlFor="price">Price:</label>
                <input id="price" type="number" placeholder="Price" min={0} value={price} onChange={(e) => setPrice(e.target.value)} /><br />
            </div>

            <div>
                <label htmlFor="discount">Discount:</label>
                <input id="discount" type="number" placeholder="Discount" min={0} value={discount} onChange={(e) => setDiscount(e.target.value)} /><br />
            </div>
            
            <div>
                <input type="checkbox" checked={flag1} onChange={(e) => setFlag1(e.target.checked)} /> Flag 1<br />
                <input type="checkbox" checked={flag2} onChange={(e) => setFlag2(e.target.checked)} /> Flag 2<br />
                <input type="checkbox" checked={flag3} onChange={(e) => setFlag3(e.target.checked)} /> Flag 3<br />
            </div>
            
            <div>
                <label htmlFor="stopages">Stopages:</label>
                <input id="stopages" type="number" placeholder="Stopages" min={0} value={stopages} onChange={(e) => setStopages(e.target.value)} /><br />
            </div>
            
            <div>
                <label htmlFor="share"> Share:</label>
                <input id="share" type="number" placeholder="Share" min={0} value={share} onChange={(e) => setShare(e.target.value)} /><br />
            </div>
            
            <div>
                <label htmlFor="likes">Likes:</label>
                <input id="likes" type="number" placeholder="Likes" min={0} value={likes} onChange={(e) => setLikes(e.target.value)} /><br />

            </div>
            
            <div>
                <label htmlFor="mode">Mode:</label>
                <input id="mode" type="text" placeholder="Mode" value={mode} onChange={(e) => setMode(e.target.value)} /><br />
            </div>
            {editVehicle && (
                <button onClick={onEditComplete} style={{ marginTop: "10px" }}>
                    Cancel Edit
                </button>
            )}
            <button onClick={() => {

                if (!vehicleId || !vehicleNo) {
                    alert("Vehicle ID and Vehicle No are required!");
                    return;
                }
                const vehicleData = {
                    vehicle_no: vehicleNo,
                    date,
                    from_time: fromTime,
                    to_time: toTime,
                    start_time: startTime,
                    end_time: endTime,
                    currency_symbol: currencySymbol,
                    price: parseFloat(price),
                    discount: parseFloat(discount),
                    flag1,
                    flag2,
                    flag3,
                    stopages: parseInt(stopages),
                    share: parseInt(share),
                    likes: parseInt(likes),
                    mode,
                    id: vehicleId,
                  };
                  
                  const url = editVehicle
                    ? `http://localhost:8000/vehicle/${vehicleId}`
                    : `http://localhost:8000/vehicle`;
                  
                  const method = editVehicle ? "PUT" : "POST";
                  
                  fetch(url, {
                    method,
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(vehicleData),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      console.log(editVehicle ? "Vehicle updated:" : "Vehicle added:", data);
                      
                      //resetform
                      setVehicleId("");
                      setVehicleNo("");
                      setDate(new Date().toISOString().slice(0, 10));
                      setFromTime(currentTime);
                      setToTime(currentTime);
                      setStartTime(currentTime);
                      setEndTime(currentTime);
                      setCurrencySymbol("$");
                      setPrice("0");
                      setDiscount("0");
                      setFlag1(false);
                      setFlag2(false);
                      setFlag3(false);
                      setStopages("0");
                      setShare("0");
                      setLikes("0");
                      setMode("");
                  
                      if (onAdd) onAdd();
                      if (onEditComplete) onEditComplete();
                    })
                    .catch((err) => {
                      console.error("Error:", err);
                      alert("Failed to submit form");
                    });
            
            }}>{editVehicle ? "Update Vehicle" : "Add Vehicle"}</button>
        </div>
    )
}

export default VehicleForm;