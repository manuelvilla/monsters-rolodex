import React, {Component, useState, useEffect} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => { //arrow functions helps binding context and scope
     this.setState({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (<div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder='Search monsters'
        onChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>);
  }
}

/*function App(){

  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchData () {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      res
        .json()
        .then(res => setMonsters(res));
    }
    fetchData();
  });

  const filteredMonsters = monsters.filter (monster =>
    monster.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleChange(e){
    setSearch(e.target.value)
  }

  return(
    <div className='App'>
      <SearchBox
        placeholder='Search monsters'
        onChange={handleChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}*/

export default App;
