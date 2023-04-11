import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './Details.css';
import JobDescription from '../JobDescription/JobDescription';
import JobDetails from '../JobDetails/JobDetails';

const Details = () => {
  const params = useParams();
  const jobId = parseInt(params.id);
  const jobs = useLoaderData();
  const job = jobs.find(job => job.id === jobId);
  return (
    <div>
      <div className="bg-home">
        <h1 className="details-header">Job Details</h1>
      </div>
      <div className="details-body">
        <JobDescription job={job}></JobDescription>
        <JobDetails job={job}></JobDetails>
      </div>
    </div>
  );
};

export default Details;
