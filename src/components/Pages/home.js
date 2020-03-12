import React, { Component } from "react";
import Data from "../../utils/API.json";
import Container from "../Container/index";
import SearchForm from "../EmployeeSearchForm/SearchBar";
import SearchResults from "../Employeesearchresult/EmployeeList";
import Alert from "../Alert/alert";


class Search extends Component {
 
  //Sete-up the original state when the page loads
  state = {
    search: "",
    results: [],
    currentSort: "default"
  };
  // When this component mounts, search for randome Employees API and populated their info
  componentDidMount() {
    this.setState({ results: Data })
     
  }

  handleInputChange = event => {
    const value = event.target.value.toLowerCase();
    if (value !== "") {
      const filteredArr = Data.filter(result => {
       return result.name.includes(value)|| result.date.includes(value)
       || result.email.includes(value) || result.phone.includes(value)
      })
        
       this.setState({ results: filteredArr })
        
    }
  };


  onSortChange = () => {
    const { currentSort } = this.state;
    let nextSort;

    if (currentSort === 'down'){
      nextSort = 'up'
    } else if (currentSort === 'up') {
      nextSort = 'default'
    } else if (currentSort === 'default') {
      nextSort = 'down'
    }
    
    this.setState({
      currentSort: nextSort
    })
  }

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>

          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 :0, marginBottom: 10 }}
          >Please enter a search
          </Alert>
          <SearchForm
            handleInputChange={this.handleInputChange}
            results={this.state.results}
            singleSearch={this.state.singleSearch}
 
          />
          <SearchResults
            results={this.state.results}
            onSortChange={this.onSortChange}
            currentSort={this.state.currentSort}
            handleInputChange={this.handleInputChange}
          />
        </Container>
      </div>
    );
  }
}

export default Search;