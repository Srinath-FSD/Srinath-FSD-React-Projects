import SectorCard from "./SectorCard";

function SectorsSection() {
  const sectors = [
    "Technology",
    "Agriculture",
    "Energy",
    "Healthcare",
    "Transportation",
    "Commerce",
  ];

  return (
    <div>
      <h2>Sectors</h2>

      {sectors.map((s, index) => (
        <SectorCard key={index} name={s} />
      ))}
    </div>
  );
}

export default SectorsSection;
