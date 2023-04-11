import React, { useState } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import './AppliedJobs.css';
import { getJobFromDb } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
  const appliedJobsFromLocal = getJobFromDb();
  const allJobsFromJson = useLoaderData();
  const appliedJobs = allJobsFromJson.filter(job =>
    appliedJobsFromLocal.includes(job.id)
  );
  const [filterJob, setFilterJob] = useState(appliedJobs);
  const filterFunction = category => {
    const filteredJob = appliedJobs.filter(
      job => job.remote_or_onsite === category
    );
    setFilterJob(filteredJob);
  };

  return (
    <div>
      <PageHeader header={'Applied Jobs'}></PageHeader>
      <div className="body">
        <div className="btn-group">
          <button
            className="btn-applied"
            onClick={() => filterFunction('Remote')}
          >
            Remote jobs
          </button>
          <button
            className="btn-applied"
            onClick={() => filterFunction('Onsite')}
          >
            Onsite Jobs
          </button>
        </div>
        {filterJob.map(appliedJob => (
          <AppliedJob key={appliedJob.id} job={appliedJob}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
