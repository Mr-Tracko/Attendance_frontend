import React, { useState } from 'react';
import Footer from './Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'shubhamgupta57019@gmail.com',
      link: 'mailto:shubhamgupta57019@gmail.com'
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      label: 'GitHub',
      value: 'Mr-Tracko',
      link: 'https://github.com/Mr-Tracko'
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'Shubham Gupta',
      link: 'https://www.linkedin.com/in/shubham-gupta-625709291/'
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s-1.5 4-5 5" />
        </svg>
      ),
      label: 'Twitter',
      value: '@2703Shubham',
      link: 'https://x.com/2703Shubham'
    }
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
          {/* Header Section */}
          <div style={styles.headerSection}>
            <h1 style={styles.headerTitle}>Get In Touch</h1>
            <p style={styles.headerSubtitle}>
              Have a question or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div style={styles.contentGrid}>
            {/* Contact Form Section */}
            <div style={styles.formSection}>
              <div style={styles.formCard}>
                <h2 style={styles.formTitle}>Send me a Message</h2>
                
                {submitted && (
                  <div style={styles.successMessage}>
                    ✅ Thank you! Your message has been sent successfully.
                  </div>
                )}

                <form onSubmit={handleSubmit} style={styles.form}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={styles.input}
                      placeholder="Your Name"
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={styles.input}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={styles.input}
                      placeholder="What is this about?"
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={styles.textarea}
                      placeholder="Your message here..."
                      rows="6"
                    ></textarea>
                  </div>

                  <button type="submit" style={styles.submitButton}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Section */}
            <div style={styles.infoSection}>
              <div style={styles.infoCard}>
                <h2 style={styles.infoTitle}>Contact Information</h2>
                <p style={styles.infoDescription}>
                  Reach out to me through any of these channels. I'll get back to you as soon as possible!
                </p>

                <div style={styles.contactList}>
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.contactItem}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#00d4ff';
                        e.currentTarget.style.backgroundColor = 'rgba(34, 211, 238, 0.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#1F2937';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <div style={styles.contactIconBox}>{info.icon}</div>
                      <div>
                        <p style={styles.contactLabel}>{info.label}</p>
                        <p style={styles.contactValue}>{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                
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
  headerSection: {
    textAlign: 'center',
    marginBottom: '48px',
  },
  headerTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    margin: '0 0 12px 0',
    letterSpacing: '-1px',
  },
  headerSubtitle: {
    fontSize: '18px',
    color: '#9CA3AF',
    margin: 0,
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '32px',
    marginBottom: '48px',
  },
  formSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  formCard: {
    backgroundColor: '#000000',
    border: '1px solid #1F2937',
    borderRadius: '12px',
    padding: '32px',
    boxShadow: '0 20px 25px rgba(0, 0, 0, 0.6)',
  },
  formTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    margin: '0 0 24px 0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#00d4ff',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '8px',
  },
  input: {
    backgroundColor: 'rgba(31, 41, 55, 0.5)',
    border: '1px solid #333333',
    borderRadius: '8px',
    padding: '12px 16px',
    color: '#FFFFFF',
    fontSize: '14px',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
    outline: 'none',
  },
  textarea: {
    backgroundColor: 'rgba(31, 41, 55, 0.5)',
    border: '1px solid #333333',
    borderRadius: '8px',
    padding: '12px 16px',
    color: '#FFFFFF',
    fontSize: '14px',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
    outline: 'none',
    resize: 'vertical',
  },
  submitButton: {
    backgroundColor: '#00d4ff',
    color: '#000000',
    fontWeight: '600',
    border: 'none',
    borderRadius: '6px',
    padding: '12px 24px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '8px',
  },
  successMessage: {
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    border: '1px solid rgba(34, 197, 94, 0.3)',
    color: '#22c55e',
    padding: '12px 16px',
    borderRadius: '8px',
    marginBottom: '20px',
    fontSize: '14px',
    fontWeight: '600',
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  infoCard: {
    backgroundColor: '#000000',
    border: '1px solid #1F2937',
    borderRadius: '12px',
    padding: '32px',
    boxShadow: '0 20px 25px rgba(0, 0, 0, 0.6)',
  },
  infoTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    margin: '0 0 12px 0',
  },
  infoDescription: {
    fontSize: '14px',
    color: '#9CA3AF',
    margin: '0 0 24px 0',
    lineHeight: '1.6',
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '32px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    backgroundColor: 'transparent',
    border: '1px solid #1F2937',
    borderRadius: '8px',
    padding: '16px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  contactIconBox: {
    width: '48px',
    height: '48px',
    backgroundColor: 'rgba(34, 211, 238, 0.1)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#00d4ff',
    flexShrink: 0,
  },
  contactLabel: {
    fontSize: '12px',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    margin: '0 0 4px 0',
    fontWeight: '600',
  },
  contactValue: {
    fontSize: '16px',
    color: '#FFFFFF',
    margin: 0,
    fontWeight: '500',
  },
  workingHours: {
    backgroundColor: 'rgba(34, 211, 238, 0.05)',
    border: '1px solid rgba(34, 211, 238, 0.2)',
    borderRadius: '8px',
    padding: '16px',
  },
  workingHoursTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#00d4ff',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    margin: '0 0 12px 0',
  },
  hoursItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  day: {
    fontSize: '14px',
    color: '#9CA3AF',
  },
  time: {
    fontSize: '14px',
    color: '#00d4ff',
    fontWeight: '600',
  }
};

export default Contact;