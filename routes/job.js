import express from "express";
import {addJob,getAllJob, getJobById} from "../controllers/job.js"

const router= express.Router()

router.post('/addJob',addJob)
router.get('/allJob',getAllJob)
router.get('/find/:jobId',getJobById)
export default router