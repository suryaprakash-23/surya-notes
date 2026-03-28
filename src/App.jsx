import { useState } from "react";
import Home from "./pages/Home";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [year, setYear] = useState(null);
  const [semester, setSemester] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  // SUBJECT DATA (you can customize later)
  const subjectsData = {
    "1-1": ["MFCS", "Data Structures"],
    "1-2": ["Java", "Computer Architecture"],
    "2-1": ["Probability & Statistics"],
    "2-2": ["Managerial Economics"],
  };

  // SUBJECT PAGE (UNITS)
  if (selectedSubject) {
    const units = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"];

    return (
      <div>
        <header style={headerStyle}>📚 Surya Notes Portal</header>

        <div style={{ padding: 40 }}>
          <button onClick={() => setSelectedSubject(null)}>
            ⬅ Back
          </button>

          <h2>{selectedSubject}</h2>

          <div style={cardContainer}>
            {units.map((unit, index) => (
              <div key={index} style={cardStyle}>
                {unit}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // SUBJECT LIST PAGE
  if (year && semester) {
    const key = `${year}-${semester}`;
    const subjects = subjectsData[key] || [];

    return (
      <div>
        <header style={headerStyle}>📚 Surya Notes Portal</header>

        <div style={{ padding: 40 }}>
          <button onClick={() => setSemester(null)}>
            ⬅ Back
          </button>

          <h2>Select Subject</h2>

          <div style={cardContainer}>
            {subjects.map((sub, index) => (
              <div
                key={index}
                style={cardStyle}
                onClick={() => setSelectedSubject(sub)}
              >
                {sub}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // SEMESTER PAGE
  if (year) {
    return (
      <div>
        <header style={headerStyle}>📚 Surya Notes Portal</header>

        <div style={{ padding: 40 }}>
          <button onClick={() => setYear(null)}>⬅ Back</button>

          <h2>Select Semester</h2>

          <div style={cardContainer}>
            {[1, 2].map((sem) => (
              <div
                key={sem}
                style={cardStyle}
                onClick={() => setSemester(sem)}
              >
                Semester {sem}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // YEAR PAGE
  if (entered) {
    return (
      <div>
        <header style={headerStyle}>📚 Surya Notes Portal</header>

        <div style={{ padding: 40 }}>
          <h2>Select Year</h2>

          <div style={cardContainer}>
            {[1, 2].map((yr) => (
              <div
                key={yr}
                style={cardStyle}
                onClick={() => setYear(yr)}
              >
                Year {yr}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // HOME PAGE
  return <Home onEnter={() => setEntered(true)} />;
}

// 🎨 STYLES
const headerStyle = {
  background: "#4f46e5",
  color: "white",
  padding: "15px 25px",
  fontSize: "20px",
  fontWeight: "bold",
};

const cardContainer = {
  marginTop: 20,
  display: "flex",
  flexWrap: "wrap",
  gap: 20,
};

const cardStyle = {
  flex: "1 1 200px",
  padding: 20,
  borderRadius: 12,
  background: "#9b1212",
  color: "white",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  fontWeight: "bold",
  cursor: "pointer",
  textAlign: "center",
};