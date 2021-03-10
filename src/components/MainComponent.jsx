import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import { Nav,NavDropdown,Button } from 'react-bootstrap';
import "./MainComponent.css";
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./AboutUs.css";
import { Link } from "react-router-dom"; 

const fetchMovies = "https://api.themoviedb.org/3/movie/popular?api_key=3b3b5921e61fbc17bc91da5cf114c845&language=en-US&page=1";
const baseURL = "http://image.tmdb.org/t/p/w500";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {          
            genres : "",
            data: "",
            movieName: "",
            imdb_score: "",
            movies: []
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleHiClick = this.handleHiClick.bind(this);
        this.handleChangeIMDB = this.handleChangeIMDB.bind(this);
        this.handleChangeGenre = this.handleChangeGenre.bind(this);
    }
    //sending movie genre & movie rating using fetch to backend & returns response which is movieName
    handleHiClick() {
        fetch('https://movieroulette-1.herokuapp.com/selectmovie',{
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

    }
    //iterating movies using foreach loop & map function with movie object to display mvi images from an api
    componentDidMount() {
        fetch(fetchMovies)
            .then(response => response.json())
            .then((data) => {
                let movies = data.results;
                movies.map((movie) => { 
                    movie.poster_path = baseURL + movie.poster_path;
                    return movie; 
                }) 
                this.setState({ movies: movies, isLoading: false })
            })
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
        //using map function iterate movies & sending them to a constant
        const myList = this.state.movies.map((mvi, index) => {
            return (
                //using card layout for displaying movies in a row
                <Card key={index} className="card-container">
                    <CardImg src={mvi.poster_path} alt={mvi.title} />
                    <CardBody>
                        <CardTitle> {mvi.title}</CardTitle>
                        <CardSubtitle><b>Ratings :</b> {mvi.vote_average}</CardSubtitle>
                    </CardBody>
                </Card>
            )
        })
        // Navigating to about, contact pages using navlink which would be redirected from app.js router
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="main-container">
                    <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Movie Roulette</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/AboutUs">About Us</Nav.Link>
                        <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
                        </Nav>
                        <input id="search" type="text" placeholder="Search" className="mr-sm-2" />
                    </Navbar.Collapse>
                    </Navbar>
                    <div className="content">
                    {this.state.data}
                    <div className="dropdowns">
                        <div className="IMDBRating">
                            <label className="mvi" id="mvidropdown">Movie Ratings </label>
                            <select className="dropdownoptions" value={this.state.imdb_score} onChange={this.handleChangeIMDB}>
                                <option value="<7">less than 7</option>
                                <option value="7< - <8">7-8</option>
                                <option value="8< - <9">8-9</option>
                                <option value="9< - <10">9-10</option>
                            </select>
                        </div>
                        <div className="Genre" >
                            <label className="genre" id="genredropdown">  Movie Genre </label>
                            <select className="dropdownoptions" value={this.state.genres} onChange={this.handleChangeGenre}>
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
                        <div className="spinresult">
                            <button className="spin" onClick={this.handleHiClick}>Spin</button>
                            <div className="result">{this.state.movieName}</div>
                        </div>
                        </div>
                        <h3>Popular Movies</h3>
                        {/* using mylist object to display movies*/}
                        <div className="card-list-container">
                            {myList}
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Main;
