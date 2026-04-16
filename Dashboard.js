import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();  // ✅ INSIDE FUNCTION

  return (
    <div>

      <button onClick={() => navigate("/register")}>
        Register
      </button>

    </div>
  );
}