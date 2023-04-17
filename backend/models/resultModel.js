import mongoose from "mongoose";

//Creates the scheam for the book database 
const resultsSchema = mongoose.Schema({
  question_no: {
    type: String,
    required: [true, "Please fill in a Question_no"] //validate that they have entered a value 
}, 
  answer:{
    type: String,
    required: [true, "Please fill in a Answer"] //validate that they have entered a value 
},
  user_ID: {
    type: String,
    required: [true, "Please fill in a UserID"] //validate that they have entered a value 
}
})
//Exports the scheama for the book database
export default mongoose.model("Results", resultsSchema)

