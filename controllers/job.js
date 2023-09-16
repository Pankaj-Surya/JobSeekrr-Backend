import Job from '../models/Job.js';

//1. Add Video
export const addJob =async (req,res,next)=>{
    const newJob = new Job({...req.body})
    try {
    const savedJob =  await newJob.save();
     return res.status(200).json(newJob)
    } catch (error) {
    throw(error)
  }
}

//2. Get All Jobs
export const getAllJob = async (req,res,next)=>{
    try {
      const jobs = await Job.find();
      res.status(200).json(jobs)
    } catch (error) {
      next(error);
    }
}

//3. Get Job By Id
export const getJobById = async (req,res,next)=>{
  try {
    const job = await Job.findById(req.params.jobId);
    // console.log(job)
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (error) {
    next(error);
  }
}

