import React, { useState } from 'react';
import './Home.css';
import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
const Home = () => {
  const jobsInitial = useLoaderData();
  const [jobs, setJobs] = useState(jobsInitial.slice(0, 4));
  const showAllJob = () => {
    setJobs(jobsInitial);
  };
  return (
    <div>
      <Header></Header>
      <Categories></Categories>
      <div className="featured-jobs">
        <h1>Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="job-display">
          {jobs.map(job => (
            <FeaturedJobs key={job.id} job={job}></FeaturedJobs>
          ))}
        </div>
        <button className="btn-common" onClick={showAllJob}>
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default Home;
