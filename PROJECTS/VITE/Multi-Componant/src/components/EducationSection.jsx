import EducationCard from "./EducationCard";

function EducationSection() {
  const educationList = [
    "Central University",
    "Tech Institute",
    "Elementary Academy",
  ];

  return (
    <div>
      <h2>Education Institutions</h2>

      {educationList.map((education, index) => (
        <EducationCard key={index} name={education} />
      ))}
    </div>
  );
}

export default EducationSection;
