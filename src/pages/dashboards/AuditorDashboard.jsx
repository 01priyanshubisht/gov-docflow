/**
 * Auditor Dashboard
 * Read-only compliance and audit support
 */

import React, { useState } from 'react';
import Sidebar from '../../components/dashboardSidebar/Sidebar';
import { DataTable, StatusBadge } from '../../components/dashboardShared/SharedComponents';
import '../dashboards/SuperAdminDashboard.css';
import './AuditorDashboard.css';

const AuditorDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilters, setSearchFilters] = useState({
    department: '',
    dateFrom: '',
    dateTo: '',
    category: ''
  });

  const [recentDocuments] = useState([
    {
      id: 1,
      title: 'Budget Allocation Request FY 2025-26',
      department: 'Agriculture',
      category: 'Finance',
      uploadedBy: 'Ramesh Verma',
      uploadDate: '2025-12-28',
      status: 'Approved',
      accessedBy: 5
    },
    {
      id: 2,
      title: 'Land Acquisition Proposal',
      department: 'Revenue',
      category: 'Land Records',
      uploadedBy: 'Priya Singh',
      uploadDate: '2025-12-27',
      status: 'Pending',
      accessedBy: 3
    },
    {
      id: 3,
      title: 'Staff Transfer Orders Q1 2026',
      department: 'Agriculture',
      category: 'HR',
      uploadedBy: 'Amit Kumar',
      uploadDate: '2025-12-26',
      status: 'Completed',
      accessedBy: 8
    }
  ]);

  const [auditLogs] = useState([
    {
      id: 1,
      action: 'Document Viewed',
      user: 'Ramesh Verma',
      document: 'Budget Allocation Request',
      timestamp: '2025-12-28 14:35:22',
      ipAddress: '192.168.1.45'
    },
    {
      id: 2,
      action: 'Document Approved',
      user: 'Dept Admin',
      document: 'Land Survey Report',
      timestamp: '2025-12-28 13:20:15',
      ipAddress: '192.168.1.50'
    },
    {
      id: 3,
      action: 'User Login',
      user: 'Priya Singh',
      document: '-',
      timestamp: '2025-12-28 09:15:08',
      ipAddress: '192.168.1.52'
    }
  ]);

  const documentColumns = [
    { header: 'Title', field: 'title' },
    { header: 'Department', field: 'department' },
    { header: 'Category', field: 'category' },
    { header: 'Uploaded By', field: 'uploadedBy' },
    { header: 'Date', field: 'uploadDate' },
    { 
      header: 'Status', 
      render: (row) => <StatusBadge status={row.status} />
    },
    {
      header: 'Actions',
      render: (row) => (
        <button className="table-action-btn view">View Details</button>
      )
    }
  ];

  const auditColumns = [
    { header: 'Timestamp', field: 'timestamp' },
    { header: 'Action', field: 'action' },
    { header: 'User', field: 'user' },
    { header: 'Document', field: 'document' },
    { header: 'IP Address', field: 'ipAddress' }
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar role="AUDITOR" />
      
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Auditor Dashboard</h1>
          <p className="dashboard-subtitle">Read-Only Access - Compliance & Audit Support</p>
        </div>

        {/* Search Section */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Search Documents</h2>
          </div>
          
          <div className="search-container">
            <div className="search-bar">
              <input
                type="text"
                className="search-input"
                placeholder="Search by title, keyword, or document ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-btn">Search</button>
            </div>

            <div className="search-filters">
              <select 
                className="filter-select"
                value={searchFilters.department}
                onChange={(e) => setSearchFilters({...searchFilters, department: e.target.value})}
              >
                <option value="">All Departments</option>
                <option value="agriculture">Agriculture</option>
                <option value="revenue">Revenue</option>
                <option value="forest">Forest</option>
              </select>

              <select 
                className="filter-select"
                value={searchFilters.category}
                onChange={(e) => setSearchFilters({...searchFilters, category: e.target.value})}
              >
                <option value="">All Categories</option>
                <option value="finance">Finance</option>
                <option value="hr">HR</option>
                <option value="land">Land Records</option>
              </select>

              <input
                type="date"
                className="filter-date"
                value={searchFilters.dateFrom}
                onChange={(e) => setSearchFilters({...searchFilters, dateFrom: e.target.value})}
                placeholder="From Date"
              />

              <input
                type="date"
                className="filter-date"
                value={searchFilters.dateTo}
                onChange={(e) => setSearchFilters({...searchFilters, dateTo: e.target.value})}
                placeholder="To Date"
              />
            </div>
          </div>

          <DataTable
            columns={documentColumns}
            data={recentDocuments}
          />
        </div>

        {/* Audit Logs Section */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Recent Audit Logs</h2>
            <button className="section-action-btn">Export Logs</button>
          </div>
          
          <DataTable
            columns={auditColumns}
            data={auditLogs}
          />
        </div>

        {/* Read-Only Notice */}
        <div className="notice-banner">
          <div className="notice-content">
            <strong>Read-Only Access</strong>
            <p>You have view-only permissions. You cannot upload, edit, or approve documents.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditorDashboard;
