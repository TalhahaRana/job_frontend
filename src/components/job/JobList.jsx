import React, { useState, useEffect } from "react";
import JobCard from "./JobCard"; 
import { getJobs, createJob, updateJob, deleteJob } from "./jobService";
import "./job.css";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    company: "",
    sort_by: "date_posted",
  });

  useEffect(() => {
    fetchJobs();
  }, [filters]);

  const fetchJobs = async () => {
    try {
      const data = await getJobs(filters);
      console.log("Fetched Jobs:", data);
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateJob(editingId, formData);
      } else {
        await createJob(formData);
      }
      fetchJobs();
      setFormData({ title: "", company: "", location: "", category: "" });
      setEditingId(null);
    } catch (error) {
      console.error("Error saving job:", error);
    }
  };

  const handleEdit = (job) => {
    setFormData({
      title: job.title,
      company: job.company,
      location: job.location,
      category: job.category,
    });
    setEditingId(job.id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteJob(id);
      fetchJobs();
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  return (
    <div className="container">
      <h2>Job Management</h2>

      {/* Job Form */}
      <form onSubmit={handleSubmit} className="job-form">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <button type="submit">{editingId ? "Update Job" : "Add Job"}</button>
      </form>

      {/* Filtering & Sorting */}
      <div className="filters">
        <label>Filter by Category:</label>
        <input type="text" name="category" value={filters.category} onChange={handleFilterChange} placeholder="Category" />
        <label>Filter by Location:</label>
        <input type="text" name="location" value={filters.location} onChange={handleFilterChange} placeholder="Location" />
        <label>Filter by Company:</label>
        <input type="text" name="company" value={filters.company} onChange={handleFilterChange} placeholder="Company" />
        <label>Sort by:</label>
        <select name="sort_by" value={filters.sort_by} onChange={handleFilterChange}>
          <option value="date_posted">Date Posted</option>
          <option value="company">Company</option>
          <option value="title">Job Title</option>
        </select>
      </div>

      {/* Job List */}
      <div className="job-list">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <JobCard key={job.id} job={job} handleEdit={handleEdit} handleDelete={handleDelete} />
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
