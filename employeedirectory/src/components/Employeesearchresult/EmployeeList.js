import React from "react";
import "./style.css";


function SearchResults(props) {
  console.log('props', props)
  const sortTypes = {
    up: {
      class: 'sort-up',
      fn: (a, b) => {
        if(a.name > b.name){
          return 1
        }
        if(a.name < b.name){
          return -1
        }
        return 0
      }
    },
    down: {
      class: 'sort-down',
      fn: (a, b) => {
        if(a.name > b.name){
          return -1
        }
        if(a.name < b.name){
          return 1
        }
        return 0

      }
    },
    default: {
      class: 'sort',
      fn: (a, b) => a
    }
  };

  return (
    
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col-2">Image</th>
          <th scope="col-2">Name
          <button onClick={props.onSortChange}>
									<i className={`fas fa-${sortTypes[props.currentSort].class }`} />
								</button>
            </th>
          <th scope="col-2">Phone</th>
          <th scope="col-2">Email</th>
          <th scope="col-2">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.results.sort(sortTypes[props.currentSort].fn).map(result => (
          <tr className="table table-striped" key={result.id}>
            <td><img alt={result.name} className="img-fluid" src={result.image} /></td>
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
