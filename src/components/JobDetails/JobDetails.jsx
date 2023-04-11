import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationPin,
  faDollarSign,
  faCalendar,
  faPhone,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import './JobDetails.css';

const JobDetails = ({ job, JobApplication }) => {
  const { salary, job_title, contact_information, location, id } = job;
  return (
    <div>
      <div className="job-details-component">
        <h2>Job details</h2>
        <hr />
        <p>
          <FontAwesomeIcon className="details-icon" icon={faDollarSign} />{' '}
          <strong>Salary : </strong> {salary} (per year)
        </p>
        <p>
          <FontAwesomeIcon className="details-icon" icon={faCalendar} />{' '}
          <strong>Job Title : </strong> {job_title}
        </p>
        <h2>Contact Information</h2>
        <hr />
        <p>
          <FontAwesomeIcon className="details-icon" icon={faPhone} />{' '}
          <strong>Phone : </strong> {contact_information.phone}
        </p>
        <p>
          <FontAwesomeIcon className="details-icon" icon={faMessage} />{' '}
          <strong>Email : </strong> {contact_information.email}
        </p>
        <p>
          <FontAwesomeIcon className="details-icon" icon={faLocationPin} />{' '}
          <strong>Address : </strong> {location}
        </p>
      </div>
      <button className="btn-apply" onClick={() => JobApplication(id)}>
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;
