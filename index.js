import React, { useState, useEffect } from 'react';

function App() {
  const [waterSources, setWaterSources] = useState([]);
  const [sourceName, setSourceName] = useState('');
  const [pricePerLiter, setPricePerLiter] = useState('');
  const [availableLiters, setAvailableLiters] = useState('');
  const [sourceId, setSourceId] = useState('');
  const [availability, setAvailability] = useState(null);
  const [availabilityy, setAvailabilityy] = useState(null);
  const [totalPricePerLiter, setTotalPricePerLiter] = useState(0);
  

  useEffect(() => {
    // Initialize with mock data
    setWaterSources([]);
  }, []);

  useEffect(() => {
    // Calculate total price per liter
    let total = 0;
    waterSources.forEach(source => {
      total += source.pricePerLiter * source.availableLiters;
    });
    setTotalPricePerLiter(total);
  }, [waterSources]);

  const addWaterSource = () => {
    if (waterSources.length < 5) {
      const newTotalSources = waterSources.length + 1;
      const newSource = { id: newTotalSources, name: sourceName, pricePerLiter: parseFloat(pricePerLiter), availableLiters: parseInt(availableLiters) };
      setWaterSources([...waterSources, newSource]);
      setSourceName('');
      setPricePerLiter('');
      setAvailableLiters('');
    } else {
      alert('Maximum number of water sources reached (5)');
    }
  };

  const buyWater = () => {
    // Simulate buying water
    console.log(`Checking availability of source ${sourceId}`);
    const source = waterSources.find(source => source.id === parseInt(sourceId));
    if (source) {
      if (parseInt(availableLiters) <= source.availableLiters) {
        setAvailabilityy(true); // Available
      } else {
        setAvailabilityy(false); // Not Available
      }
    } else {
      setAvailabilityy(false); // Not Available
    }
  };
  

  const checkAvailability = () => {
    // Simulate checking availability
    console.log(`Checking availability of source ${sourceId}`);
    const source = waterSources.find(source => source.id === parseInt(sourceId));
    if (source) {
      setAvailability(source.availableLiters > 0);
    } else {
      setAvailability(false);
    }
  };

  return (
    <div className="App">
      <h1>Water Supply Management</h1>
      <style>
      {`
      body {
        background-color: #A758F7;
      }

      h1 {
            text-align: center;
          }
          `}
      </style>

      <div>
        <h2>Add Water Source</h2>
        <style>
      {`
      h2 {
            text-align: center;
          }
          `}
      </style>
        <input
          type="text"
          placeholder="Source Name"
          value={sourceName}
          onChange={(e) => setSourceName(e.target.value)}
          style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', width: '10%', marginLeft: '32%'}}
        />
        <input
          type="number"
          placeholder="Price per Liter"
          value={pricePerLiter}
          onChange={(e) => setPricePerLiter(e.target.value)}
          style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', width: '10%', marginLeft: '2.8%'}}
        />
        <input
          type="number"
          placeholder="Available Liters"
          value={availableLiters}
          onChange={(e) => setAvailableLiters(e.target.value)}
          style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', width: '10%', marginLeft: '2.8%' }}
        />
        <br></br><br></br>
        <button onClick={addWaterSource}>Add Water Source</button><br></br>
        <style>
      {`
      button {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding: 8px;
        border-radius: 5px;
        border: 1px solid #ccc;
        font-size: 16px;
        width: 15%;
        background-color: #552545;
        color: #FFDCCA;
        font-family: Arial;
          }
          `}
      </style>
      </div>

      <div>
      <br></br>
        <h2>Buy Water</h2>
        <input
         type="number"
         placeholder="Source ID"
         value={sourceId}
        onChange={(e) => setSourceId(e.target.value)}
        style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', width: '15%', marginLeft: '32%' }}
        />
        <input
        type="number"
        placeholder="Liters to Buy"
        value={availableLiters}
        onChange={(e) => setAvailableLiters(e.target.value)}
        style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', width: '15%', marginLeft: '7%' }}
        />
        <br></br><br></br>
      <button onClick={buyWater}>Buy Water </button>
       {availabilityy !== null && (
      <h4>{availabilityy ? 'Available' : 'Not Available'}</h4>
      )}
      </div>

      <div>
      <br></br><br></br>
        <h2>Check Availability</h2>
        <input
          type="number"
          placeholder="Source ID"
          value={sourceId}
          onChange={(e) => setSourceId(e.target.value)}
          style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', width: '39%', marginLeft: '31.9%' }}
        />
        <br></br><br></br>
        <button onClick={checkAvailability}>Check Availability</button>
        {availability !== null && (
          <h4>{availability ? 'Available' : 'Not Available'}</h4>
        )}
        <style>
      {`
      h3{
            text-align: center;
          }
          `}
      </style>
        <br></br>
      </div>

      <div>
        <h2>Water Source List</h2>
        <ul>
          {waterSources.map(source => (
            <li key={source.id}>
              <strong>ID:</strong> {source.id} - <strong>Name:</strong> {source.name} - <strong>Price per Liter:</strong> {source.pricePerLiter} - <strong>Available Liters:</strong> {source.availableLiters}
            </li>
          ))}
          <style>
      {`
      li {
            text-align: center;
          }
          `}
      </style>
        </ul>
      </div>

      <div>
        <h2>Total Price per Liter</h2>
        <h3>{totalPricePerLiter}</h3>
      </div>
    </div>
  );
}
export default App;