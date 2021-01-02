import React, { Component } from 'react'
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends Component {

  constructor(props){
    super(props);
    this.state= {}
   // console.log("This is my initializer");

  //   const movies = [
  //     {id: 0, poster_src:"https://image.tmdb.org/t/p/w94_and_h141_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg", title: "Avengers 1", overview: "This is a war movie"},
  //     {id: 1, poster_src:"https://image.tmdb.org/t/p/w94_and_h141_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg",title: "Avengers 2", overview: "This is a horror movie"}
  //   ]

  // var movieRows = []
  // movies.forEach((movie) => {
  //   console.log(movie.title)
  //   const movieRow = < MovieRow movie={movie}/>
  //   movieRows.push(movieRow)
  // })

  // this.state = { rows: movieRows}

  this.performSearch("home alone")

  }

  performSearch(searchTerm){
    console.log("Perform search using movie db")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=e4b3e22ec2b42c496bb2127725b996ad&query="+searchTerm
    $.ajax({
        url: urlString,
        success: (searchResults) => {
          console.log("Data fetch success")
         // console.log(searchResults)
          const results = searchResults.results
          //console.log(results[0])

          var movieRows = []

          results.forEach((movie) => {
            movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
            console.log(movie.title)
            const movieRow = <MovieRow key={movie.id} movie={movie}/>
            movieRows.push(movieRow)
          })

          this.setState({rows: movieRows})
        },
        error: (xhr, status, error) => {
            console.error("Failed to fetch data")
        }
    })
  }

  searchChangeHandler(event){
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render(){
  return (
    <div>

      <table className="titlecolor"> 
        <tbody>
          <tr>
            <td>
              <img alt="app icon" width="50" src="movies-app.svg"/>
            </td>
            <td width="8"/>
            <td>
              <h1>Movies List</h1> 
            </td>
          </tr>
        </tbody>
      </table>

      <input style={{
        fontSize: 20,
        display: 'block',
        width: '99%',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16
      }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter Movie Name"/>  

      {this.state.rows}

    </div>
  );
}
}

export default App;
