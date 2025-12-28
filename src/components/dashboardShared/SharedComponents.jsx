/**
 * Reusable Dashboard Components
 */

import React from 'react';
import './SharedComponents.css';

// Status Badge Component
export const StatusBadge = ({ status }) => {
  const getStatusClass = () => {
    switch (status?.toLowerCase()) {
      case 'pending': return 'status-pending';
      case 'approved': return 'status-approved';
      case 'rejected': return 'status-rejected';
      case 'action_required': return 'status-action';
      case 'for_information': return 'status-info';
      case 'completed': return 'status-completed';
      case 'overdue': return 'status-overdue';
      default: return 'status-default';
    }
  };

  return (
    <span className={`status-badge ${getStatusClass()}`}>
      {status?.replace('_', ' ')}
    </span>
  );
};

// Metric Card Component - Government Standard
export const MetricCard = ({ title, value, trend }) => {
  return (
    <div className="metric-card">
      <div className="metric-content">
        <h3 className="metric-title">{title}</h3>
        <p className="metric-value">{value}</p>
        {trend && <span className="metric-trend">{trend}</span>}
      </div>
    </div>
  );
};

// Document Card Component
export const DocumentCard = ({ document }) => {
  return (
    <div className="document-card">
      <div className="document-header">
        <h4 className="document-title">{document.title}</h4>
        <StatusBadge status={document.status} />
      </div>
      <div className="document-meta">
        <span className="document-category">{document.category}</span>
        {document.urgency && (
          <span className={`document-urgency ${document.urgency.toLowerCase()}`}>
            {document.urgency}
          </span>
        )}
      </div>
      {document.summary && (
        <p className="document-summary">{document.summary}</p>
      )}
      <div className="document-footer">
        {document.assignedTo && (
          <span className="document-assigned">Assigned: {document.assignedTo}</span>
        )}
        {document.deadline && (
          <span className="document-deadline">Due: {document.deadline}</span>
        )}
      </div>
    </div>
  );
};

// Empty State Component - Government Standard
export const EmptyState = ({ message }) => {
  return (
    <div className="empty-state">
      <p className="empty-message">{message}</p>
    </div>
  );
};

// Table Component
export const DataTable = ({ columns, data, onAction }) => {
  return (
    <div className="data-table-container">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="table-empty">
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {columns.map((col, colIdx) => (
                  <td key={colIdx}>
                    {col.render ? col.render(row, onAction) : row[col.field]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
