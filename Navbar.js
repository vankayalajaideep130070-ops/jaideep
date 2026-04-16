import { useNavigate } from "react-router-dom";
export default function Navbar(){
  const navigate = useNavigate();
  return(
    <div className="navbar">
      <h1 className="nav-logo">RESCUE INDIA</h1>

      <div className="nav-links">
        <a className="nav-link">Home</a>
        <a className="nav-link nav-active">News</a>
        <a className="nav-link nav-active">Alerts</a>
        <a className="nav-link">Contact</a>
      </div>

      <div className="nav-buttons">
        <button onClick={() => navigate("/login")}>
  Sign in
</button>

<button onClick={() => navigate("/register")}>
  Register
</button>
      </div>
    </div>
  )
}