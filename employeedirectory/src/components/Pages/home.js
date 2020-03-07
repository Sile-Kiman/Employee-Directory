import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../Container/index";
import SearchForm from "../EmployeeSearchForm/SearchBar";
import SearchResults from "../Employeesearchresult/EmployeeList";
import Alert from "../Alert/alert";

class Search extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchEmployee("The Matrix");
  }

  searchEmployee = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };


  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
           
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            results={this.state.result}
          />
          <SearchResults results={this.state.result} />
        </Container>
      </div>
    );
  }
}

export default Search;
