import React, { Component } from "react";
// import Employees from "../../utils/API";
import Container from "../Container/index";
import SearchForm from "../EmployeeSearchForm/SearchBar";
import SearchResults from "../Employeesearchresult/EmployeeList";
import Alert from "../Alert/alert";

const Employees=[
    
  {
   id: 1, 
   name: "Sadie Wang",
   email: "sadie.wang@example.com",
   date: "12/12/1980",
   phone: "(404)-301-2091",
   image: "https://randomuser.me/api/portraits/thumb/women/90.jpg",
  },

  { 
    id: 2,
    name: "Hulda Wiemann",
    email: "hulda.w@example.com",
    date: "09/12/1990",
    phone: "(704)-901-2091",
    image: 'https://randomuser.me/api/portraits/thumb/women/63.jpg',
   },  

   { 
    id: 3,
    name: "Barn, Hull",
    email: "barn.hull@example.com",
    date: "09/12/1890",
    phone: "(704)-901-8787",
    image: 'https://randomuser.me/api/portraits/thumb/men/84.jpg',
   }, 
   { 
    id: 4,
    name: "Mark Joe",
    email: "mark.joe@example.com",
    date: "12/02/2000",
    phone: "(704)-701-2091",
    image: 'https://randomuser.me/api/portraits/thumb/women/50.jpg',
   },  
   { 
    id: 5,
    name: "Elizabeth, Rio",
    email: "eliz.rio@example.com",
    date: "10/12/1980",
    phone: "(718)-701-2091",
    image: 'https://randomuser.me/api/portraits/thumb/women/63.jpg',
   }, 
   { 
    id: 6,
    name: "Hulda Wiemann",
    email: "hulda.w@example.com",
    date: "09/12/1990",
    phone: "(704)-901-7878",
    image: 'https://randomuser.me/api/portraits/thumb/men/25.jpg',
   },  
   { 
    id: 7,
    name: "Bob Bobby",
    email: "bb@example.com",
    date: "01/12/1977",
    phone: "(404)-901-2091",
    image: 'https://randomuser.me/api/portraits/thumb/women/31.jpg',
   },
   { 
    id: 8,
    name: "Rachel Madow",
    email: "rachelmadow@example.com",
    date: "09/12/1980",
    phone: "(704)-901-5678",
    image: 'https://randomuser.me/api/portraits/thumb/men/59.jpg',
   }, 
   { 
    id: 9,
    name: "Hulda Wiemann",
    email: "hulda.w@example.com",
    date: "09/12/1990",
    phone: "(704)-901-2091",
    image: 'https://randomuser.me/api/portraits/thumb/women/63.jpg',
   },  
   { 
    id: 10,
    name: "Hulda Wiemann",
    email: "hulda.w@example.com",
    date: "09/12/1990",
    phone: "(704)-901-2091",
    image: 'https://randomuser.me/api/portraits/thumb/women/63.jpg',
   },  
   { 
    id: 11,
    name: "Hulda Wiemann",
    email: "hulda.w@example.com",
    date: "04/12/19780",
    phone: "(980)-901-2091",
    image: 'https://randomuser.me/api/portraits/thumb/women/42.jpg',
   }  
]
  class Search extends Component {
    //Sete-up the original state when the page loads
      state = {
        search: "",
        results: []
      };
  // When this component mounts, search for randome Employees API and populated their info
  componentDidMount() {
    // API.search()
    //   .then(res => this.setState({ results: res.data }))
    //   .catch(err => console.log(err));
    this.setState({ results: Employees})
     
  }
  
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
           
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            Please enter a search 
          </Alert>
          <SearchForm
            handleInputChange={this.handleInputChange}
            results={this.state.results}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
