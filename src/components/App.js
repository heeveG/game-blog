import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Sidebar from "./sidebar";
import Header from "./header";
import Subheader from "./subheader";
import BlogList from "./list_blogs";
import Footer from "./footer";

import '../styles/App.css';


function App() {
    return (
        <React.Fragment>
            <div className="sidebar-margin-left">
                <Sidebar/>
            </div>
            <div className="sidebar-margin-right">
                <Header/>
                <Subheader/>

                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={BlogList}/>
                        <Route exact path="/roulette" component={BlogList}/>
                    </Switch>
                </BrowserRouter>

                <Footer/>
            </div>
        </React.Fragment>
    );
}

export default App;
