import React from 'react';

class MovieRow extends React.Component{

    viewMovie(){
        const urlMovie = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href=urlMovie
    }
    render(){
        return <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="100" src={this.props.movie.poster_src}/>
            </td>
            <td>
              <h2>{this.props.movie.title}</h2>
              <p>{this.props.movie.overview}</p>
              <p><b>Release date:</b> {this.props.movie.release_date}</p>
              <p><b>User Rating: </b>{this.props.movie.vote_average}</p>
              <input class="button" type="button" onClick={this.viewMovie.bind(this)} value="view"/>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow;