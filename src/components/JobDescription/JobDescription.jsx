import React from 'react';
import './JobDescription.css';
const JobDescription = ({ job }) => {
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
  } = job;
  return (
    <div className="job-description">
      <p>
        <strong>Job Description: </strong> {job_description}
      </p>
      <p>
        <strong>Job Responsibility: </strong> {job_responsibility}
      </p>
      <p>
        <strong>Educational Requirements: </strong> <br />
        {educational_requirements}
      </p>
      <p>
        <strong>Experiences: </strong> <br />
        {experiences}
      </p>
    </div>
  );
};

export default JobDescription;
