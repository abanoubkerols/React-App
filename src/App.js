
import './App.css';
// import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () => {

  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [fiterMonsters, setFilterMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setMonsters(res))
  }, [])


  useEffect(() => {
    const filtered = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilterMonsters(filtered)
  }, [monsters, searchField])


  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }



  return (
    <div className="App" >
      <h1 className='app-title'> Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className=' monsters-search-box '
      />
      <CardList monsters={fiterMonsters} />
    </div >
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }

//   }


//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(res => this.setState(() => {
//         return { monsters: res }
//       }
//       ))
//   }

//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase()
//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render() {
//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this

//     const filtered = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })

//     return (
//       // <div className="App">
//       //   <h1 className='app-title'> Monsters Rolodex</h1>
//       //   <SearchBox
//       //     onChangeHandler={onSearchChange}
//       //     placeholder='search monsters'
//       //     className=' monsters-search-box '
//       //   />
//       //   <CardList monsters={filtered} />
//       // </div>
//     );
//   }
// }

export default App;


