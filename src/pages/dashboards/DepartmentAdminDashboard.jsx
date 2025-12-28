/**
 * Department Admin Dashboard
 * Department-level control and coordination
 */

import React, { useState } from 'react';
import Sidebar from '../../components/dashboardSidebar/Sidebar';
import { MetricCard, DocumentCard, EmptyState } from '../../components/dashboardShared/SharedComponents';
import '../dashboards/SuperAdminDashboard.css';

const DepartmentAdminDashboard = () => {
  const [metrics] = useState({
    receivedToday: 8,
    requireAction: 12,
    overdue: 3,
    recentlyRouted: 15
  });

  const [documents] = useState([
    {
      id: 1,
      title: 'Budget Allocation Request FY 2025-26',
      category: 'Finance',
      urgency: 'High',
      assignedTo: 'Ramesh Verma',
      status: 'Action_Required',
      summary: 'Review and approve budget allocation for infrastructure projects',
      deadline: '2025-12-30'
    },
    {
      id: 2,
      title: 'Land Acquisition Proposal - Dehradun',
      category: 'Land Records',
      urgency: 'Medium',
      assignedTo: 'Priya Singh',
      status: 'For_Information',
      summary: 'Land acquisition details for upcoming highway project',
      deadline: '2026-01-05'
    },
    {
      id: 3,
      title: 'Staff Transfer Orders Q1 2026',
      category: 'HR',
      urgency: 'Low',
      assignedTo: 'Amit Kumar',
      status: 'Pending',
      summary: 'Quarterly staff transfer and posting orders',
      deadline: '2026-01-10'
    }
  ]);

  return (
    <div className="dashboard-layout">
      <Sidebar role="DEPARTMENT_ADMIN" />
      
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Department Admin Dashboard</h1>
          <p className="dashboard-subtitle">Department of Agriculture - Uttarakhand</p>
        </div>

        {/* Metrics Grid */}
        <div className="metrics-grid">
          <MetricCard
            title="Received Today"
            value={metrics.receivedToday}
          />
          <MetricCard
            title="Require Action"
            value={metrics.requireAction}
          />
          <MetricCard
            title="Overdue"
            value={metrics.overdue}
          />
          <MetricCard
            title="Recently Routed"
            value={metrics.recentlyRouted}
          />
        </div>

        {/* Documents Overview */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Document Overview</h2>
            <button className="section-action-btn">View All</button>
          </div>
          
          <div className="document-grid">
            {documents.map(doc => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Quick Actions</h2>
          </div>
          
          <div className="quick-actions-grid">
            <button className="quick-action-card">
              <span className="action-label">Manage Users</span>
            </button>
            <button className="quick-action-card">
              <span className="action-label">Routing Rules</span>
            </button>
            <button className="quick-action-card">
              <span className="action-label">Reports</span>
            </button>
            <button className="quick-action-card">
              <span className="action-label">Audit Logs</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentAdminDashboard;
