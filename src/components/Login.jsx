import { useState } from "react";
import Admin from "./Admin";
import User from "./User";

function Login() {
  const [userid, setUserid] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAdminKey , setShowAdminKey] = useState(false);
  const [adminKey , setAdminKey] = useState("");
  const [adminKeyError , setAdminKeyError] = useState("");

  const USER_GMAIL = "user@gmail.com";
  const ADMIN_GMAIL = "admin@gmail.com";
  const ADMIN_SECRET = "admin123"

  const selectLoginType = (type) => {
    setSelectedOption(type);

      if (type === 'admin') {
        setShowAdminKey(true);
      } else {
        setUserid(USER_GMAIL);
        setIsLoggedIn(true);
        setSelectedOption(null);
      }
  };

  const handleAdminKeySubmit = (e) => {
    e.preventDefault();
    if (adminKey === ADMIN_SECRET) {
      setUserid(ADMIN_GMAIL);
      setIsLoggedIn(true);
      setShowAdminKey(false);
      setadminKeyError("");
    } else {
      setadminKeyError("Invalid Admin Key. Please try again.");
    }
  }
  if (isLoggedIn) {
    if (userid === USER_GMAIL) {
      return <User />;
    }
    else if (userid === ADMIN_GMAIL) {
      return <Admin />;
    }
  }




  return (
    <>
      <div className="min-h-screen flex items-center justify-center" style={{
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
      }}>
        <div
          className="w-full max-w-[600px] mx-4 p-6 rounded-2xl shadow-2xl border border-gray-600/30 text-gray-200  max-h-[600px] overflow-auto mt-10"
          style={{
            background: 'rgba(30, 41, 59, 0.8)',
            backdropFilter: 'blur(10px)',
            animation: 'float 6s ease-in-out infinite'
          }}
        >
          <h1 className="text-3xl font-bold text-center mb-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-center text-gray-400 mb-8 text-base">
            Choose your login type to continue
          </p>

          <div className="space-y-4">
            {/* Admin Login Option */}
            <div
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 border-transparent relative overflow-hidden ${selectedOption === 'admin' ? 'scale-98' : 'hover:-translate-y-1 hover:scale-105'
                }`}
              style={{
                background: 'linear-gradient(145deg, #1e293b, #334155)',
              }}
              onMouseEnter={(e) => {
                if (selectedOption !== 'admin') {
                  e.target.style.borderColor = 'rgba(239, 68, 68, 0.5)';
                  e.target.style.boxShadow = '0 20px 40px -12px rgba(239, 68, 68, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedOption !== 'admin') {
                  e.target.style.borderColor = 'transparent';
                  e.target.style.boxShadow = 'none';
                }
              }}
              onClick={() => selectLoginType('admin')}
            >
              <div
                className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-xl"
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #dc2626, #ef4444)'
                }}
              >
                👑
              </div>
              <h3 className="text-lg font-semibold text-center mb-2 text-red-300" onClick={() => selectLoginType('admin')}>
                Login as Admin
              </h3>
              <p className="text-center text-gray-400 text-xs leading-relaxed">
                Access administrative dashboard with full system controls and management capabilities
              </p>
            </div>

            {showAdminKey && (
              <form onSubmit={handleAdminKeySubmit} className="mt-4 p-4 bg-gray-900 rounded-lg shadow-lg flex flex-col items-center">
                <label className="text-gray-300 mb-2">Enter Admin Secret Key:</label>
                <input
                  type="password"
                  value={adminKey}
                  onChange={e => setAdminKey(e.target.value)}
                  className="px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none mb-2"
                  autoFocus
                />
                {adminKeyError && <div className="text-red-400 mb-2">{adminKeyError}</div>}
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
                    onClick={() => {
                      setShowAdminKey(false);
                      setAdminKey("");
                      setAdminKeyError("");
                      setSelectedOption(null);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
              <span className="px-3 text-gray-500 font-medium text-xs">OR</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            </div>

            {/* User Login Option */}
            <div
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 border-transparent relative overflow-hidden ${selectedOption === 'user' ? 'scale-98' : 'hover:-translate-y-1 hover:scale-105'
                }`}
              style={{
                background: 'linear-gradient(145deg, #1e293b, #334155)',
              }}
              onMouseEnter={(e) => {
                if (selectedOption !== 'user') {
                  e.target.style.borderColor = 'rgba(34, 197, 94, 0.5)';
                  e.target.style.boxShadow = '0 20px 40px -12px rgba(34, 197, 94, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedOption !== 'user') {
                  e.target.style.borderColor = 'transparent';
                  e.target.style.boxShadow = 'none';
                }
              }}
              onClick={() => selectLoginType('user')}
            >
              <div
                className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-xl"
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #059669, #22c55e)'
                }}
              >
                👤
              </div>
              <h3 className="text-lg font-semibold text-center mb-2 text-green-300" onClick={() => selectLoginType('user')}>
                Login as User
              </h3>
              <p className="text-center text-gray-400 text-xs leading-relaxed">
                Access your personal account with standard user privileges and features
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
        
      `}</style>
      </div>
    </>
  );
}

export default Login;