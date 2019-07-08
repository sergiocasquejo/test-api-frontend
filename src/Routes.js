import React, { Component } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import FilmDetailsPage from './pages/FilmDetailsPage';
import PeopleDetailsPage from './pages/PeopleDetailsPage';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
class Routes extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Router history={history}>
                <React.Fragment>
	                <Route exact path="/" component={Page1} />
					<Route exact path="/page2" component={Page2} />
                    <Route exact path="/page2/films/:id" component={FilmDetailsPage} />
                    <Route exact path="/page2/people/:id" component={PeopleDetailsPage} />
                </React.Fragment>
            </Router>
        )
    }
}

export default Routes;