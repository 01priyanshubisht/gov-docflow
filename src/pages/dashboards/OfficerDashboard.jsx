/**
 * Officer Dashboard
 * Daily operational work
 */

import React, { useState } from 'react';
import Sidebar from '../../components/dashboardSidebar/Sidebar';
import { DocumentCard, EmptyState } from '../../components/dashboardShared/SharedComponents';
import '../dashboards/SuperAdminDashboard.css';
import './OfficerDashboard.css';

const OfficerDashboard = () => {
  const [actionRequired] = useState([
    {
      id: 1,
      title: 'Land Survey Report - Village Rampur',
      category: 'Survey',
      urgency: 'High',
      status: 'Action_Required',
      summary: 'Complete land survey verification and submit final report with recommendations',
      deadline: '2025-12-29'
    },
    {
      id: 2,
      title: 'Farmer Subsidy Application Review',
      category: 'Subsidy',
      urgency: 'Medium',
      status: 'Action_Required',
      summary: 'Verify eligibility criteria and approve subsidy applications for Q4 2025',
      deadline: '2025-12-31'
    }
  ]);

  const [forInformation] = useState([
    {
      id: 3,
      title: 'New Policy Guidelines - Organic Farming',
      category: 'Policy',
      urgency: 'Low',
      status: 'For_Information',
      summary: 'Updated guidelines for organic farming certification and incentives',
      deadline: null
    },
    {
      id: 4,
      title: 'Quarterly Performance Report',
      category: 'Reports',
      urgency: 'Low',
      status: 'For_Information',
      summary: 'Department performance metrics for Q4 2025',
      deadline: null
    }
  ]);

  return (
    <div className="dashboard-layout">
      <Sidebar role="OFFICER" />
      
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Officer Dashboard</h1>
          <p className="dashboard-subtitle">Welcome back, Ramesh Verma</p>
        </div>

        {/* Priority Alert */}
        {actionRequired.length > 0 && (
          <div className="alert-banner priority">
            <div className="alert-content">
              <strong>Action Required</strong>
              <p>You have {actionRequired.length} documents requiring immediate attention</p>
            </div>
          </div>
        )}

        {/* Action Required Section */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>Action Required</h2>
            <span className="section-count">{actionRequired.length} documents</span>
          </div>
          
          <div className="document-grid">
            {actionRequired.map(doc => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
          </div>
        </div>

        {/* For Information Section */}
        <div className="dashboard-section">
          <div className="section-header">
            <h2>For Information</h2>
            <span className="section-count">{forInformation.length} documents</span>
          </div>
          
          <div className="document-grid">
            {forInformation.map(doc => (
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
              <span className="action-label">Upload Document</span>
            </button>
            <button className="quick-action-card">
              <span className="action-label">My Documents</span>
            </button>
            <button className="quick-action-card">
              <span className="action-label">Search</span>
            </button>
            <button className="quick-action-card">
              <span className="action-label">Create Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficerDashboard;
