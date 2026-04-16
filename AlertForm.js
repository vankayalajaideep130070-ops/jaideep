export default function AlertForm(){
  return(
    <div className="card">
      <h2 className="card-title">Create Emergency Alert</h2>

      <label className="label">Location</label>
      <input className="input" placeholder="Enter affected location"/>

      <label className="label">Severity Level</label>
      <select className="select">
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <label className="label">Emergency Details</label>
      <textarea className="textarea" placeholder="Describe situation"></textarea>

      <button className="btn-submit">Submit</button>
    </div>
  )
}