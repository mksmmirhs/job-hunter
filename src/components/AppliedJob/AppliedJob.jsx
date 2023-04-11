import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './AppliedJob.css';
import { Link } from 'react-router-dom';

const AppliedJob = ({ job }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
  } = job;
  return (
    <div className="applied-job-container">
      <img src={company_logo} alt="" />
      <div className="applied-job-details">
        <h3>{job_title}</h3>
        <p>{company_name}</p>
        <div className="onsite-remote">
          <h6 className="btn-remote">{remote_or_onsite}</h6>
          <h6 className="btn-remote">{fulltime_or_parttime}</h6>
        </div>
        <div className="feature-job-address-salary">
          <p>
            <FontAwesomeIcon icon={faLocationPin} /> {location}
          </p>
          <p>
            <FontAwesomeIcon icon={faDollarSign} /> Salary: {salary}
          </p>
        </div>
      </div>
      <Link to={`/details/${id}`}>
        <button className="btn-common">View Details</button>
      </Link>
    </div>
  );
};

export default AppliedJob;
