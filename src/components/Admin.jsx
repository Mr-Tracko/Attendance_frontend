// import { useNavigate, useLocation } from "react-router-dom";
// import defaultImg from "../images/default.jpg";
// import React, { useState, useEffect } from "react";

// const StudentProfile = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const studentData = location.state?.studentData;
    
//     const [subjectsData, setSubjectsData] = useState([
//         { id: 1, name: "Operating System (OS)", totalLectures: 0, attendedLectures: 0, percentage: 0 },
//         { id: 2, name: "Linear Structures", totalLectures: 0, attendedLectures: 0, percentage: 0 },
//         { id: 3, name: "Computer Networks", totalLectures: 0, attendedLectures: 0, percentage: 0 },
//         { id: 4, name: "Microprocessor", totalLectures: 0, attendedLectures: 0, percentage: 0 },
//         { id: 5, name: "Economics", totalLectures: 0, attendedLectures: 0, percentage: 0 },
//     ]);
    
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         if (studentData?.rollNo) {
//             fetchAttendanceData();
//         }
//     }, [studentData?.rollNo]);

//     const fetchAttendanceData = async () => {
//         try {
//             setLoading(true);
//             const response = await fetch(`http://localhost:5000/api/student-attendance/${studentData.rollNo}`);
            
//             if (!response.ok) {
//                 throw new Error('Failed to fetch attendance data');
//             }
            
//             const data = await response.json();
            
//             const updatedSubjects = subjectsData.map((subject, index) => {
//                 const fetchedSubject = data.find(item => item.subject === subject.name);
//                 return {
//                     id: index + 1,
//                     name: subject.name,
//                     totalLectures: fetchedSubject?.totalLectures || 0,
//                     attendedLectures: fetchedSubject?.attendedLectures || 0,
//                     percentage: fetchedSubject?.percentage || 0
//                 };
//             });
            
//             setSubjectsData(updatedSubjects);
//             setLoading(false);
//         } catch (err) {
//             console.error('Error fetching attendance:', err);
//             setError(err.message);
//             setLoading(false);
//         }
//     };

//     const handleViewHistory = (subject) => {
//         navigate("/history", {
//             state: {
//                 rollNo: studentData.rollNo,
//                 subject: subject
//             }
//         });
//     };

//     if (!studentData) {
//         return (
//             <div className="min-h-screen bg-black text-gray-200 flex items-center justify-center">
//                 <p className="text-lg">No student data found.</p>
//             </div>
//         );
//     }
    
//     return (
//         <div className="min-h-screen bg-black text-gray-100 py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//             {/* Decorative background elements */}
//             <div className="absolute inset-0 w-full h-full z-0">
//                 <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
//                 <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
//             </div>

//             <div className="max-w-4xl mx-auto relative z-10">
//                 {/* Header Card */}
//                 <div className="bg-black border border-gray-800 rounded-lg shadow-2xl overflow-hidden mb-6">
//                     <div className="h-1 bg-gradient-to-r from-cyan-500 to-cyan-400"></div>
                    
//                     <div className="px-6 py-8">
//                         <h2 className="text-3xl font-bold text-white mb-1 tracking-tight">
//                             Student Profile
//                         </h2>
//                         <p className="text-gray-400 text-sm">View your attendance details</p>
//                     </div>
//                 </div>

//                 {/* Student Info Card */}
//                 <div className="bg-black border border-gray-800 rounded-lg shadow-2xl overflow-hidden mb-6">
//                     <div className="px-6 py-8">
//                         <h3 className="text-xl font-bold text-white mb-6 flex items-center">
//                             <span className="w-1 h-6 bg-cyan-500 rounded-full mr-3"></span>
//                             Student Information
//                         </h3>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                             {/* Info Details */}
//                             <div className="space-y-4">
//                                 <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-all">
//                                     <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">Name</p>
//                                     <p className="text-lg font-medium text-white">{studentData.name}</p>
//                                 </div>

//                                 <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-all">
//                                     <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">Roll Number</p>
//                                     <p className="text-lg font-medium text-white">{studentData.rollNo}</p>
//                                 </div>

//                                 <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-all">
//                                     <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">Branch</p>
//                                     <p className="text-lg font-medium text-white">{studentData.section}</p>
//                                 </div>

//                                 <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-all">
//                                     <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">Year</p>
//                                     <p className="text-lg font-medium text-white">{studentData.year}</p>
//                                 </div>
//                             </div>

//                             {/* Photo Section */}
//                             <div className="flex flex-col items-center justify-center">
//                                 <div className="relative">
//                                     <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full blur opacity-20"></div>
//                                     <img
//                                         src={defaultImg}
//                                         alt="Student"
//                                         className="relative w-48 h-48 rounded-full object-cover border-2 border-cyan-500 shadow-lg"
//                                     />
//                                 </div>
//                                 <div className="mt-6 bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2">
//                                     <p className="text-xs text-gray-400">ID: <span className="font-bold text-white">{studentData.rollNo}</span></p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Attendance Section */}
//                 <div className="bg-black border border-gray-800 rounded-lg shadow-2xl overflow-hidden">
//                     <div className="px-6 py-8">
//                         <div className="flex justify-between items-center mb-6">
//                             <h3 className="text-xl font-bold text-white flex items-center">
//                                 <span className="w-1 h-6 bg-cyan-500 rounded-full mr-3"></span>
//                                 Subject Attendance
//                             </h3>
//                             <button 
//                                 onClick={fetchAttendanceData}
//                                 disabled={loading}
//                                 className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-medium rounded-md transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
//                             >
//                                 {loading ? '⏳ Loading...' : '🔄 Refresh'}
//                             </button>
//                         </div>

//                         {error && (
//                             <div className="mb-6 p-4 bg-red-900/30 border border-red-800 rounded-lg">
//                                 <p className="text-red-300 text-sm">⚠️ Error loading attendance data. Using default values.</p>
//                             </div>
//                         )}

//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                             {subjectsData.map((subject) => (
//                                 <div 
//                                     key={subject.id} 
//                                     className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 hover:border-cyan-500/50 hover:shadow-lg transition-all duration-200 group"
//                                 >
//                                     <h4 className="text-base font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
//                                         {subject.name}
//                                     </h4>

//                                     <div className="space-y-3 mb-4">
//                                         <div className="flex justify-between items-center">
//                                             <span className="text-sm text-gray-400">Total Lectures</span>
//                                             <span className="text-sm font-bold text-white bg-gray-800/50 px-2 py-1 rounded">
//                                                 {subject.totalLectures}
//                                             </span>
//                                         </div>

//                                         <div className="flex justify-between items-center">
//                                             <span className="text-sm text-gray-400">Attended</span>
//                                             <span className="text-sm font-bold text-white bg-gray-800/50 px-2 py-1 rounded">
//                                                 {subject.attendedLectures}
//                                             </span>
//                                         </div>

//                                         <div className="flex justify-between items-center">
//                                             <span className="text-sm text-gray-400">Percentage</span>
//                                             <span className={`text-sm font-bold px-2 py-1 rounded ${
//                                                 subject.percentage >= 85 ? 'bg-green-900/50 text-green-400' :
//                                                 subject.percentage >= 75 ? 'bg-yellow-900/50 text-yellow-400' :
//                                                 'bg-red-900/50 text-red-400'
//                                             }`}>
//                                                 {subject.percentage}%
//                                             </span>
//                                         </div>

//                                         {/* Progress Bar */}
//                                         <div className="mt-3 bg-gray-800 rounded-full h-2 overflow-hidden">
//                                             <div 
//                                                 className={`h-full transition-all duration-300 ${
//                                                     subject.percentage >= 85 ? 'bg-green-500' :
//                                                     subject.percentage >= 75 ? 'bg-yellow-500' :
//                                                     'bg-red-500'
//                                                 }`}
//                                                 style={{ width: `${subject.percentage}%` }}
//                                             ></div>
//                                         </div>
//                                     </div>

//                                     <button 
//                                         onClick={() => handleViewHistory(subject.name)}
//                                         className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-medium rounded-md transition-all duration-200 transform hover:scale-105 text-sm"
//                                     >
//                                         View History
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StudentProfile;

import { useNavigate, useLocation } from "react-router-dom";
import defaultImg from "../images/default.jpg";
import React, { useState, useEffect } from "react";

const StudentProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const studentData = location.state?.studentData;
    
    const [subjectsData, setSubjectsData] = useState([
        { id: 1, name: "Operating System (OS)", totalLectures: 0, attendedLectures: 0, percentage: 0 },
        { id: 2, name: "Linear Structures", totalLectures: 0, attendedLectures: 0, percentage: 0 },
        { id: 3, name: "Computer Networks", totalLectures: 0, attendedLectures: 0, percentage: 0 },
        { id: 4, name: "Microprocessor", totalLectures: 0, attendedLectures: 0, percentage: 0 },
        { id: 5, name: "Economics", totalLectures: 0, attendedLectures: 0, percentage: 0 },
    ]);
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (studentData?.rollNo) {
            fetchAttendanceData();
        }
    }, [studentData?.rollNo]);

    const fetchAttendanceData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:5000/api/student-attendance/${studentData.rollNo}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch attendance data');
            }
            
            const data = await response.json();
            
            const updatedSubjects = subjectsData.map((subject, index) => {
                const fetchedSubject = data.find(item => item.subject === subject.name);
                return {
                    id: index + 1,
                    name: subject.name,
                    totalLectures: fetchedSubject?.totalLectures || 0,
                    attendedLectures: fetchedSubject?.attendedLectures || 0,
                    percentage: fetchedSubject?.percentage || 0
                };
            });
            
            setSubjectsData(updatedSubjects);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching attendance:', err);
            setError(err.message);
            setLoading(false);
        }
    };

    const handleViewHistory = (subject) => {
        navigate("/history", {
            state: {
                rollNo: studentData.rollNo,
                subject: subject
            }
        });
    };

    if (!studentData) {
        return (
            <div className="min-h-screen bg-black text-gray-200 flex items-center justify-center">
                <p className="text-lg">No student data found.</p>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen bg-black text-gray-100 py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header Card */}
                <div className="bg-black border border-gray-800 rounded-lg shadow-2xl overflow-hidden mb-6">
                    <div className="h-1 bg-gradient-to-r from-cyan-500 to-cyan-400"></div>
                    
                    <div className="px-6 py-8">
                        <h2 className="text-3xl font-bold text-white mb-1 tracking-tight">
                            Student Profile
                        </h2>
                        <p className="text-gray-400 text-sm">View your attendance details</p>
                    </div>
                </div>

                {/* Student Info Card */}
                <div className="bg-black border border-gray-800 rounded-lg shadow-2xl overflow-hidden mb-6">
                    <div className="px-6 py-8">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                            <span className="w-1 h-6 bg-cyan-500 rounded-full mr-3"></span>
                            Student Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Info Details */}
                            <div className="space-y-4">
                                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-all">
                                    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">Name</p>
                                    <p className="text-lg font-medium text-white">{studentData.name}</p>
                                </div>

                                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-all">
                                    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">Roll Number</p>
                                    <p className="text-lg font-medium text-white">{studentData.rollNo}</p>
                                </div>

                                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-all">
                                    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">Branch</p>
                                    <p className="text-lg font-medium text-white">{studentData.section}</p>
                                </div>

                                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-all">
                                    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">Year</p>
                                    <p className="text-lg font-medium text-white">{studentData.year}</p>
                                </div>
                            </div>

                            {/* Photo Section */}
                            <div className="flex flex-col items-center justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full blur opacity-20"></div>
                                    <img
                                        src={defaultImg}
                                        alt="Student"
                                        className="relative w-48 h-48 rounded-full object-cover border-2 border-cyan-500 shadow-lg"
                                    />
                                </div>
                                <div className="mt-6 bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2">
                                    <p className="text-xs text-gray-400">ID: <span className="font-bold text-white">{studentData.rollNo}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Attendance Section */}
                <div className="bg-black border border-gray-800 rounded-lg shadow-2xl overflow-hidden">
                    <div className="px-6 py-8">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-white flex items-center">
                                <span className="w-1 h-6 bg-cyan-500 rounded-full mr-3"></span>
                                Subject Attendance
                            </h3>
                            <button 
                                onClick={fetchAttendanceData}
                                disabled={loading}
                                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-medium rounded-md transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? '⏳ Loading...' : '🔄 Refresh'}
                            </button>
                        </div>

                        {error && (
                            <div className="mb-6 p-4 bg-red-900/30 border border-red-800 rounded-lg">
                                <p className="text-red-300 text-sm">⚠️ Error loading attendance data. Using default values.</p>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {subjectsData.map((subject) => (
                                <div 
                                    key={subject.id} 
                                    className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 hover:border-cyan-500/50 hover:shadow-lg transition-all duration-200 group"
                                >
                                    <h4 className="text-base font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                        {subject.name}
                                    </h4>

                                    <div className="space-y-3 mb-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-400">Total Lectures</span>
                                            <span className="text-sm font-bold text-white bg-gray-800/50 px-2 py-1 rounded">
                                                {subject.totalLectures}
                                            </span>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-400">Attended</span>
                                            <span className="text-sm font-bold text-white bg-gray-800/50 px-2 py-1 rounded">
                                                {subject.attendedLectures}
                                            </span>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-400">Percentage</span>
                                            <span className={`text-sm font-bold px-2 py-1 rounded ${
                                                subject.percentage >= 85 ? 'bg-green-900/50 text-green-400' :
                                                subject.percentage >= 75 ? 'bg-yellow-900/50 text-yellow-400' :
                                                'bg-red-900/50 text-red-400'
                                            }`}>
                                                {subject.percentage}%
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="mt-3 bg-gray-800 rounded-full h-2 overflow-hidden">
                                            <div 
                                                className={`h-full transition-all duration-300 ${
                                                    subject.percentage >= 85 ? 'bg-green-500' :
                                                    subject.percentage >= 75 ? 'bg-yellow-500' :
                                                    'bg-red-500'
                                                }`}
                                                style={{ width: `${subject.percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <button 
                                        onClick={() => handleViewHistory(subject.name)}
                                        className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-medium rounded-md transition-all duration-200 transform hover:scale-105 text-sm"
                                    >
                                        View History
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;