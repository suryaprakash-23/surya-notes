import { useState } from "react";

export default function App() {
  const subjects = [
    "MFCS",
    "Data Structures",
    "Java",
    "Computer Architecture",
    "Probability & Statistics",
    "Managerial Economics",
  ];

  const [selectedSubject, setSelectedSubject] = useState(null);

  // SUBJECT PAGE
  if (selectedSubject) {
    const units = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"];

    return (
      <div>
        <header
          style={{
            background: "#4f46e5",
            color: "white",
            padding: "15px 25px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          📚 Surya Notes Portal
        </header>

        <div style={{ padding: 40 }}>
          <button
            onClick={() => setSelectedSubject(null)}
            style={{ marginBottom: 20, padding: "8px 12px" }}
          >
            ⬅ Back
          </button>

          <h2>{selectedSubject}</h2>

          <div
            style={{
              marginTop: 20,
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            {units.map((unit, index) => (
              <div
                key={index}
                style={{
                  flex: "1 1 200px",
                  padding: 20,
                  borderRadius: 12,
                  background: "#9b1212",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  fontWeight: "bold",
                }}
              >
                {unit}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // HOME PAGE
  return (
    <div>
      <header
        style={{
          background: "#4f46e5",
          color: "white",
          padding: "15px 25px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        📚 Surya Notes Portal
      </header>

      <div style={{ padding: 40 }}>
        <h2>Select Subject</h2>

        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          {subjects.map((sub, index) => (
            <div
              key={index}
              onClick={() => setSelectedSubject(sub)}
              style={{
                flex: "1 1 250px",
                padding: 25,
                borderRadius: 14,
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s",
                background:
                  "linear-gradient(135deg, #667eea, #764ba2)",
              }}
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
