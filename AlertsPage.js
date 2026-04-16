import { useEffect, useState } from "react";
import axios from "axios";

export default function AlertsPage() {
  const [alerts, setAlerts] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/alerts")
      .then(res => setAlerts(res.data));
  }, []);

  return (
    <div className="container">
      <h1 className="dashboard-title text-red-600"> Alerts</h1>

      <div className="grid-layout">
        {alerts.map(a => (
          <div
            key={a._id}
            className="card cursor-pointer"
            onClick={() => setSelected(a)}
          >
            <h3 className="card-title">{a.title}</h3>
            <p className="card-subtitle">{a.location}</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-xl font-bold text-red-600">
              {selected.title}
            </h2>
            <p className="mt-2">{selected.message}</p>
            <p className="text-sm text-gray-500 mt-2">
              {selected.location}
            </p>

            <button
              className="btn btn-danger mt-4"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}