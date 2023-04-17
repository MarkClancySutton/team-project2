

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Navigate } from "react-router-dom";
 

 const ResultsList = () => {
  const [results, setResults] = useState([]);
 
  useEffect(() => {
    getResults();
  }, []);
 
  const getResults = async () => {
    const response = await axios.get("http://localhost:3000/results");
    setResults(response.data); 
  };
 
  const deleteResults = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getResults();
    } catch (error) {
      console.log(error);
    }
  };
  
 
  return (
    <>
    
    
    <div className="columns mt-5">
      <div className="column is-half">
      <div className="Home">
        <h1>Results:</h1><br/>
        
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Question_no</th>
              <th>Answer</th>
              <th>user_ID</th>
              
              
            </tr>
          </thead>
          <tbody>
            {results.map((results, index) => (
              <tr key={results._id}>
                <td>{index + 1}</td>
                <td>{results.question_no}</td>
                <td>{results.answer}</td>
                <td>{results.user_ID}</td>
                
                
              </tr>
            ))}
          </tbody>
        </table>
       
      </div>
    </div>
    
    </div>
    </>
  );
  
};

export default ResultsList;


