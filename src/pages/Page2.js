import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import FilmsLayout from './FilmsLayout';
import PeopleLayout from './PeopleLayout';
const appUrl = process.env.REACT_APP_APP_URL;

class Page2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            films: [],
            peopleSaved: null,
            filmSaved: null
        }
        this.fetchPeople = this.fetchPeople.bind(this);
        this.fetchFilms = this.fetchFilms.bind(this);
        
    }

    componentWillMount = () => {
        this.fetchFilms();
        this.fetchPeople();
    }

    fetchPeople = () => {
        axios.get(`${appUrl}api/v1/people`)
        .then((response) => {
            this.setState({ people: response.data.data });
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {

        });
    }

    fetchFilms = () => {
        axios.get(`${appUrl}api/v1/films`)
        .then((response) => {
            this.setState({ films: response.data.data });
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {

        });
    }




    render() {
        return (
            <div className="page2 container mt-5">
                <Link to={''} className="btn btn-primary float-right">Go to page 1</Link>
                <div>
                    <PeopleLayout people={this.state.people}  showViewLink={true}/>
                    <FilmsLayout films={ this.state.films }  showViewLink={true}/>
                </div>
            </div>
        )
    }
}

export default Page2;