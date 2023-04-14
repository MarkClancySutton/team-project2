import mongoose from "mongoose";

//Creates the user scheama for the database
const resultsSchema = mongoose.Schema({
    question_no: {
        type: String,
        required: [true, "Please fill in a name"] //validate that they have entered a value 
    },
    answer: {
        type: String,
        required: [true, "Please fill in a name"] //validate that they have entered a value 
        
    },
    user_ID: {
        type: String,
        required: [true, "Please fill in a name"] //validate that they have entered a value 
        
    }
  

}, {
    timestamps: true
});


//export the scheama
export default  mongoose.model("Results", resultsSchema)
