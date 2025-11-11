// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Calendar, ChevronLeft, Clock } from "lucide-react";
// //It is a library of beautiful, open-source SVG icon components for React.

// const History = () => {
//     const location = useLocation();
//     const { rollNo, subject } = location.state || {};
//     const [presentDates, setPresentDates] = useState([]);
//     const [loading, setLoading] = useState(true);
    
//     useEffect(() => {
//         if (rollNo && subject) {
//             setLoading(true);
//             fetch(`http://localhost:5000/api/student/${rollNo}/subject/${encodeURIComponent(subject)}/present-dates`)
//                 .then(res => res.json())
//                 .then(data => {
//                     setPresentDates(data.presentDates || []);
//                     setLoading(false);
//                 })
//                 .catch(err => {
//                     console.error("Error fetching data:", err);
//                     setLoading(false);
//                 });
//         }
//     }, [rollNo, subject]);
    
//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         return date.toLocaleDateString('en-US', { 
//             weekday: 'long', 
//             year: 'numeric', 
//             month: 'long', 
//             day: 'numeric'
//         });
//     };
    
//     const calculateAttendancePercentage = () => {
//         // This is a placeholder - you would need actual total classes data
//         const totalClasses = presentDates.length + 3; // Example: adding 3 absent classes
//         return Math.round((presentDates.length / totalClasses) * 100);
//     };
    
//     const goBack = () => {
//         window.history.back();
//     };
    
//     if (!rollNo || !subject) return (
//         <div className="flex items-center justify-center h-screen bg-black text-white">
//             <div className="text-center p-8 bg-gray-900 rounded-lg shadow-lg max-w-md">
//                 <h2 className="text-2xl font-bold mb-4">No Data Available</h2>
//                 <p className="mb-6">No history data was found. Please return to the previous page.</p>
//                 <button 
//                     onClick={goBack}
//                     className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center mx-auto"
//                 >
//                     <ChevronLeft size={16} className="mr-2" />
//                     Go Back
//                 </button>
//             </div>
//         </div>
//     );
    
//     return (
//         <div className="min-h-screen bg-black text-white p-6">
//             <div className="max-w-4xl mx-auto">
//                 {/* Header Section */}
//                 <div className="mb-8">
//                     <button 
//                         onClick={goBack}
//                         className="mb-6 flex items-center text-gray-400 hover:text-white transition-colors"
//                     >
//                         <ChevronLeft size={20} className="mr-1" />
//                         <span>Back</span>
//                     </button>
                    
//                     <div className="flex flex-col md:flex-row md:items-center justify-between">
//                         <div>
//                             <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">{subject}</h1>
//                             <p className="text-gray-400 mt-1">Roll No: {rollNo}</p>
//                         </div>
                        
//                         <div className="mt-4 md:mt-0 bg-gray-900 p-4 rounded-lg shadow-lg">
//                             <div className="flex items-center">
//                                 <div className="mr-4">
//                                     <div className="text-sm text-gray-400">Attendance</div>
//                                     <div className="text-2xl font-bold">{calculateAttendancePercentage()}%</div>
//                                 </div>
//                                 <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
//                                     <Calendar size={24} />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
                
//                 {/* Content Section */}
//                 <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden">
//                     <div className="p-6 border-b border-gray-800">
//                         <h2 className="text-xl font-semibold">Attendance History</h2>
//                     </div>
                    
//                     {loading ? (
//                         <div className="flex justify-center items-center p-12">
//                             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
//                         </div>
//                     ) : presentDates.length === 0 ? (
//                         <div className="p-8 text-center">
//                             <div className="mx-auto w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
//                                 <Calendar size={28} className="text-gray-400" />
//                             </div>
//                             <p className="text-gray-400">No attendance records found for this subject.</p>
//                         </div>
//                     ) : (
//                         <div className="divide-y divide-gray-800">
//                             {presentDates.map((date, index) => (
//                                 <div key={date} className="p-4 hover:bg-gray-800 transition-colors">
//                                     <div className="flex items-center">
//                                         <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
//                                             <Clock size={20} className="text-indigo-400" />
//                                         </div>
//                                         <div>
//                                             <p className="font-medium">{formatDate(date)}</p>
//                                             <p className="text-sm text-gray-400">Present</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
                    
//                     {presentDates.length > 0 && (
//                         <div className="p-6 bg-gray-800 text-gray-300 text-sm">
//                             Total classes attended: {presentDates.length}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default History;

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Calendar, ChevronLeft, Clock } from "lucide-react";

const History = () => {
    const location = useLocation();
    const { rollNo, subject } = location.state || {};
    const [presentDates, setPresentDates] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (rollNo && subject) {
            setLoading(true);
            fetch(`http://localhost:5000/api/student/${rollNo}/subject/${encodeURIComponent(subject)}/present-dates`)
                .then(res => res.json())
                .then(data => {
                    setPresentDates(data.presentDates || []);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Error fetching data:", err);
                    setLoading(false);
                });
        }
    }, [rollNo, subject]);
    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        });
    };
    
    const calculateAttendancePercentage = () => {
        const totalClasses = presentDates.length + 3;
        return Math.round((presentDates.length / totalClasses) * 100);
    };
    
    const goBack = () => {
        window.history.back();
    };
    
    if (!rollNo || !subject) return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white pt-32 px-4 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="text-center p-8 bg-black border border-gray-800 rounded-lg shadow-2xl max-w-md relative z-10">
                <div className="mb-4">
                    <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-white">No Data Available</h2>
                <p className="mb-6 text-gray-400">No history data was found. Please return to the previous page.</p>
                <button 
                    onClick={goBack}
                    className="px-6 py-2 bg-white hover:bg-gray-100 text-black rounded-md font-medium transition-all duration-200 flex items-center justify-center mx-auto transform hover:scale-105"
                >
                    <ChevronLeft size={16} className="mr-2" />
                    Go Back
                </button>
            </div>
        </div>
    );
    
    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-6 pt-32 pb-8 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="mb-8">
                    <button 
                        onClick={goBack}
                        className="mb-6 flex items-center text-gray-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                        <ChevronLeft size={20} className="mr-1" />
                        <span>Back</span>
                    </button>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{subject}</h1>
                            <p className="text-gray-400 mt-2">Roll No: <span className="text-cyan-300 font-medium">{rollNo}</span></p>
                        </div>
                        
                        <div className="bg-black border border-gray-800 p-6 rounded-lg shadow-lg hover:border-cyan-500/50 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">Attendance</div>
                                    <div className="text-3xl font-bold text-white">{calculateAttendancePercentage()}%</div>
                                </div>
                                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                                    <Calendar size={24} className="text-black" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Content Section */}
                <div className="bg-black border border-gray-800 rounded-lg shadow-2xl overflow-hidden">
                    <div className="p-6 border-b border-gray-800 bg-black/80 backdrop-blur">
                        <h2 className="text-xl font-semibold text-white">Attendance History</h2>
                    </div>
                    
                    {loading ? (
                        <div className="flex justify-center items-center p-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
                        </div>
                    ) : presentDates.length === 0 ? (
                        <div className="p-8 text-center">
                            <div className="mx-auto w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                                <Calendar size={28} className="text-gray-500" />
                            </div>
                            <p className="text-gray-400">No attendance records found for this subject.</p>
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-800">
                            {presentDates.map((date, index) => (
                                <div key={date} className="p-4 hover:bg-gray-900/50 transition-colors duration-200 group">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-cyan-500/10 flex items-center justify-center mr-4 group-hover:bg-cyan-500/20 transition-colors duration-200">
                                            <Clock size={20} className="text-cyan-400" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-white">{formatDate(date)}</p>
                                            <p className="text-sm text-cyan-300">Present</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {presentDates.length > 0 && (
                        <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-cyan-400/5 border-t border-cyan-500/20 text-gray-300 text-sm">
                            <span className="font-semibold text-cyan-300">Total classes attended:</span> {presentDates.length}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default History;