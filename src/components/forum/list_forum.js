import React from 'react';
import "../../styles/list_forums.css"
import ForumSectionPreview from "./forum_section_preview"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {connect} from "react-redux"
import {setDOTA, setCSGO} from "../../actions/creators";
import {Link} from "react-router-dom";


class ForumList extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

        fetch('/csgo')
            .then(resp => {
                return resp.json();
            })
            .then(body => {
                this.props.setAll(setCSGO, body);
            })

        fetch('/dota')
            .then(resp => {
                return resp.json();
            })
            .then(body => {
                this.props.setAll(setDOTA, body);
            })

    }


    render() {
        return (
            <div className="list-forums">
                <div className="csgo-forums">
                    <div className="forum-logo"> Counter-Strike Forums</div>
                    <hr/>
                    {this.props.csgo && this.props.csgo.map((forum) => (
                        <div key={forum.id}>
                            <Link to={{pathname: `/${forum.name}`, param1: forum}} >
                                <ForumSectionPreview key={forum.id} forum={forum}/>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="dota2-forums">
                    <div className="forum-logo"> Dota Forums</div>
                    <hr/>

                    {this.props.dota && this.props.dota.map((forum) => (
                        <div key={forum.id}>
                            <Link to={{pathname: `/${forum.name}`, param1: forum}}>
                                <ForumSectionPreview key={forum.id} forum={forum}/>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        csgo: state.csgo,
        dota: state.dota
    }
};

const mapDispatchToProps = (dispatch) => (
    {
        setAll: (func, forum) => {
            dispatch(func(forum));
        }
    });


export default connect(mapStateToProps, mapDispatchToProps)(ForumList)