import React from 'react';
import logo from './logo.svg';
import './App.css';
import results from "./results.json";

function TableRow(props) {
  return (    
  <tr>
    <th scope="row">{props.id}</th>
    <td>{props.nameFirst}</td>
    <td>{props.nameLast}</td>
    <td>{props.location}</td>
  </tr>
  )
}

class App extends React.Component {
  state = {
    results
  };

  render() {
    return (
      <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
      {this.state.results.map(result => (
     <TableRow 
     id={result.id.value}
     nameFirst={result.name.first}
     nameLast={result.name.last}
     location={result.location.city}
     />
      ))}
      </tbody>
    </table>
    );
  }
}

export default App;
