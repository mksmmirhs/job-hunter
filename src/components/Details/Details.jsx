import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './Details.css';

const Details = () => {
  const params = useParams();
  const jobId = parseInt(params.id);
  const jobs = useLoaderData();
  const job = jobs.find(job => job.id === jobId);
  console.log(job);
  return (
    <div>
      <h1>Details page</h1>
    </div>
  );
};

export default Details;
