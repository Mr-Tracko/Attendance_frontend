import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

function MarkAttendance() {
  const location = useLocation();
  const students = location.state?.students || [];
  const [attendance, setAttendance] = useState({});
  const [selectedSubject, setSelectedSubject] = useState("");
  const [defaultStatus, setDefaultStatus] = useState('present');
  const Totalcount = students.length;
  const presentcount = Object.values(attendance).filter(status => status === 'present').length;

  useEffect(() => {
    const initialAttendance = {};
    students.forEach(student => {
      initialAttendance[student.rollNo] = 'absent';
    });
    setAttendance(initialAttendance);
  }, [students]);

  const toggleAttendance = (rollNo) => {
    setAttendance(prev => ({
      ...prev,
      [rollNo]: prev[rollNo] === 'absent' ? 'present' : 'absent'
    }));
  };

  const subjects = [
    "Operating System (OS)",
    "Linear Structures",
    "Computer Networks",
    "Microprocessor",
    "Economics",
  ];

  const handleAttendanceData = async (e) => {
    e.preventDefault();

    const attendanceData = students.map((student) => ({
      rollNo: student.rollNo,
      name: student.name,
      date: new Date().toLocaleDateString(),
      subject: selectedSubject,
      status: attendance[student.rollNo],
      Totalstudents: Totalcount,
    }));

    try {
      const res = await fetch("http://localhost:5000/api/mark-attendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          attendance: attendanceData,
          mode: "upsert" 
        })
      });
      if (res.ok) {
        alert("Attendance marked successfully!");
      } else {
        alert("Failed to mark attendance.");
      }
    } catch (err) {
      alert("Error marking attendance: ", err);
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto my-8 px-4 pt-8 pb-8">
      <div className="flex flex-col bg-black rounded-lg shadow-2xl border border-gray-800 overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-6 bg-gradient-to-r from-cyan-600/10 to-cyan-500/5 border-b border-gray-800">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">Mark Attendance</h2>
              <p className="text-gray-400 mt-2">Class attendance for <span className="text-cyan-300 font-medium">{new Date().toLocaleDateString()}</span></p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 whitespace-nowrap">
                  Select Subject:
                </label>
                <select
                  id="subject"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="bg-black border border-gray-700 text-white text-sm rounded-md focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 px-4 py-2 transition-all duration-200 hover:border-gray-600"
                >
                  <option value="">Select a subject</option>
                  {subjects.map((subject, index) => (
                    <option key={index} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => {
                  const newStatus = defaultStatus === 'present' ? 'absent' : 'present';
                  setDefaultStatus(newStatus);
                  const newAttendance = {};
                  students.forEach(student => {
                    newAttendance[student.rollNo] = newStatus;
                  });
                  setAttendance(newAttendance);
                }}
                className="px-4 py-2 bg-white hover:bg-gray-100 text-black font-medium rounded transition-all duration-200 text-sm transform hover:scale-105"
              >
                Default: {defaultStatus === 'present' ? 'Present' : 'Absent'}
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-black border-b border-gray-800">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Roll No</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={student.rollNo}
                  className={`hover:bg-gray-900/50 transition-colors duration-200 border-b border-gray-800 ${index % 2 === 0 ? 'bg-black/50' : 'bg-black/30'}`}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{student.rollNo}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                      attendance[student.rollNo] === 'present'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                    }`}>
                      {attendance[student.rollNo] === 'present' ? '✓ Present' : '✗ Absent'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => toggleAttendance(student.rollNo)}
                      className="px-3 py-1 bg-white hover:bg-gray-100 text-black font-medium rounded transition-all duration-200 transform hover:scale-105"
                    >
                      Toggle
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {students.length === 0 && (
          <div className="p-8 text-center text-gray-400">
            No students data available. Please go back and select a class.
          </div>
        )}

        {/* Footer with Stats */}
        <div className="px-6 py-6 bg-black border-t border-gray-800 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-gray-400 text-sm">
              {selectedSubject ? <span>Selected Subject: <span className="text-cyan-300 font-medium">{selectedSubject}</span></span> : <span className="text-gray-500">Please select a subject</span>}
            </div>
            <button
              className={`px-6 py-2 font-medium rounded transition-all duration-200 transform ${
                selectedSubject 
                  ? 'bg-white hover:bg-gray-100 text-black hover:scale-105 shadow-lg' 
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
              onClick={(e) => {
                if (selectedSubject) {
                  handleAttendanceData(e);
                }
              }}
              disabled={!selectedSubject}
            >
              Save Attendance
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 border border-cyan-500/20 rounded-lg">
              <p className="text-gray-400 text-sm mb-1">Total Students</p>
              <p className="text-2xl font-bold text-cyan-300">{Totalcount}</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-cyan-500/10 to-cyan-400/5 border border-cyan-500/20 rounded-lg">
              <p className="text-gray-400 text-sm mb-1">Present Students</p>
              <p className="text-2xl font-bold text-cyan-300">{presentcount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarkAttendance;