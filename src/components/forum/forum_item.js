import React from 'react';
import "../../styles/forum_item.css"
import {Redirect} from "react-router-dom";


class ForumItem extends React.Component {

    render() {
        const name = this.props.match.params.forumName;
        const forums = this.props.location.param1;
        return (
            <div className="forum-item">
                <strong>{forums && forums.title}</strong>
                <div className="author">
                    {forums && forums.author}
                </div>
                <hr/>
                <br/>
                <div>
                    {forums && forums.text}
                </div>
                <br/>
                <hr/>
                {forums && forums.date}
                {!forums && <Redirect to='/'/>}
            </div>
        )
    }
}

export default ForumItem;
