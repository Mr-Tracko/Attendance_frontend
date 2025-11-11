// import { useState , React } from "react";
// import { useNavigate } from "react-router-dom";

// function Admin() {
//   const [year, setYear] = useState("");
//   const [branchSection, setBranchSection] = useState("");
//   const [date, setDate] = useState("");
//   const [showTable, setShowTable] = useState(false);
//   const [students, setStudents] = useState([]);
//   const navigate = useNavigate(); 

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Prevents the page from refreshing when the form is submitted. This is necessary in React forms.

//     try {
//       const res = await fetch("http://localhost:5000/api/submit-form", {
//         //ye hmaare backend ko POST req bhejega , jo ki form se data lega and database m save karega
//         method: "POST",
//         //Tells You're creating data (submitting a form) on the server.
//         // POST is used to send data to the server.
//         headers: { "Content-Type": "application/json" },
//         // What happens without it?
//         // If you don't include Content-Type: "application/json", then:
//         // req.body on your backend will be undefined or empty.
//         // Server won't parse the data unless you manually handle it.
//         body: JSON.stringify({
//           year,
//           section : branchSection,
//           date,
//         }),
//       });

//       const data = await res.json();
//       if (res.ok) {
       
//         const studentsRes = await fetch(`http://localhost:5000/api/students/getStudents?year=${year}&branchSection=${branchSection}`);
//         const studentsData = await studentsRes.json();
//         console.log("Fetched students:", studentsData);
//         navigate("/mark-attendance", { state: { students: studentsData } });
//         setStudents(studentsData);
//         setShowTable(true);
//       } else {
//         alert(data.message || "Submission failed");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong");
//     }
//   };

//   const handleDownload = async (e) => {
//     e.preventDefault();
//     // Add your download logic here
//     console.log("Download button clicked");
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
//         <div className="px-6 py-8">
//           <h2 className="text-2xl font-bold text-center text-purple-400 mb-8">
//             Admin Attendance Panel
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Year Selection */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 Year
//               </label>
//               <div className="relative">
//                 <select
//                   id="year"
//                   name="year"
//                   value={year}
//                   onChange={(e) => setYear(e.target.value)}
//                   required
//                   className="block w-full bg-gray-700 border border-gray-600 rounded-md py-2 pl-3 pr-10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none"
//                 >
//                   <option value="" disabled>Select Year</option>
//                   <option value="1st">1st</option>
//                   <option value="2nd">2nd</option>
//                   <option value="3rd">3rd</option>
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
//                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Branch and Section */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 Branch and Section
//               </label>
//               <div className="relative">
//                 <select
//                   id="branchSection" 
//                   name="branchSection"
//                   value={branchSection}
//                   onChange={(e) => setBranchSection(e.target.value)}
//                   required
//                   className="block w-full bg-gray-700 border border-gray-600 rounded-md py-2 pl-3 pr-10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none"
//                 >
//                   <option value="" disabled>Select Branch & Section</option>
//                   <option value="CSE-A">CSE-A</option>
//                   <option value="CSE-B">CSE-B</option>
//                   <option value="IT-A">IT-A</option>
//                   <option value="IT-B">IT-B</option>
//                 </select>
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
//                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Date Picker */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 Date of Marking Attendance
//               </label>
//               <div className="relative">
//                 <input
//                   id="date"
//                   name="date"
//                   type="date"
//                   value={date}
//                   onChange={(e) => setDate(e.target.value)}
//                   required
//                   className="block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//                 />
//                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-purple-400">
//                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="pt-4">
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150"
//               >
//                 Mark Attendance
//               </button>
//             </div>
//           </form>
          
//           {/* Download Button - Outside the form */}
//           <div className="pt-4">
//             <button
//               type="button"
//               onClick={handleDownload}
//               className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150"
//             >
//               Download the List
//             </button>
//           </div>
//           {/* {showTable && <MarkAttendance students={students} />} */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Admin;

import { useState, React } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [year, setYear] = useState("");
  const [branchSection, setBranchSection] = useState("");
  const [date, setDate] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          year,
          section: branchSection,
          date,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        const studentsRes = await fetch(
          `http://localhost:5000/api/students/getStudents?year=${year}&branchSection=${branchSection}`
        );
        const studentsData = await studentsRes.json();
        console.log("Fetched students:", studentsData);
        navigate("/mark-attendance", { state: { students: studentsData } });
        setStudents(studentsData);
        setShowTable(true);
      } else {
        alert(data.message || "Submission failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
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
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-sm font-medium text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-cyan-400 transition-all duration-200 transform hover:scale-105"
              >
                Mark Attendance
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