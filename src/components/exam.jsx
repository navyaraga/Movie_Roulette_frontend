import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import { Nav,NavDropdown,Button } from 'react-bootstrap';
import "./MainComponent.css"

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {          
            genres : "",
            data: "",
            movieName: "",
            imdb_score: "",
            errorMessage: "nav"
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleHiClick = this.handleHiClick.bind(this);
        this.handleChangeIMDB = this.handleChangeIMDB.bind(this);
        this.handleChangeGenre = this.handleChangeGenre.bind(this);
    }

    handleHiClick() {
        fetch('http://localhost:5000/selectmovie',{
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(
                {
                    genres: this.state.genres,	
                    imdb_score: this.state.imdb_score
                }
            )
        })
        .then(response => response.json())
        .then(data => this.setState({
            movieName: data.movie_title}))
        .catch(err => {console.log(err)})
    }

    handleInputChange(event) {
        this.setState({
            data: event.target.value
        })
    }
    handleChangeIMDB(event){
        this.setState({
            imdb_score: event.target.value
        })
    }
    handleChangeGenre(event){
        this.setState({
            genres: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="main-container">
                    <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Movie Roulette</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#aboutus">About Us</Nav.Link>
                        <Nav.Link href="#contactus">Contact Us</Nav.Link>
                        </Nav>
                        <Button variant="dark">Search</Button>
                    </Navbar.Collapse>
                    </Navbar>
                    <div className="content">
                    {this.state.data}
                    <div className="dropdowns">
                        <div className="IMDBRating">
                            <label className="genre">Movie Ratings </label>
                            <select className="movie" value={this.state.imdb_score} onChange={this.handleChangeIMDB}>
                                <option value="<7">less than 7</option>
                                <option value="7< - <8">7-8</option>
                                <option value="8< - <9">8-9</option>
                                <option value="9< - <10">9-10</option>
                            </select>
                        </div>
                    <div className="Genre">
                        <label className="genre"> Genre </label>
                        <select className="movie" value={this.state.genres} onChange={this.handleChangeGenre}>
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Children">Children</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Crime">Crime</option>
                            <option value="Documentary">Documentary</option>
                            <option value="Drama">Drama</option>
                            <option value="Family">Family</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Horror">Horror</option>
                            <option value="Musical">Musical</option>
                            <option value="Mystery">Mystery</option>
                            <option value="Romance">Romance</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Thriller">Thriller</option>
                            <option value="War">War</option>
                            <option value="Western">Western</option>
                        </select>
                    </div>
                    <button className="spin" onClick={this.handleHiClick}>  Spin  </button>
                    <div className="result">{this.state.movieName}</div>
                    {/* { this.state.errorMessage &&
  <h3 className="error"> { this.state.errorMessage } </h3> } */}
                    </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Main;
