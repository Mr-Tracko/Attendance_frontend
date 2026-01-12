import { useState, React } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [year, setYear] = useState("");
  const [branchSection, setBranchSection] = useState("");
  const [date, setDate] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const API_BASE_URL = process.env.REACT_APP_API_URL || "https://attendance-backend-yqrj.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // First API call - submit form
      const res = await fetch(`${API_BASE_URL}/api/submit-form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          year,
          section: branchSection,
          date,
        }),
      });

      const data = await res.json();
      console.log("Submit form response:", data);

      if (!res.ok) {
        throw new Error(data.message || "Submission failed");
      }

      // Second API call - fetch students with proper query parameters
      const queryParams = new URLSearchParams({
        year: year,
        branchSection: branchSection
      }).toString();

      console.log("Fetching students with params:", queryParams);

      const studentsRes = await fetch(
        `https://attendance-backend-yqrj.onrender.com/api/students/getStudents?${queryParams}`
      );

      if (!studentsRes.ok) {
        throw new Error(`HTTP error! status: ${studentsRes.status}`);
      }

      const studentsData = await studentsRes.json();
      console.log("Fetched students:", studentsData);

      if (Array.isArray(studentsData) && studentsData.length > 0) {
        setStudents(studentsData);
        setShowTable(true);
        navigate("/mark-attendance", { state: { students: studentsData } });
      } else {
        setError("No students found for the selected criteria");
      }
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (e) => {
    e.preventDefault();
    console.log("Download button clicked");
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 py-3 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-md mx-auto bg-black border border-gray-800 rounded-lg shadow-2xl overflow-hidden relative z-10">
        {/* Cyan accent border top */}
        <div className="h-1 bg-gradient-to-r from-cyan-500 to-cyan-400"></div>

        <div className="px-6 py-8">
          <h2 className="text-3xl font-bold text-center text-white mb-1 tracking-tight">
            Admin Panel
          </h2>
          <p className="text-center text-gray-400 text-sm mb-8">
            Mark Attendance
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-900/20 border border-red-700 rounded-md text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Year Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Year
              </label>
              <div className="relative">
                <select
                  id="year"
                  name="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                  className="block w-full bg-black border border-gray-700 rounded-md py-2 pl-3 pr-10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 appearance-none transition-all duration-200 hover:border-gray-600"
                >
                  <option value="" disabled>
                    Select Year
                  </option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Branch and Section */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Branch and Section
              </label>
              <div className="relative">
                <select
                  id="branchSection"
                  name="branchSection"
                  value={branchSection}
                  onChange={(e) => setBranchSection(e.target.value)}
                  required
                  className="block w-full bg-black border border-gray-700 rounded-md py-2 pl-3 pr-10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 appearance-none transition-all duration-200 hover:border-gray-600"
                >
                  <option value="" disabled>
                    Select Branch & Section
                  </option>
                  <option value="CSE-A">CSE-A</option>
                  <option value="CSE-B">CSE-B</option>
                  <option value="IT-A">IT-A</option>
                  <option value="IT-B">IT-B</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Date Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Date of Marking Attendance
              </label>
              <div className="relative">
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="block w-full bg-black border border-gray-700 rounded-md py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-200 hover:border-gray-600"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-cyan-400 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Loading..." : "Mark Attendance"}
              </button>
            </div>
          </form>

          {/* Download Button */}
          <div className="pt-4">
            <button
              type="button"
              onClick={handleDownload}
              className="w-full flex justify-center py-3 px-4 border border-gray-700 rounded-md shadow-lg text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-cyan-400 transition-all duration-200 transform hover:scale-105"
            >
              Download the List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;