import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './Details.css';
import JobDescription from '../JobDescription/JobDescription';
import JobDetails from '../JobDetails/JobDetails';
import PageHeader from '../PageHeader/PageHeader';
import { toast } from 'react-toastify';
import { addToDb, getJobFromDb } from '../../utilities/fakedb';

const Details = () => {
  const params = useParams();
  const jobId = parseInt(params.id);
  const jobs = useLoaderData();
  const job = jobs.find(job => job.id === jobId);
  const JobApplication = id => {
    const jobsInDb = getJobFromDb();
    const isExist = jobsInDb.find(job => job === id);
    if (!isExist) {
      addToDb(id);
      toast('Successfully Applied!');
    } else {
      toast('You have already applied!');
    }
  };
  return (
    <div>
      <PageHeader header={'Job Details'}></PageHeader>
      <div className="body details-body">
        <JobDescription job={job}></JobDescription>
        <JobDetails job={job} JobApplication={JobApplication}></JobDetails>
      </div>
    </div>
  );
};

export default Details;
