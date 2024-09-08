import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [unverifiedCounselors, setUnverifiedCounselors] = useState([]);

  useEffect(() => {
    axios
      .get("/api/counselors/unverified")
      .then((res) => setUnverifiedCounselors(res.data))
      .catch((err) => console.error(err));
  }, []);

  const verifyCounselor = (id) => {
    axios
      .patch(`/api/counselors/verify/${id}`)
      .then(() => {
        setUnverifiedCounselors((prev) =>
          prev.filter((counselor) => counselor._id !== id)
        );
        alert("Counselor verified successfully!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Unverified Counselor Profiles</h1>
      <ul>
        {unverifiedCounselors.map((counselor) => (
          <li key={counselor._id}>
            {counselor.name}
            <button onClick={() => verifyCounselor(counselor._id)}>
              Verify
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
