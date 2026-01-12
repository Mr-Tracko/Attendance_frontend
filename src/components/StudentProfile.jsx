import { useNavigate, useLocation } from "react-router-dom";
import defaultImg from "../images/default.jpg";
import React, { useState, useEffect } from "react";

const StudentProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const studentData = location.state?.studentData;
    
    const DEFAULT_SUBJECTS = [
        { id: 1, name: "Operating System (OS)", totalLectures: 24, attendedLectures: 18, percentage: 75},
        { id: 2, name: "Linear Structures", totalLectures: 18, attendedLectures: 16, percentage: 88.88 },
        { id: 3, name: "Computer Networks", totalLectures: 20, attendedLectures: 16, percentage: 80},
        { id: 4, name: "Microprocessor", totalLectures: 22, attendedLectures: 16, percentage: 72.72},
        { id: 5, name: "Economics", totalLectures: 17, attendedLectures: 15, percentage: 70.5 },
    ];
    
    const [subjectsData, setSubjectsData] = useState(DEFAULT_SUBJECTS);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (studentData?.rollNo) {
            fetchAttendanceData();
        } else {
            setLoading(false);
        }
    }, [studentData?.rollNo]);

    const fetchAttendanceData = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`https://attendance-backend-yqrj.onrender.com/api/student-attendance/${studentData.rollNo}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch attendance data');
            }
            
            const data = await response.json();
            
            const updatedSubjects = DEFAULT_SUBJECTS.map((subject, index) => {
                const fetchedSubject = data.find(item => item.subject === subject.name);
                return {
                    id: index + 1,
                    name: subject.name,
                    totalLectures: fetchedSubject?.totalLectures ?? subject.totalLectures,
                    attendedLectures: fetchedSubject?.attendedLectures ?? subject.attendedLectures,
                    percentage: fetchedSubject?.percentage ?? subject.percentage
                };
            });
            
            setSubjectsData(updatedSubjects);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching attendance:', err);
            setError(err.message);
            // Keep the default values when there's an error
            setSubjectsData(DEFAULT_SUBJECTS);
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
        return <div style={styles.noData}>No student data found.</div>;
    }
    
    return (
        <div style={styles.page}>
            {/* Decorative background elements */}
            <div style={styles.backgroundDecorations}>
                <div style={styles.decorCircle1}></div>
                <div style={styles.decorCircle2}></div>
            </div>

            <div style={styles.mainContainer}>
                {/* Header Card */}
                <div style={styles.headerCard}>
                    <div style={styles.accentBorder}></div>
                    <div style={styles.headerContent}>
                        <h2 style={styles.headerTitle}>Student Profile</h2>
                        <p style={styles.headerSubtitle}>View your attendance details</p>
                    </div>
                </div>

                {/* Student Info Card */}
                <div style={styles.infoCard}>
                    <div style={styles.cardContent}>
                        <h3 style={styles.sectionTitle}>
                            <span style={styles.titleAccent}></span>
                            Student Information
                        </h3>

                        <div style={styles.infoGrid}>
                            {/* Info Details */}
                            <div style={styles.infoLeft}>
                                <div style={styles.infoBox}>
                                    <p style={styles.infoLabel}>Name</p>
                                    <p style={styles.infoValue}>{studentData.name}</p>
                                </div>

                                <div style={styles.infoBox}>
                                    <p style={styles.infoLabel}>Roll Number</p>
                                    <p style={styles.infoValue}>{studentData.rollNo}</p>
                                </div>

                                <div style={styles.infoBox}>
                                    <p style={styles.infoLabel}>Branch</p>
                                    <p style={styles.infoValue}>{studentData.section}</p>
                                </div>

                                <div style={styles.infoBox}>
                                    <p style={styles.infoLabel}>Year</p>
                                    <p style={styles.infoValue}>{studentData.year}</p>
                                </div>
                            </div>

                            {/* Photo Section */}
                            <div style={styles.photoContainer}>
                                <div style={styles.photoWrapper}>
                                    <img
                                        src={defaultImg}
                                        alt="Student"
                                        style={styles.photo}
                                    />
                                </div>
                                <div style={styles.idBadge}>
                                    <p style={styles.idBadgeText}>ID: <span style={styles.idBadgeValue}>{studentData.rollNo}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Attendance Section */}
                <div style={styles.attendanceCard}>
                    <div style={styles.cardContent}>
                        <div style={styles.attendanceHeader}>
                            <h3 style={styles.sectionTitle}>
                                <span style={styles.titleAccent}></span>
                                Subject Attendance
                            </h3>
                            <button 
                                onClick={fetchAttendanceData}
                                disabled={loading}
                                style={{
                                    ...styles.refreshButton,
                                    opacity: loading ? 0.5 : 1,
                                    cursor: loading ? 'not-allowed' : 'pointer'
                                }}
                                onMouseEnter={(e) => !loading && (e.target.style.backgroundColor = '#06b6d4')}
                                onMouseLeave={(e) => (e.target.style.backgroundColor = '#00d4ff')}
                            >
                                {loading ? '⏳ Loading...' : '🔄 Refresh'}
                            </button>
                        </div>

                        {error && (
                            <div style={styles.errorBox}>
                                <p style={styles.errorText}>⚠️ Error loading attendance data. Using default values.</p>
                            </div>
                        )}

                        <div style={styles.subjectsGrid}>
                            {subjectsData.map((subject) => (
                                <div 
                                    key={subject.id} 
                                    style={styles.subjectCard}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = '#22d3ee';
                                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(34, 211, 238, 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = '#333333';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <h4 style={styles.subjectName}>{subject.name}</h4>

                                    <div style={styles.attendanceDetails}>
                                        <div style={styles.attendanceRow}>
                                            <span style={styles.attendanceLabel}>Total Lectures</span>
                                            <span style={styles.attendanceBadge}>{subject.totalLectures}</span>
                                        </div>

                                        <div style={styles.attendanceRow}>
                                            <span style={styles.attendanceLabel}>Attended</span>
                                            <span style={styles.attendanceBadge}>{subject.attendedLectures}</span>
                                        </div>

                                        <div style={styles.attendanceRow}>
                                            <span style={styles.attendanceLabel}>Percentage</span>
                                            <span style={{
                                                ...styles.attendanceBadge,
                                                backgroundColor: subject.percentage >= 85 ? 'rgba(34, 197, 94, 0.2)' : 
                                                                subject.percentage >= 75 ? 'rgba(234, 179, 8, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                                                color: subject.percentage >= 85 ? '#22c55e' : 
                                                       subject.percentage >= 75 ? '#eab308' : '#ef4444'
                                            }}>
                                                {subject.percentage}%
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div style={styles.progressBarContainer}>
                                            <div 
                                                style={{
                                                    ...styles.progressBar,
                                                    width: `${subject.percentage}%`,
                                                    backgroundColor: subject.percentage >= 85 ? '#22c55e' : 
                                                                   subject.percentage >= 75 ? '#eab308' : '#ef4444'
                                                }}
                                            ></div>
                                        </div>
                                    </div>

                                    <button 
                                        onClick={() => handleViewHistory(subject.name)}
                                        style={styles.historyButton}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#06b6d4'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = '#00d4ff'}
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

const styles = {
    page: {
        backgroundColor: '#000000',
        minHeight: '100vh',
        padding: '24px',
        fontFamily: "'Roboto', 'Segoe UI', sans-serif",
        color: '#E5E7EB',
        position: 'relative',
        overflow: 'hidden',
    },
    backgroundDecorations: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
    },
    decorCircle1: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '384px',
        height: '384px',
        backgroundColor: 'rgba(34, 211, 238, 0.05)',
        borderRadius: '50%',
        filter: 'blur(120px)',
    },
    decorCircle2: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '384px',
        height: '384px',
        backgroundColor: 'rgba(34, 211, 238, 0.05)',
        borderRadius: '50%',
        filter: 'blur(120px)',
    },
    mainContainer: {
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
    },
    headerCard: {
        backgroundColor: '#000000',
        border: '1px solid #1F2937',
        borderRadius: '8px',
        boxShadow: '0 20px 25px rgba(0, 0, 0, 0.6)',
        overflow: 'hidden',
        marginBottom: '24px',
    },
    accentBorder: {
        height: '4px',
        background: 'linear-gradient(to right, #00d4ff, #00bfff)',
    },
    headerContent: {
        padding: '32px 24px',
    },
    headerTitle: {
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#FFFFFF',
        margin: '0 0 4px 0',
        letterSpacing: '-0.5px',
    },
    headerSubtitle: {
        fontSize: '14px',
        color: '#9CA3AF',
        margin: 0,
    },
    infoCard: {
        backgroundColor: '#000000',
        border: '1px solid #1F2937',
        borderRadius: '8px',
        boxShadow: '0 20px 25px rgba(0, 0, 0, 0.6)',
        overflow: 'hidden',
        marginBottom: '24px',
    },
    cardContent: {
        padding: '32px 24px',
    },
    sectionTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#FFFFFF',
        margin: '0 0 24px 0',
        display: 'flex',
        alignItems: 'center',
    },
    titleAccent: {
        width: '4px',
        height: '24px',
        backgroundColor: '#00d4ff',
        borderRadius: '2px',
        marginRight: '12px',
        display: 'inline-block',
    },
    infoGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '32px',
        alignItems: 'center',
    },
    infoLeft: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
    },
    infoBox: {
        backgroundColor: 'rgba(31, 41, 55, 0.5)',
        border: '1px solid #333333',
        borderRadius: '8px',
        padding: '16px',
        transition: 'all 0.3s ease',
    },
    infoLabel: {
        fontSize: '11px',
        fontWeight: '600',
        color: '#00d4ff',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        margin: '0 0 4px 0',
    },
    infoValue: {
        fontSize: '18px',
        fontWeight: '500',
        color: '#FFFFFF',
        margin: 0,
    },
    photoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoWrapper: {
        position: 'relative',
        marginBottom: '24px',
    },
    photo: {
        width: '192px',
        height: '192px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '2px solid #00d4ff',
        boxShadow: '0 8px 24px rgba(0, 212, 255, 0.2)',
    },
    idBadge: {
        backgroundColor: 'rgba(31, 41, 55, 0.5)',
        border: '1px solid #333333',
        borderRadius: '8px',
        padding: '12px 16px',
    },
    idBadgeText: {
        fontSize: '12px',
        color: '#9CA3AF',
        margin: 0,
    },
    idBadgeValue: {
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    attendanceCard: {
        backgroundColor: '#000000',
        border: '1px solid #1F2937',
        borderRadius: '8px',
        boxShadow: '0 20px 25px rgba(0, 0, 0, 0.6)',
        overflow: 'hidden',
    },
    attendanceHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
    },
    refreshButton: {
        padding: '10px 16px',
        backgroundColor: '#00d4ff',
        color: '#000000',
        fontWeight: '600',
        border: 'none',
        borderRadius: '6px',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    errorBox: {
        marginBottom: '24px',
        padding: '16px',
        backgroundColor: 'rgba(220, 38, 38, 0.1)',
        border: '1px solid #7F1D1D',
        borderRadius: '8px',
    },
    errorText: {
        color: '#FCA5A5',
        fontSize: '14px',
        margin: 0,
    },
    subjectsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '16px',
    },
    subjectCard: {
        backgroundColor: 'rgba(31, 41, 55, 0.5)',
        border: '1px solid #333333',
        borderRadius: '8px',
        padding: '20px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    },
    subjectName: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#FFFFFF',
        margin: '0 0 16px 0',
        borderBottom: '1px solid rgba(34, 211, 238, 0.2)',
        paddingBottom: '8px',
    },
    attendanceDetails: {
        marginBottom: '16px',
    },
    attendanceRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px',
    },
    attendanceLabel: {
        fontSize: '13px',
        color: '#9CA3AF',
    },
    attendanceBadge: {
        fontSize: '13px',
        fontWeight: '600',
        color: '#FFFFFF',
        backgroundColor: 'rgba(55, 65, 81, 0.5)',
        padding: '4px 12px',
        borderRadius: '4px',
    },
    progressBarContainer: {
        marginTop: '12px',
        backgroundColor: '#1F2937',
        borderRadius: '999px',
        height: '8px',
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        transition: 'width 0.3s ease',
        borderRadius: '999px',
    },
    historyButton: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#00d4ff',
        color: '#000000',
        fontWeight: '600',
        border: 'none',
        borderRadius: '6px',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    noData: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#9CA3AF',
        backgroundColor: '#000000',
    }
};

export default StudentProfile;