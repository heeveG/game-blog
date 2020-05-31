import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Sidebar from "./base/sidebar";
import Header from "./base/header";
import Subheader from "./base/subheader";
import BlogList from "./forum/list_forum";
import Footer from "./base/footer";
import Forum from "./forum/forum";
import Error404 from "./base/not_found";
import Roulette from "./roulette/roulette";
import About from "./info/about_page";
import '../styles/App.css';
import Login from "./login/login";
import rootReducer from '../reducers/root'
import {Provider} from "react-redux"
import configStore from "../store";
import ForumItem from "./forum/forum_item";

const store = configStore(rootReducer);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>

                <div className="sidebar-margin-left">
                    <Sidebar/>
                </div>
                <div className="sidebar-margin-right">
                    <Header/>
                    <Subheader/>

                    <Switch>
                        <Route exact path="/" component={BlogList}/>
                        <Route exact path="/roulette" component={Roulette}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/:forumName" component={Forum}/>
                        <Route exact path="/:forumName/:forumId" component={ForumItem}/>

                        <Route component={Error404}/>
                    </Switch>

                    <Footer/>

                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
