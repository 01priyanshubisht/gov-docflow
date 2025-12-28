/**
 * Super Admin Dashboard
 * State-level oversight and governance
 */

import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/dashboardSidebar/Sidebar';
import { MetricCard, DataTable, StatusBadge } from '../../components/dashboardShared/SharedComponents';
import './SuperAdminDashboard.css';

const SuperAdminDashboard = () => {
  const [metrics, setMetrics] = useState({
    totalDepartments: 24,
    pendingRegistrations: 3,
    totalUsers: 156,
    documentsProcessed: 1247
  });

  const [pendingRegistrations, setPendingRegistrations] = useState([
    {
      id: 1,
      departmentName: 'Department of Agriculture',
      nodalOfficer: 'Rajesh Kumar',
      email: 'rajesh.kumar@uk.gov.in',
      status: 'Pending',
      submittedOn: '2025-12-27'
    },
    {
      id: 2,
      departmentName: 'Forest Department',
      nodalOfficer: 'Anita Sharma',
      email: 'anita.sharma@uk.gov.in',
      status: 'Pending',
      submittedOn: '2025-12-26'
    },
    {
      id: 3,
      departmentName: 'Public Works Department',
      nodalOfficer: 'Vijay Singh',
      email: 'vijay.singh@uk.gov.in',
      status: 'Pending',
      submittedOn: '2025-12-25'
    }
  ]);

  const handleApprove = (id) => {
    console.log('Approving registration:', id);
    // TODO: Call API to approve
    setPendingRegistrations(prev => 
      prev.filter(reg => reg.id !== id)
    );
  };

  const handleReject = (id) => {
    console.log('Rejecting registration:', id);
    // TODO: Call API to reject
    setPendingRegistrations(prev => 
      prev.filter(reg => reg.id !== id)
    );
  };

  const registrationColumns = [
    { header: 'Department Name', field: 'departmentName' },
    { header: 'Nodal Officer', field: 'nodalOfficer' },
    { header: 'Email', field: 'email' },
    { header: 'Submitted On', field: 'submittedOn' },
    { 
      header: 'Status', 
      render: (row) => <StatusBadge status={row.status} />
    },
    {
      header: 'Actions',
      render: (row, onAction) => (
        <div className="table-actions">
          <button 
            className="table-action-btn approve"
            onClick={() => onAction('approve', row.id)}
          >
            Approve
          </button>
          <button 
            className="table-action-btn reject"
            onClick={() => onAction('reject', row.id)}
          >
            Reject
          </button>
        </div>
      )
    }
  ];

  const handleTableAction = (action, id) => {
    if (action === 'approve') {
      handleApprove(id);
    } else if (action === 'reject') {
      handleReject(id);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar role="SUPER_ADMIN" />
      
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Super Admin Dashboard</h1>
          <p className="dashboard-subtitle">State-level System Overview</p>
        </div>

        {/* Metrics Grid */}
        <div className="metrics-grid">
          <MetricCard
            title="Total Departments"
            value={metrics.totalDepartments}
          />
          <MetricCard
            title="Pending Registrations"
            value={metrics.pendingRegistrations}
          />
          <MetricCard
            title="Total Active Users"
            value={metrics.totalUsers}
          />
          <MetricCard
            title="Documents Processed"
            value={metrics.documentsProcessed}
          />
        </div>

        {/* Department Registrations Section */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Pending Department Registrations</h2>
            <span className="section-count">{pendingRegistrations.length} pending</span>
          </div>
          
          <DataTable
            columns={registrationColumns}
            data={pendingRegistrations}
            onAction={handleTableAction}
          />
        </div>

        {/* System Activity Section */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Recent System Activity</h2>
          </div>
          
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-content">
                <p className="activity-text">Revenue Department approved</p>
                <span className="activity-time">2 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-content">
                <p className="activity-text">12 new users added across departments</p>
                <span className="activity-time">5 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-content">
                <p className="activity-text">System logs archived</p>
                <span className="activity-time">1 day ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
