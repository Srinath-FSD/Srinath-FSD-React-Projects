const ProfessionalDetails = () => {
  const professionalDetails = {
    title: "Frontend Developer",
    company: "TCS",
    totalExperience: 3,
    industry: "IT Services",

    previous: [
      {
        company: "Infosys",
        role: "Junior Developer",
        years: 1
      },
      {
        company: "Wipro",
        role: "React Developer",
        years: 2
      }
    ]
  };

  const printCareerSummary = (details) => {
    console.log(`Current Job: ${details.title} at ${details.company} (${details.totalExperience} years)`);
    details.previous.forEach((job) => {
      console.log(`${job.role} at ${job.company} - ${job.years} years`);
    });
  };

  printCareerSummary(professionalDetails);

  return (
    <div>
      <h2>Professional Details</h2>

      <p>
        {professionalDetails.title} at {professionalDetails.company} (
        {professionalDetails.totalExperience} years)
      </p>

      <h3>Previous Experience</h3>
      {professionalDetails.previous.map((job, index) => (
        <p key={index}>
          {job.role} at {job.company} - {job.years} years
        </p>
      ))}
    </div>
  );
};

export default ProfessionalDetails;
