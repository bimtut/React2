import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
//import components
import logo from './logo.svg';
import Nav from './components/testNavbar'
import About from './components/testAbout'
import Profile from './components/testProfile'
import Search from './components/searchBar'
import BookList from './components/bookList'
import Navbar from "./components/navbar";
import Add from './components/addButton'
// import Examples from './components/modal'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  //constructor belum terpakai di case ini (11.20)
  // constructor () {
  //   super ();
  //   this.state = {
  //     name: 'Arkademy',
  //     counter: 0,
  //   };
  // }
  render () {
    // jsx expression {}
    return (
      <div>
        {/* <p>Hello {this.state.name}!</p>
        <Greeting name={trainerName} />
        <p>Counter = {this.state.counter}</p>
        <Counter value={this.state.counter} />
        <button
          onClick={() => {
            let name = this.state.name, counter = this.state.counter;
            this.setState ({
              name: name + ' Hebat',
              counter: counter + 1,
            });
          }}
        >
          <p>Ganti nama dan counter</p>
        </button> */}
        {/* <logo /> */}
        <Router>
          {/* <Nav /> */}
          {/* <Route path={'/about'} component={About} />
          <Route path={'/profile'} component={Profile} /> */}
          <Navbar />
          {/* <Examples /> */}
          <Search />
          <Add />
          <BookList />
        </Router>
      </div>
    );
  }
}

export default App;
