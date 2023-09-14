import { useState } from "react";

export default function Team() {
  const teamStyle = {
    border: "2px solid black",
    margin: "15px",
    padding: "15px",
    color: "black",
    background: "#eee",
    borderRadius: "25px",
  };

  const [member, setMember] = useState(0);

  const handleAddMember = () => {
    const newMember = member + 1;
    setMember(newMember);
  };

  const handleRemoveMember = () => {
    const newMember = member - 1;
    setMember(newMember);
  };

  return (
    <>
      <div style={teamStyle}>
        <h3>Team: {member}</h3>
        <button onClick={handleAddMember}>Add New Member</button>
        <button onClick={handleRemoveMember}>Remove Member</button>
      </div>
    </>
  );
}
