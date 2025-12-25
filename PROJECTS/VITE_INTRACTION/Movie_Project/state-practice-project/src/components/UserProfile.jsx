import { useState } from "react";

const initialUser = { name: "Guest", city: "Unknown" };

function UserProfile() {
  const [user, setUser] = useState(initialUser);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>City: {user.city}</p>

      <button onClick={() => setUser({ ...user, name: "Sri" })}>
        Set Name to Sri
      </button>

      <button onClick={() => setUser({ ...user, city: "Hosur" })}>
        Set City to Hosur
      </button>

      <button onClick={() => setUser(initialUser)}>Reset</button>
    </div>
  );
}

export default UserProfile;
