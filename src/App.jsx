import { useState } from "react";
import Home from "./pages/Home";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [year, setYear] = useState(null);
  const [semester, setSemester] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

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

        <div style={containerStyle}>
          <button style={backBtn} onClick={() => setSelectedSubject(null)}>
            ⬅ Back
          </button>

          <h2 style={titleStyle}>{selectedSubject}</h2>

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

        <div style={containerStyle}>
          <button style={backBtn} onClick={() => setSemester(null)}>
            ⬅ Back
          </button>

          <h2 style={titleStyle}>Select Subject</h2>

          <div style={cardContainer}>
            {subjects.map((sub, index) => (
              <div
                key={index}
                style={cardStyle}
                onClick={() => setSelectedSubject(sub)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
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

        <div style={containerStyle}>
          <button style={backBtn} onClick={() => setYear(null)}>
            ⬅ Back
          </button>

          <h2 style={titleStyle}>Select Semester</h2>

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

        <div style={containerStyle}>
          <h2 style={titleStyle}>Select Year</h2>

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

  return <Home onEnter={() => setEntered(true)} />;
}

// 🎨 RESPONSIVE STYLES

const headerStyle = {
  background: "#4f46e5",
  color: "white",
  padding: "12px 20px",
  fontSize: "clamp(16px, 3vw, 22px)", // responsive text
  fontWeight: "bold",
  textAlign: "center",
};

const containerStyle = {
  padding: "20px 5vw", // responsive padding
};

const titleStyle = {
  fontSize: "clamp(18px, 4vw, 26px)",
  marginBottom: "15px",
};

const backBtn = {
  marginBottom: 20,
  padding: "8px 14px",
  borderRadius: "8px",
  border: "none",
  background: "#e5e7eb",
  cursor: "pointer",
};

const cardContainer = {
  marginTop: 20,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: 20,
};

const cardStyle = {
  padding: "18px",
  borderRadius: "16px",
  background: "linear-gradient(135deg, #7f1d1d, #b91c1c)",
  color: "white",
  boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
  fontWeight: "bold",
  cursor: "pointer",
  textAlign: "center",
  transition: "0.3s",
};
