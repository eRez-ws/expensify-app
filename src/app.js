import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/style.scss'

const ExpenseDashboardPage = () => (
    <div>
        Dashboard
    </div>
)

const AddExpensePage = () => (
    <div>
        create
    </div>
)

const EditExpensePage = () => (
    <div>
        edit
    </div>
)

const HelpExpensePage = () => (
    <div>
        help
    </div>
)

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpExpensePage} />
        </div>
    </BrowserRouter>
)
ReactDOM.render(routes, document.getElementById('app'));