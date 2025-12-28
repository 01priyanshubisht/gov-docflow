/**
 * Government-Style Login Page
 * Uttarakhand Government Internal Platform
 * 
 * Features:
 * - Minimal, professional design
 * - Email/Employee ID login
 * - No social auth, no public signup
 * - CAPTCHA placeholder
 * - Audit-ready
 */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login, getCurrentUser } from "../api/authenticationAPI";
import { getSaveTokenAction, getSaveProfileAction } from "../redux/actions";
import "./GovLogin.css";

// Government Logo
import govLogo from "../img/ukgov.png";

const GovLogin = () => {
  const [credentials, setCredentials] = useState({
    emailOrEmployeeId: "",
    password: "",
    captchaToken: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error on input
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!credentials.emailOrEmployeeId || !credentials.password) {
      setError("Please enter both Email/Employee ID and Password");
      return;
    }

    setLoading(true);

    try {
      // Call authentication API
      const response = await login(credentials);

      if (response.success) {
        // Store token in Redux
        dispatch(getSaveTokenAction(response.token));
        
        // Fetch and store user profile
        const userResponse = await getCurrentUser();
        if (userResponse.success) {
          dispatch(getSaveProfileAction(userResponse.user));
        }

        // Redirect based on role
        redirectBasedOnRole(response.user.role);
      } else {
        // Show error message
        setError(response.error || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const redirectBasedOnRole = (role) => {
    switch (role) {
      case "SUPER_ADMIN":
        navigate("/admin/dashboard");
        break;
      case "DEPARTMENT_ADMIN":
        navigate("/department/dashboard");
        break;
      case "OFFICER":
        navigate("/dashboard");
        break;
      case "AUDITOR":
        navigate("/audit/search");
        break;
      default:
        navigate("/");
    }
  };

  // DEVELOPMENT TESTING: Quick login as any role
  const handleTestLogin = (role, roleName) => {
    console.log('Test login clicked:', role);
    
    const testUser = {
      role: role,
      first_name: `Test ${roleName}`,
      email: `${role.toLowerCase()}@test.gov.in`,
      employee_id: `EMP${role.substring(0, 3)}001`,
      department: role === 'SUPER_ADMIN' ? 'State IT Cell' : 'Test Department'
    };

    const testToken = {
      accessToken: 'test-token-' + Date.now(),
      refreshToken: 'test-refresh-token'
    };

    // Store in localStorage for persistence
    localStorage.setItem('authToken', testToken.accessToken);
    localStorage.setItem('userRole', role);
    localStorage.setItem('userData', JSON.stringify(testUser));

    // Set Redux state - Login action
    dispatch({ type: 'LOGIN' });
    
    // Save token
    dispatch(getSaveTokenAction(testToken));
    
    // Save user profile
    dispatch(getSaveProfileAction({
      data: testUser
    }));

    console.log('Redux state updated, navigating to dashboard for role:', role);
    
    // Small delay to ensure state is set
    setTimeout(() => {
      redirectBasedOnRole(role);
    }, 100);
  };

  return (
    <div className="gov-login-container">
      <div className="gov-login-header">
        <div className="gov-header-content">
          <img src={govLogo} alt="Government of Uttarakhand" className="gov-logo" />
          <div className="gov-header-text">
            <h1>उत्तराखंड सरकार</h1>
            <h1>Government of Uttarakhand</h1>
            <h2>आंतरिक दस्तावेज़ प्रबंधन प्रणाली</h2>
            <h2>Internal Document Management System</h2>
          </div>
        </div>
      </div>

      <div className="gov-login-main">
        <div className="gov-login-box">
          <div className="gov-login-title">
            <h3>Authorized Personnel Login</h3>
            <p>For official use only</p>
          </div>

          {error && (
            <div className="gov-alert gov-alert-error" role="alert">
              <span className="gov-alert-icon">⚠</span>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="gov-login-form">
            <div className="gov-form-group">
              <label htmlFor="emailOrEmployeeId" className="gov-label">
                Email Address / Employee ID
              </label>
              <input
                type="text"
                id="emailOrEmployeeId"
                name="emailOrEmployeeId"
                className="gov-input"
                value={credentials.emailOrEmployeeId}
                onChange={handleInputChange}
                placeholder="Enter your email or employee ID"
                autoComplete="username"
                disabled={loading}
                required
              />
            </div>

            <div className="gov-form-group">
              <label htmlFor="password" className="gov-label">
                Password
              </label>
              <div className="gov-password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="gov-input"
                  value={credentials.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  disabled={loading}
                  required
                />
                <button
                  type="button"
                  className="gov-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex="-1"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* CAPTCHA Placeholder - for future implementation */}
            <div className="gov-form-group">
              <div className="gov-captcha-placeholder">
                <input 
                  type="checkbox" 
                  id="captcha" 
                  className="gov-checkbox"
                  disabled={loading}
                  required 
                />
                <label htmlFor="captcha" className="gov-checkbox-label">
                  I am not a robot (CAPTCHA placeholder)
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              className="gov-btn gov-btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="gov-spinner"></span>
                  Authenticating...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <div className="gov-login-footer">
            <div className="gov-divider">
              <span>or</span>
            </div>
            
            {/* DEVELOPMENT TESTING - Remove in production */}
            <div style={{ 
              padding: '20px', 
              backgroundColor: '#fff3cd', 
              borderRadius: '4px',
              marginBottom: '20px',
              border: '1px solid #ffc107'
            }}>
              <p style={{ 
                fontSize: '12px', 
                fontWeight: 'bold', 
                marginBottom: '10px',
                color: '#856404'
              }}>
                🔧 DEVELOPMENT TESTING - Quick Login
              </p>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '10px' 
              }}>
                <button
                  type="button"
                  onClick={() => handleTestLogin('SUPER_ADMIN', 'Super Admin')}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: '#0f5e59',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  Login as Super Admin
                </button>
                <button
                  type="button"
                  onClick={() => handleTestLogin('DEPARTMENT_ADMIN', 'Dept Admin')}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: '#0f5e59',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  Login as Dept Admin
                </button>
                <button
                  type="button"
                  onClick={() => handleTestLogin('OFFICER', 'Officer')}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: '#0f5e59',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  Login as Officer
                </button>
                <button
                  type="button"
                  onClick={() => handleTestLogin('AUDITOR', 'Auditor')}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: '#0f5e59',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  Login as Auditor
                </button>
              </div>
            </div>
            
            <Link to="/department-registration" className="gov-link">
              <span className="gov-link-icon">📋</span>
              Department Registration Request
            </Link>

            <div className="gov-info-text">
              <p>
                <strong>Note:</strong> This is a restricted system for authorized 
                government personnel only. All login attempts are logged and monitored. 
                Unauthorized access is prohibited.
              </p>
              <p className="gov-help-text">
                For technical support or account issues, contact your department 
                administrator or the State IT Cell.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="gov-login-footer-bar">
        <p>
          &copy; {new Date().getFullYear()} Government of Uttarakhand. 
          Designed and maintained by State IT Cell / NIC.
        </p>
      </div>
    </div>
  );
};

export default GovLogin;
