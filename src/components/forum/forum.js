import React from 'react';
import "../../styles/forum.css"
import {ForumItem} from "./forum_item"
import {Link} from "react-router-dom";
import ForumSectionPreview from "./forum_section_preview";
import {Redirect} from 'react-router-dom'
import ForumPreview from "./forum_preview";

class Forum extends React.Component {
    render() {
        const name = this.props.match.params.forumName;
        const forums = this.props.location.param1;
        return (
            <div className="forum">
                <table>
                    <th>
                       Topic</th>
                    <th>Author</th>
                    <th>Date</th>

                    {forums && forums.forums.map((forum) => (
                        <tr key={forum.id}>
                            <td>
                                <Link to={{pathname: `/${name}/${forum.forum_id}`, param1: forum}}>
                                    <ForumPreview key={forums.id} forum={forum}/>
                                </Link>
                            </td>
                            <td>{forum.author}</td>
                            <td>{forum.date}</td>

                        </tr>
                    ))}
                    {!forums && <Redirect to='/'/>}

                </table>
            </div>
        )
    }
}

export default Forum;
