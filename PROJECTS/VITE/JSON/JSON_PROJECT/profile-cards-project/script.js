async function getProfiles() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const container = document.getElementById("cards");

  data.forEach((user) => {
    container.innerHTML += `
      <div style="border:1px solid gray; margin:10px; padding:10px">
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>City: ${user.address.city}</p>
      </div>
    `;
  });
}

getProfiles();
