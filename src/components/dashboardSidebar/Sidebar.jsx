/**
 * Dashboard Sidebar Component
 * Adapts navigation based on user role
 */

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSaveTokenAction } from '../../redux/actions';
import './Sidebar.css';

const Sidebar = ({ role }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer?.user?.data);

  const handleLogout = () => {
    dispatch(getSaveTokenAction(null));
    navigate('/login');
  };

  const getMenuItems = () => {
    switch (role) {
      case 'SUPER_ADMIN':
        return [
          { path: '/admin/dashboard', label: 'Dashboard' },
          { path: '/admin/registrations', label: 'Department Registrations' },
          { path: '/admin/departments', label: 'Departments' },
          { path: '/admin/logs', label: 'System Logs' },
          { path: '/admin/settings', label: 'Settings' },
        ];
      
      case 'DEPARTMENT_ADMIN':
        return [
          { path: '/department/dashboard', label: 'Dashboard' },
          { path: '/department/documents', label: 'Documents' },
          { path: '/department/routing', label: 'Routing Rules' },
          { path: '/department/users', label: 'Users' },
          { path: '/department/audit', label: 'Audit Logs' },
        ];
      
      case 'OFFICER':
        return [
          { path: '/dashboard', label: 'Dashboard' },
          { path: '/my-documents', label: 'My Documents' },
          { path: '/upload', label: 'Upload Document' },
          { path: '/notifications', label: 'Notifications' },
        ];
      
      case 'AUDITOR':
        return [
          { path: '/audit/search', label: 'Search Documents' },
          { path: '/audit/logs', label: 'Audit Logs' },
        ];
      
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-header">
        <h2>Document Management</h2>
        <div className="user-info">
          <p className="user-name">{user?.first_name || 'Demo User'}</p>
          <p className="user-role">{role.replace('_', ' ')}</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button onClick={handleLogout} className="logout-btn">
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
