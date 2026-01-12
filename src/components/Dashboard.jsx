import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const attendanceStats = {
    present: 85,
    absent: 10,
    late: 5
  };

  const recentActivity = [
    { id: 1, name: 'John Doe', status: 'Present', time: '09:00 AM', date: 'Today' },
    { id: 2, name: 'Jane Smith', status: 'Late', time: '09:15 AM', date: 'Today' },
    { id: 3, name: 'Mike Johnson', status: 'Absent', time: '-', date: 'Today' },
    { id: 4, name: 'Sarah Williams', status: 'Present', time: '08:55 AM', date: 'Today' }
  ];

  return (
    <>
      <div style={styles.page}>
        {/* Decorative background elements */}
        <div style={styles.backgroundDecorations}>
          <div style={styles.decorCircle1}></div>
          <div style={styles.decorCircle2}></div>
        </div>

        <div style={styles.container}>
          {/* Hero Section */}
          <div style={styles.heroSection}>
            <div style={styles.heroContent}>
              <h1 style={styles.heroTitle}>Attendance Tracker</h1>
              <p style={styles.heroSubtitle}>Simplify your attendance management</p>
              <p style={styles.heroDescription}>
                Track attendance, generate reports, and manage your team's presence with ease.
              </p>
              <div style={styles.heroButtons}>
                <button onClick={() => navigate('../login')} style={styles.primaryButton}>
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div style={styles.statsSection}>
            <h2 style={styles.sectionTitle}>Today's Overview</h2>
            <div style={styles.statsGrid}>
              {/* Present Stat */}
              <div style={styles.statCard}>
                <div style={styles.statHeader}>
                  <div style={{ ...styles.statIcon, backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                    <svg style={{ width: '24px', height: '24px', color: '#22c55e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p style={styles.statLabel}>Present</p>
                    <p style={styles.statValue}>{attendanceStats.present}%</p>
                  </div>
                </div>
                <div style={styles.progressBarContainer}>
                  <div style={{ ...styles.progressBar, width: '85%', backgroundColor: '#22c55e' }}></div>
                </div>
              </div>

              {/* Absent Stat */}
              <div style={styles.statCard}>
                <div style={styles.statHeader}>
                  <div style={{ ...styles.statIcon, backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
                    <svg style={{ width: '24px', height: '24px', color: '#ef4444' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <p style={styles.statLabel}>Absent</p>
                    <p style={styles.statValue}>{attendanceStats.absent}%</p>
                  </div>
                </div>
                <div style={styles.progressBarContainer}>
                  <div style={{ ...styles.progressBar, width: '10%', backgroundColor: '#ef4444' }}></div>
                </div>
              </div>

              {/* Late Stat */}
              <div style={styles.statCard}>
                <div style={styles.statHeader}>
                  <div style={{ ...styles.statIcon, backgroundColor: 'rgba(234, 179, 8, 0.1)' }}>
                    <svg style={{ width: '24px', height: '24px', color: '#eab308' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p style={styles.statLabel}>Late</p>
                    <p style={styles.statValue}>{attendanceStats.late}%</p>
                  </div>
                </div>
                <div style={styles.progressBarContainer}>
                  <div style={{ ...styles.progressBar, width: '5%', backgroundColor: '#eab308' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div style={styles.activitySection}>
            <div style={styles.activityHeader}>
              <div>
                <h3 style={styles.activityTitle}>Recent Activity</h3>
                <p style={styles.activitySubtitle}>Latest attendance records</p>
              </div>
            </div>

            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead style={styles.tableHead}>
                  <tr>
                    <th style={styles.tableHeader}>Name</th>
                    <th style={styles.tableHeader}>Status</th>
                    <th style={styles.tableHeader}>Time</th>
                    <th style={styles.tableHeader}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivity.map((person) => (
                    <tr key={person.id} style={styles.tableRow}>
                      <td style={styles.tableCell}>
                        <span style={styles.tableCellText}>{person.name}</span>
                      </td>
                      <td style={styles.tableCell}>
                        <span style={{
                          ...styles.statusBadge,
                          backgroundColor: person.status === 'Present' ? 'rgba(34, 197, 94, 0.2)' :
                            person.status === 'Late' ? 'rgba(234, 179, 8, 0.2)' :
                              'rgba(239, 68, 68, 0.2)',
                          color: person.status === 'Present' ? '#22c55e' :
                            person.status === 'Late' ? '#eab308' :
                              '#ef4444'
                        }}>
                          {person.status}
                        </span>
                      </td>
                      <td style={styles.tableCell}>
                        <span style={styles.tableCellText}>{person.time}</span>
                      </td>
                      <td style={styles.tableCell}>
                        <span style={styles.tableCellText}>{person.date}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Features Section */}
          <div style={styles.featuresSection}>
            <h2 style={styles.sectionTitle}>Key Features</h2>
            <div style={styles.featuresGrid}>
              {/* Feature 1 */}
              <div style={styles.featureCard}>
                <div style={styles.featureIcon}>
                  <svg style={{ width: '32px', height: '32px', color: '#00d4ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 style={styles.featureTitle}>Real-time Tracking</h3>
                <p style={styles.featureDescription}>
                  Track attendance in real-time with automatic updates and notifications.
                </p>
              </div>

              {/* Feature 2 */}
              <div style={styles.featureCard}>
                <div style={styles.featureIcon}>
                  <svg style={{ width: '32px', height: '32px', color: '#00d4ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 style={styles.featureTitle}>Comprehensive Reports</h3>
                <p style={styles.featureDescription}>
                  Generate detailed attendance reports with customizable filters and export options.
                </p>
              </div>

              {/* Feature 3 */}
              <div style={styles.featureCard}>
                <div style={styles.featureIcon}>
                  <svg style={{ width: '32px', height: '32px', color: '#00d4ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 style={styles.featureTitle}>Time Management</h3>
                <p style={styles.featureDescription}>
                  Track working hours, breaks, and overtime with easy time management tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

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
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 10,
  },
  heroSection: {
    backgroundColor: '#000000',
    border: '1px solid #1F2937',
    borderRadius: '12px',
    boxShadow: '0 20px 25px rgba(0, 0, 0, 0.6)',
    overflow: 'hidden',
    marginBottom: '32px',
    position: 'relative',
  },
  heroContent: {
    padding: '48px 32px',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '42px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    margin: '0 0 12px 0',
    letterSpacing: '-1px',
  },
  heroSubtitle: {
    fontSize: '20px',
    color: '#00d4ff',
    margin: '0 0 16px 0',
    fontWeight: '500',
  },
  heroDescription: {
    fontSize: '16px',
    color: '#9CA3AF',
    maxWidth: '600px',
    margin: '0 auto 32px auto',
    lineHeight: '1.6',
  },
  heroButtons: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryButton: {
    padding: '12px 32px',
    backgroundColor: '#00d4ff',
    color: '#000000',
    fontWeight: '600',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  secondaryButton: {
    padding: '12px 32px',
    backgroundColor: 'transparent',
    color: '#00d4ff',
    fontWeight: '600',
    border: '2px solid #00d4ff',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  statsSection: {
    marginBottom: '32px',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '16px',
  },
  statCard: {
    backgroundColor: '#000000',
    border: '1px solid #1F2937',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
    transition: 'all 0.3s ease',
  },
  statHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '16px',
  },
  statIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  statLabel: {
    fontSize: '12px',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    margin: 0,
  },
  statValue: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    margin: 0,
  },
  progressBarContainer: {
    height: '6px',
    backgroundColor: '#1F2937',
    borderRadius: '999px',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    transition: 'width 0.3s ease',
    borderRadius: '999px',
  },
  activitySection: {
    backgroundColor: '#000000',
    border: '1px solid #1F2937',
    borderRadius: '12px',
    boxShadow: '0 20px 25px rgba(0, 0, 0, 0.6)',
    marginBottom: '32px',
    overflow: 'hidden',
  },
  activityHeader: {
    padding: '24px',
    borderBottom: '1px solid #1F2937',
  },
  activityTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    margin: '0 0 4px 0',
  },
  activitySubtitle: {
    fontSize: '14px',
    color: '#9CA3AF',
    margin: 0,
  },
  tableContainer: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHead: {
    backgroundColor: '#1F2937',
  },
  tableHeader: {
    padding: '16px 24px',
    textAlign: 'left',
    fontSize: '12px',
    fontWeight: '600',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  tableRow: {
    borderBottom: '1px solid #1F2937',
    transition: 'background-color 0.2s ease',
  },
  tableCell: {
    padding: '16px 24px',
    textAlign: 'left',
  },
  tableCellText: {
    fontSize: '14px',
    color: '#FFFFFF',
  },
  statusBadge: {
    fontSize: '12px',
    fontWeight: '600',
    padding: '6px 12px',
    borderRadius: '4px',
    display: 'inline-block',
  },
  featuresSection: {
    marginBottom: '32px',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
  },
  featureCard: {
    backgroundColor: '#000000',
    border: '1px solid #1F2937',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
    transition: 'all 0.3s ease',
    textAlign: 'center',
  },
  featureIcon: {
    width: '64px',
    height: '64px',
    backgroundColor: 'rgba(34, 211, 238, 0.1)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
  },
  featureTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#FFFFFF',
    margin: '0 0 12px 0',
  },
  featureDescription: {
    fontSize: '14px',
    color: '#9CA3AF',
    margin: 0,
    lineHeight: '1.6',
  },
};

export default Dashboard;