import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Sidebar from "./sidebar";
import Header from "./header";
import Subheader from "./subheader";
import BlogList from "./list_blogs";
import Footer from "./footer";
import Blog from "./blog";
import Error404 from "./not_found";
import Roulette from "./roulette";

import '../styles/App.css';


function App() {
    return (
        <React.Fragment>
            <BrowserRouter>

                <div className="sidebar-margin-left">
                    <Sidebar/>
                </div>
                <div className="sidebar-margin-right">
                    <Header/>
                    <Subheader/>

                    <Switch>
                        <Route exact path="/" component={BlogList}/>
                        <Route exact path="/blog" component={Blog}/>
                        <Route exact path="/roulette" component={Roulette}/>

                        <Route component={Error404}/>
                        {/*    will add more as project grows     */}
                    </Switch>

                    <Footer/>

                </div>
            </BrowserRouter>

        </React.Fragment>
    );
}

export default App;
