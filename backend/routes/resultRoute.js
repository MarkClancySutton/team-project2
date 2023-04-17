import express from "express";
import { //import all the functions from the user controller 
    getResults, 
    getResultsById,
    saveResults,
    updateResults,
   
    
} from "../controllers/resultController.js";

//set up the router to be able to configure the routes for the functions
const router = express.Router();

//Set up the routes for the functions relating to user 
//Use post to send data, get to recieve data, patch to change data and delete to delete the data
router.get('/results', getResults);
router.get('/results/:id', getResultsById);
router.post('/results', saveResults);
router.patch('/resutls/:question_no', updateResults);


//export all the routes 
export default router;