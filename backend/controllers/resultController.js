//import the user scheama from usermodel
import Results from  "../models/resultModel.js";



//get Users from the database
export const getResults = async (req, res) => {
    try {
        const results = await Results.find();
        res.json(results);
    } catch (error) {//if function failed
        res.status(500).json({message: "Cannot access the database"});
    }
}




// get the users info based on the id parameter
export const getResultsById = async (req, res) => {
    try {
        const results = await Results.findById(req.params.id);
        res.json(results);
    } catch (error) {//if the function failed 
        res.status(404).json({message: error.message});
    }
}

//Save and add the users info to the database
export const saveResults = async (req, res) => {
    const results = new Results(req.body);
    try {
        const insertedresults = await results.save();
        res.status(201).json(insertedresults);
    } catch (error) {// if function failed
        res.status(400).json({message: "error inputing values into the database "});
    }
}

//Update the user based on the id of the document
export const updateResults = async (req, res) => {
    try {
        const updatedresults = await Results.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedresults);
    } catch (error) {//if function failed
        res.status(400).json({message: "Cannot update the user with those values"});
    }
}

