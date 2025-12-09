const PersonalInfo = () => {
  const info = {
    userName: "Seenu",
    mobile: "xxxxxxxxx",
    gender: "Male",
    dob: "05-03-2005",
    city: "Hosur",
    state: "Tamil Nadu",
    country: "India",
  };

  const address = `${info.city}, ${info.state}, ${info.country}`;

  return (
    <div>
      <h3>Personal Info</h3>
      <p>{info.userName}</p>
      <p>{info.mobile}</p>
      <p>{info.gender}</p>
      <p>{info.dob}</p>
      <p>{address}</p>
    </div>
  );
};

export default PersonalInfo;
