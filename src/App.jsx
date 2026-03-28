import { useState, useEffect } from "react";
import Home from "./pages/Home";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [year, setYear] = useState(null);
  const [semester, setSemester] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  // ✅ Detect Mobile / Desktop
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const subjectsData = {
    "1-1": ["MFCS", "Data Structures"],
    "1-2": ["Java", "Computer Architecture"],
    "2-1": ["Probability & Statistics"],
    "2-2": ["Managerial Economics"],
  };

  const units = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"];

  // 🔁 Layout
  const Layout = ({ children }) => (
    <div>
      <header style={headerStyle(isMobile)}>📚 Surya Notes Portal</header>
      <div style={containerStyle(isMobile)}>{children}</div>
    </div>
  );

  // SUBJECT PAGE
  if (selectedSubject) {
    return (
      <Layout>
        <button style={backBtn} onClick={() => setSelectedSubject(null)}>
          ⬅ Back
        </button>

        <h2 style={titleStyle}>{selectedSubject}</h2>

        <div style={cardContainer(isMobile)}>
          {units.map((unit, i) => (
            <div key={i} style={cardStyle(isMobile)}>
              {unit}
            </div>
          ))}
        </div>
      </Layout>
    );
  }

  // SUBJECT LIST
  if (year && semester) {
    const key = `${year}-${semester}`;
    const subjects = subjectsData[key] || [];

    return (
      <Layout>
        <button style={backBtn} onClick={() => setSemester(null)}>
          ⬅ Back
        </button>

        <h2 style={titleStyle}>Select Subject</h2>

        <div style={cardContainer(isMobile)}>
          {subjects.map((sub, i) => (
            <div
              key={i}
              style={cardStyle(isMobile)}
              onClick={() => setSelectedSubject(sub)}
            >
              {sub}
            </div>
          ))}
        </div>
      </Layout>
    );
  }

  // SEMESTER
  if (year) {
    return (
      <Layout>
        <button style={backBtn} onClick={() => setYear(null)}>
          ⬅ Back
        </button>

        <h2 style={titleStyle}>Select Semester</h2>

        <div style={cardContainer(isMobile)}>
          {[1, 2].map((sem) => (
            <div
              key={sem}
              style={cardStyle(isMobile)}
              onClick={() => setSemester(sem)}
            >
              Semester {sem}
            </div>
          ))}
        </div>
      </Layout>
    );
  }

  // YEAR
  if (entered) {
    return (
      <Layout>
        <h2 style={titleStyle}>Select Year</h2>

        <div style={cardContainer(isMobile)}>
          {[1, 2].map((yr) => (
            <div
              key={yr}
              style={cardStyle(isMobile)}
              onClick={() => setYear(yr)}
            >
              Year {yr}
            </div>
          ))}
        </div>
      </Layout>
    );
  }

  return <Home onEnter={() => setEntered(true)} />;
}

// 🎨 STYLES (DYNAMIC)

const headerStyle = (isMobile) => ({
  background: "#4f46e5",
  color: "white",
  padding: isMobile ? "12px" : "16px",
  fontSize: isMobile ? "16px" : "22px",
  fontWeight: "bold",
  textAlign: "center",
});

const containerStyle = (isMobile) => ({
  maxWidth: isMobile ? "100%" : "1100px",
  margin: "0 auto",
  padding: isMobile ? "15px" : "25px",
});

const titleStyle = {
  fontSize: "clamp(18px, 4vw, 26px)",
  marginBottom: "15px",
};

const backBtn = {
  marginBottom: 20,
  padding: "10px 16px",
  borderRadius: "8px",
  border: "none",
  background: "#e5e7eb",
  cursor: "pointer",
};

const cardContainer = (isMobile) => ({
  display: "grid",
  gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
  gap: "16px",
});

const cardStyle = (isMobile) => ({
  padding: isMobile ? "16px" : "22px",
  borderRadius: "16px",
  background: "linear-gradient(135deg, #7f1d1d, #b91c1c)",
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  fontSize: isMobile ? "14px" : "16px",
});
