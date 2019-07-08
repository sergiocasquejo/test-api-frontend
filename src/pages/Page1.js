import React from 'react';
import {Button, Form, ButtonToolbar} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import FilmsLayout from './FilmsLayout';
import PeopleLayout from './PeopleLayout';
import axios from 'axios';

const baseApiUrl = process.env.REACT_APP_BASE_API_URL;
const appUrl = process.env.REACT_APP_APP_URL;

class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pullPeopleFetching: false,
            pullFilmsFetching: false,
            savingData: false,
            apiPeople: '',
            apiFilms: '',
            people: [],
            films: [],
            peopleSaved: null,
            filmSaved: null
        }
        this.handlePullPeople = this.pullPeople.bind(this);
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
            console.log(response.data.data);
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

    pullPeople = () => {
        this.setState({ pullPeopleFetching: true });
        axios.get(`${baseApiUrl}people/`)
            .then((response) => {
                console.log(response);
                this.setState({ apiPeople: JSON.stringify(response.data.results) });
                
            })
            .catch((error) => {
                console.log(error);
            }).finally(() => {
                this.setState({ pullPeopleFetching: false });
            });
    }

    handlePullFilms = () => {
        this.setState({ pullFilmsFetching: true });
        axios.get(`${baseApiUrl}films/`)
            .then((response) => {
                console.log(response);
                this.setState({ apiFilms: JSON.stringify(response.data.results) });
                
            })
            .catch((error) => {
                console.log(error);
            }).finally(() => {
                this.setState({ pullFilmsFetching: false });
            });
    }

    handleSaveData = () => {
        this.setState({ savingData: true });
        if (this.state.apiPeople) {
            axios.post(`${appUrl}api/v1/people`, {
                    data: this.state.apiPeople
                })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    this.fetchPeople();
                });
        }

        if (this.state.apiFilms) {

        axios.post(`${appUrl}api/v1/films`, {
                data: this.state.apiFilms
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                this.fetchFilms();
            });
        }
    }




    render() {
        return (
            <div className="page1 container">
                
                <Form>
                    <ButtonToolbar  className="justify-content-center">
                        <Button className="m-2" onClick={this.handlePullPeople} id="btnPullPeople" variant="primary">{ this.state.pullPeopleFetching ? 'Fetching...' : 'Pull People/Characters' }</Button>
                        <Button className="m-2" onClick={this.handlePullFilms} id="btnPullFilms" variant="warning">{this.state.pullFilmsFetching ? 'Fetching' : 'Pull Films'}</Button>
                        <Button className="m-2" onClick={this.handleSaveData} id="btnSaveData" variant="success" disabled={ !this.state.apiPeople && !this.state.apiFilms }>Save Data</Button>
                    </ButtonToolbar>
                </Form>
                    <Link to={'/page2'} className="btn btn-primary float-right">Go to page 2</Link>
                
                
                <div>
                    {
                        this.state.apiPeople  && 
                        <pre>
                            <h2>People</h2>
                            { this.state.apiPeople }
                        </pre>
                    }
                    {
                        this.state.apiFilms && 
                        <pre>
                            <h2>Films</h2>
                            { this.state.apiFilms }
                        </pre>
                    }
                </div>
                <div>
                    <PeopleLayout people={this.state.people} showViewLink={false}/>
                    <FilmsLayout films={ this.state.films } showViewLink={false} />
                </div>
            </div>
        )
    }
}

export default Page1;