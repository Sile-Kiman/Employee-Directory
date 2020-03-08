import React from "react";
import "./style.css";


function SearchResults(props) {
  return (
     
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col-2">Image</th>
          <th scope="col-2">Name</th>
          <th scope="col-2">Phone</th>
          <th scope="col-2">Email</th>
          <th scope="col-2">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => (
          <tr className="table table-striped" key={result.id}>
            <td><img alt={result.title} className="img-fluid" src={result.image} /></td>
            <td>{result.name}</td>
            <td>{result.phone}</td>
            <td>{result.email}</td>
            <td>{result.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default SearchResults;
