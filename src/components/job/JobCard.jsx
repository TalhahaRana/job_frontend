import React from "react";
import { FaClock } from "react-icons/fa";
import "./job.css";

const JobCard = ({ job, handleEdit, handleDelete }) => {
  console.log("JobCard received:", job); 

  return (
    <div className="job-card">
      <div className="job-card-content">
      
        <div className="job-info">
          <h3 className="job-title">{job.title}</h3>
          <p className="company-name">{job.company}</p>
          <div className="location-tags">
            <span className="tag">{job.location}</span>
          </div>
        </div>

        <div className="job-meta">
          <span className="time-posted">
            <FaClock /> Posted recently
          </span>
          <button className="edit-btn" onClick={() => handleEdit(job)}>Edit</button>
          <button className="delete-btn" onClick={() => handleDelete(job.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
