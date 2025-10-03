// // StudentProfile.js
// // This file contains the UI for displaying the individual student details
// import {useNavigate} from "react-router-dom";

// import { useLocation } from "react-router-dom";
// import defaultImg from "../images/default.jpg";
// import React from "react";
// //jha se data bhjte h vha useNavigate use krte h
// //jha data laana hota h vha useLocation use krte h
// //useLocation is a hook that returns the current location object, which contains information about the URL and any state that was passed to it.
// const StudentProfile = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const studentData = location.state?.studentData;

//     // Sample subject data - this would come from your API in a real application
//     const subjectsData = [
//         { id: 1, name: "Operating System (OS)", totalLectures: 0, attendedLectures: 0, percentage: 0 },
//         { id: 2, name: "Linear Structures", totalLectures: 0, attendedLectures: 0, percentage: 0 },
//         { id: 3, name: "Computer Networks", totalLectures: 0, attendedLectures: 0, percentage: 0 },
//         { id: 4, name: "Microprocessor", totalLectures: 0, attendedLectures: 0, percentage: 0 },
//         { id: 5, name: "Economics", totalLectures: 0, attendedLectures: 0, percentage: 0 },
//     ];

//     const handleViewHistory = async(subject) => {
//         navigate("/history", {
//         state: {
//             rollNo: studentData.rollNo,
//             subject: subject
//         }
//     });
//     };

//     if (!studentData) return <div style={styles.noData}>No student data found.</div>;
    
//     return (
//         <div style={styles.page}>
//             <div style={styles.container}>
//                 {/* Left section - Student information */}
//                 <div style={styles.infoSection}>
//                     <h2 style={styles.heading}>Student Details</h2>
                    
//                     <div style={styles.studentContainer}>
//                         <div style={styles.basicInfo}>
//                             <div style={styles.infoItem}>
//                                 <span style={styles.label}>Name:</span>
//                                 <span style={styles.value}>{studentData.name}</span>
//                             </div>
//                             <div style={styles.infoItem}>
//                                 <span style={styles.label}>Roll No:</span>
//                                 <span style={styles.value}>{studentData.rollNo}</span>
//                             </div>
//                             <div style={styles.infoItem}>
//                                 <span style={styles.label}>Branch:</span>
//                                 <span style={styles.value}>{studentData.section}</span>
//                             </div>
//                             <div style={styles.infoItem}>
//                                 <span style={styles.label}>Year:</span>
//                                 <span style={styles.value}>{studentData.year}</span>
//                             </div>
//                             <div style={styles.idBadge}>
//                                 <span style={styles.idLabel}>ID: </span>
//                                 <span style={styles.idValue}>{studentData.rollNo}</span>
//                             </div>
//                         </div>
                        
//                         <div style={styles.photoSection}>
//                             <img
//                                 src={defaultImg}
//                                 alt="Student"
//                                 style={styles.photo}
//                             />
//                         </div>
//                     </div>

//                     <h3 style={styles.subjectHeading}>Subject Attendance</h3>
                    
//                     <div style={styles.subjectsContainer}>
//                         {subjectsData.map((subject) => (
//                             <div key={subject.id} style={styles.subjectCard}>
//                                 <div style={styles.subjectName}>{subject.name}</div>
//                                 <div style={styles.attendanceDetails}>
//                                     <div style={styles.attendanceRow}>
//                                         <span style={styles.attendanceLabel}>Total Lectures:</span>
//                                         <span style={styles.attendanceValue}>{subject.totalLectures}</span>
//                                     </div>
//                                     <div style={styles.attendanceRow}>
//                                         <span style={styles.attendanceLabel}>Attended:</span>
//                                         <span style={styles.attendanceValue}>{subject.attendedLectures}</span>
//                                     </div>
//                                     <div style={styles.attendanceRow}>
//                                         <span style={styles.attendanceLabel}>Percentage:</span>
//                                         <span style={{
//                                             ...styles.attendanceValue, 
//                                             color: subject.percentage >= 85 ? '#4CAF50' : subject.percentage >= 75 ? '#FFC107' : '#F44336'
//                                         }}>
//                                             {subject.percentage}%
//                                         </span>
//                                     </div>
//                                 </div>
//                                 <button 
//                                     style={styles.historyButton}
//                                     onClick={() => handleViewHistory(subject.name)}
//                                 >
//                                     View History
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // Inline styles object
// const styles = {
//     page: {
//         backgroundColor: '#121212',
//         minHeight: '100vh',
//         padding: '20px',
//         fontFamily: "'Roboto', 'Segoe UI', sans-serif",
//         color: '#FFFFFF',
//     },
//     container: {
//         maxWidth: '1000px',
//         margin: '0 auto',
//     },
//     infoSection: {
//         backgroundColor: '#1E1E1E',
//         borderRadius: '12px',
//         padding: '20px',
//         boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
//     },
//     heading: {
//         color: '#6C63FF',
//         fontSize: '22px',
//         marginTop: '0',
//         marginBottom: '15px',
//         borderBottom: '2px solid #6C63FF',
//         paddingBottom: '8px',
//     },
//     studentContainer: {
//         display: 'flex',
//         marginBottom: '20px',
//         borderRadius: '8px',
//         backgroundColor: 'rgba(255, 255, 255, 0.05)',
//         padding: '10px',
//     },
//     basicInfo: {
//         flex: '3',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//     },
//     infoItem: {
//         marginBottom: '8px',
//         display: 'flex',
//     },
//     label: {
//         color: '#6C63FF',
//         fontSize: '12px',
//         textTransform: 'uppercase',
//         letterSpacing: '0.5px',
//         width: '60px',
//         display: 'inline-block',
//     },
//     value: {
//         fontSize: '14px',
//         fontWeight: '500',
//         marginLeft: '10px',
//     },
//     photoSection: {
//         flex: '1',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     photo: {
//         width: '140px',
//         height: '140px',
//         borderRadius: '50%',
//         objectFit: 'cover',
//         border: '2px solid #6C63FF',
//     },
//     idBadge: {
//         backgroundColor: 'rgba(108, 99, 255, 0.1)',
//         padding: '5px 10px',
//         borderRadius: '20px',
//         border: '1px solid rgba(108, 99, 255, 0.3)',
//         fontSize: '12px',
//         alignSelf: 'flex-start',
//         marginTop: '5px',
//         display: 'inline-block',
//     },
//     idLabel: {
//         color: '#B0B0B0',
//     },
//     idValue: {
//         color: '#FFFFFF',
//         fontWeight: 'bold',
//     },
//     subjectHeading: {
//         color: '#6C63FF',
//         fontSize: '18px',
//         marginBottom: '15px',
//     },
//     subjectsContainer: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
//         gap: '15px',
//     },
//     subjectCard: {
//         backgroundColor: 'rgba(255, 255, 255, 0.03)',
//         borderRadius: '8px',
//         padding: '15px',
//         transition: 'all 0.3s ease',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//     },
//     subjectName: {
//         fontSize: '16px',
//         fontWeight: 'bold',
//         color: '#FFFFFF',
//         marginBottom: '10px',
//         borderBottom: '1px solid rgba(108, 99, 255, 0.3)',
//         paddingBottom: '5px',
//     },
//     attendanceDetails: {
//         marginBottom: '12px',
//     },
//     attendanceRow: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         marginBottom: '5px',
//     },
//     attendanceLabel: {
//         fontSize: '12px',
//         color: '#B0B0B0',
//     },
//     attendanceValue: {
//         fontSize: '12px',
//         fontWeight: '500',
//     },
//     historyButton: {
//         backgroundColor: '#6C63FF',
//         color: '#FFFFFF',
//         border: 'none',
//         borderRadius: '4px',
//         padding: '8px 12px',
//         fontSize: '12px',
//         cursor: 'pointer',
//         width: '100%',
//         transition: 'background-color 0.3s ease',
//     },
//     noData: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         fontSize: '18px',
//         color: '#B0B0B0',
//         backgroundColor: '#121212',
//     }
// };

// export default StudentProfile;

import { useNavigate, useLocation } from "react-router-dom";
import defaultImg from "../images/default.jpg";
import React, { useState, useEffect } from "react";

const StudentProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const studentData = location.state?.studentData;
    
    // State for subjects data
    const [subjectsData, setSubjectsData] = useState([
        { id: 1, name: "Operating System (OS)", totalLectures: 0, attendedLectures: 0, percentage: 0 },
        { id: 2, name: "Linear Structures", totalLectures: 0, attendedLectures: 0, percentage: 0 },
        { id: 3, name: "Computer Networks", totalLectures: 0, attendedLectures: 0, percentage: 0 },
        { id: 4, name: "Microprocessor", totalLectures: 0, attendedLectures: 0, percentage: 0 },
        { id: 5, name: "Economics", totalLectures: 0, attendedLectures: 0, percentage: 0 },
    ]);
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // ⭐ Fetch attendance data when component mounts
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
            
            // Merge fetched data with default subjects
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

    if (!studentData) return <div style={styles.noData}>No student data found.</div>;
    
    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <div style={styles.infoSection}>
                    <h2 style={styles.heading}>Student Details</h2>
                    
                    <div style={styles.studentContainer}>
                        <div style={styles.basicInfo}>
                            <div style={styles.infoItem}>
                                <span style={styles.label}>Name:</span>
                                <span style={styles.value}>{studentData.name}</span>
                            </div>
                            <div style={styles.infoItem}>
                                <span style={styles.label}>Roll No:</span>
                                <span style={styles.value}>{studentData.rollNo}</span>
                            </div>
                            <div style={styles.infoItem}>
                                <span style={styles.label}>Branch:</span>
                                <span style={styles.value}>{studentData.section}</span>
                            </div>
                            <div style={styles.infoItem}>
                                <span style={styles.label}>Year:</span>
                                <span style={styles.value}>{studentData.year}</span>
                            </div>
                            <div style={styles.idBadge}>
                                <span style={styles.idLabel}>ID: </span>
                                <span style={styles.idValue}>{studentData.rollNo}</span>
                            </div>
                        </div>
                        
                        <div style={styles.photoSection}>
                            <img
                                src={defaultImg}
                                alt="Student"
                                style={styles.photo}
                            />
                        </div>
                    </div>

                    {/* ⭐ ADD REFRESH BUTTON */}
                    <div style={styles.headerRow}>
                        <h3 style={styles.subjectHeading}>Subject Attendance</h3>
                        <button 
                            style={styles.refreshButton}
                            onClick={fetchAttendanceData}
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : '🔄 Refresh'}
                        </button>
                    </div>
                    
                    {/* ⭐ ERROR MESSAGE */}
                    {error && (
                        <div style={styles.errorMessage}>
                            Error loading attendance data. Using default values.
                        </div>
                    )}
                    
                    <div style={styles.subjectsContainer}>
                        {subjectsData.map((subject) => (
                            <div key={subject.id} style={styles.subjectCard}>
                                <div style={styles.subjectName}>{subject.name}</div>
                                <div style={styles.attendanceDetails}>
                                    <div style={styles.attendanceRow}>
                                        <span style={styles.attendanceLabel}>Total Lectures:</span>
                                        <span style={styles.attendanceValue}>{subject.totalLectures}</span>
                                    </div>
                                    <div style={styles.attendanceRow}>
                                        <span style={styles.attendanceLabel}>Attended:</span>
                                        <span style={styles.attendanceValue}>{subject.attendedLectures}</span>
                                    </div>
                                    <div style={styles.attendanceRow}>
                                        <span style={styles.attendanceLabel}>Percentage:</span>
                                        <span style={{
                                            ...styles.attendanceValue, 
                                            color: subject.percentage >= 85 ? '#4CAF50' : subject.percentage >= 75 ? '#FFC107' : '#F44336'
                                        }}>
                                            {subject.percentage}%
                                        </span>
                                    </div>
                                </div>
                                <button 
                                    style={styles.historyButton}
                                    onClick={() => handleViewHistory(subject.name)}
                                >
                                    View History
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// ⭐ ADD THESE NEW STYLES
const styles = {
    // ... (keep all your existing styles)
    headerRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px',
    },
    refreshButton: {
        backgroundColor: '#6C63FF',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '6px',
        padding: '8px 16px',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    errorMessage: {
        backgroundColor: 'rgba(244, 67, 54, 0.1)',
        color: '#F44336',
        padding: '10px',
        borderRadius: '6px',
        marginBottom: '15px',
        fontSize: '14px',
        border: '1px solid rgba(244, 67, 54, 0.3)',
    },
    page: {
        backgroundColor: '#121212',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: "'Roboto', 'Segoe UI', sans-serif",
        color: '#FFFFFF',
    },
    container: {
        maxWidth: '1000px',
        margin: '0 auto',
    },
    infoSection: {
        backgroundColor: '#1E1E1E',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
    },
    heading: {
        color: '#6C63FF',
        fontSize: '22px',
        marginTop: '0',
        marginBottom: '15px',
        borderBottom: '2px solid #6C63FF',
        paddingBottom: '8px',
    },
    studentContainer: {
        display: 'flex',
        marginBottom: '20px',
        borderRadius: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        padding: '10px',
    },
    basicInfo: {
        flex: '3',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    infoItem: {
        marginBottom: '8px',
        display: 'flex',
    },
    label: {
        color: '#6C63FF',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        width: '60px',
        display: 'inline-block',
    },
    value: {
        fontSize: '14px',
        fontWeight: '500',
        marginLeft: '10px',
    },
    photoSection: {
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    photo: {
        width: '140px',
        height: '140px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '2px solid #6C63FF',
    },
    idBadge: {
        backgroundColor: 'rgba(108, 99, 255, 0.1)',
        padding: '5px 10px',
        borderRadius: '20px',
        border: '1px solid rgba(108, 99, 255, 0.3)',
        fontSize: '12px',
        alignSelf: 'flex-start',
        marginTop: '5px',
        display: 'inline-block',
    },
    idLabel: {
        color: '#B0B0B0',
    },
    idValue: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    headerRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px',
    },
    subjectHeading: {
        color: '#6C63FF',
        fontSize: '18px',
        margin: '0',
    },
    refreshButton: {
        backgroundColor: '#6C63FF',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '6px',
        padding: '8px 16px',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    errorMessage: {
        backgroundColor: 'rgba(244, 67, 54, 0.1)',
        color: '#F44336',
        padding: '10px',
        borderRadius: '6px',
        marginBottom: '15px',
        fontSize: '14px',
        border: '1px solid rgba(244, 67, 54, 0.3)',
    },
    subjectsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '15px',
    },
    subjectCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderRadius: '8px',
        padding: '15px',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    subjectName: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: '10px',
        borderBottom: '1px solid rgba(108, 99, 255, 0.3)',
        paddingBottom: '5px',
    },
    attendanceDetails: {
        marginBottom: '12px',
    },
    attendanceRow: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5px',
    },
    attendanceLabel: {
        fontSize: '12px',
        color: '#B0B0B0',
    },
    attendanceValue: {
        fontSize: '12px',
        fontWeight: '500',
    },
    historyButton: {
        backgroundColor: '#6C63FF',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '4px',
        padding: '8px 12px',
        fontSize: '12px',
        cursor: 'pointer',
        width: '100%',
        transition: 'background-color 0.3s ease',
    },
    noData: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#B0B0B0',
        backgroundColor: '#121212',
    }
};

export default StudentProfile;