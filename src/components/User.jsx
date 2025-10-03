import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [year, setYear] = useState('');
  const [branchSection, setBranchSection] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [studentData, setStudentData] = useState(null);
  // Store form data
  const [formData, setFormData] = useState({
    fullName: '',
    rollNo: '',
    branch: '',
    year: ''
  });

  const navigate = useNavigate();
  // Update form data when user types
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams({
      name : formData.fullName,
      year: formData.year,
      branchSection: formData.branch,
      rollNo: formData.rollNo
    });
    console.log(formData);

    try {
      const res = await fetch(`http://localhost:5000/api/user/getUserData?${params.toString()}`);
      const data = await res.json();
      if (data.length === 0) {
        alert("No student found with this roll No in this Section and Year")
        setStudentData(null);
      }
      else {
        alert(`Student found: ${data[0].name} (Roll No: ${data[0].rollNo})`);
        navigate("/student" , {state : {studentData : data[0]}}); // Pass the student data to the StudentProfile component
      }
      //state is an object you can send along with navigation using React Router's navigate function.
    } catch (err) {
      alert("Error fetching user data: ", err);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Student Attendance Portal</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name Field */}
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-gray-300 text-sm font-medium">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          {/* Roll Number Field */}
          <div className="space-y-2">
            <label htmlFor="rollNo" className="block text-gray-300 text-sm font-medium">
              Roll Number
            </label>
            <input
              id="rollNo"
              name="rollNo"
              type="text"
              required
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
              placeholder="Enter your roll number (only digits like : 102)"
              value={formData.rollNo}
              onChange={handleChange}
            />
          </div>

          {/* Branch and Section Dropdown */}
          <div className="space-y-2">
            <label htmlFor="branch" className="block text-gray-300 text-sm font-medium">
              Branch and Section
            </label>
            <select
              id="branch"
              name="branch"
              required
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
              value={formData.branch}
              onChange={handleChange}
            >
              <option value="" disabled>Select Branch and Section</option>
              <option value="CSE-A">CSE-A</option>
              <option value="CSE-B">CSE-B</option>
              <option value="IT-A">IT-A</option>
              <option value="IT-B">IT-B</option>
            </select>
          </div>

          {/* Year Dropdown */}
          <div className="space-y-2">
            <label htmlFor="year" className="block text-gray-300 text-sm font-medium">
              Year
            </label>
            <select
              id="year"
              name="year"
              required
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
              value={formData.year}
              onChange={handleChange}
            >
              <option value="" disabled>Select Year</option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200 flex items-center justify-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            <span>Show Attendance</span>
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-center text-sm">
            © College Attendance System ©
          </p>
        </div>
      </div>
      {studentData && (
        <div className="mt-6 p-4 bg-gray-700 rounded text-white">
          <div><strong>Name:</strong> {studentData.name}</div>
          <div><strong>Roll No:</strong> {studentData.rollNo}</div>
          <div><strong>Branch:</strong> {studentData.section}</div>
          <div><strong>Year:</strong> {studentData.year}</div>
        </div>
      )}
    </div>
  );
};

export default User;