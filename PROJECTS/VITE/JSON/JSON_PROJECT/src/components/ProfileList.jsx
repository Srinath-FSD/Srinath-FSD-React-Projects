import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

function ProfileList() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Profile Cards</h2>
      {users.map((user) => (
        <ProfileCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default ProfileList;
