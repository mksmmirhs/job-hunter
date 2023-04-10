import React, { useState } from 'react';
import './Home.css';
import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
const Home = () => {
  const jobsInitial = useLoaderData();
  const [jobs, setJobs] = useState(jobsInitial.slice(0, 4));
  console.log(jobs);
  const showAllJob = () => {
    setJobs(jobsInitial);
  };
  return (
    <div>
      <Header></Header>
      <Categories></Categories>
      <div className="featured-jobs">
        {jobs.map(job => (
          <FeaturedJobs key={job.id}></FeaturedJobs>
        ))}
      </div>
      <button onClick={showAllJob}>See All Jobs</button>
    </div>
  );
};

export default Home;
