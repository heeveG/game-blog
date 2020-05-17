import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Sidebar from "./base/sidebar";
import Header from "./base/header";
import Subheader from "./base/subheader";
import BlogList from "./blog/list_blogs";
import Footer from "./base/footer";
import Blog from "./blog/blog";
import Error404 from "./base/not_found";
import Roulette from "./roulette/roulette";
import About from "./info/about_page";
import Contact from "./info/contact_page";
import '../styles/App.css';
import Login from "./login/login";


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
                        <Route exact path="/blog" component={BlogList}/>
                        <Route exact path="/roulette" component={Roulette}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/login" component={Login}/>

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
