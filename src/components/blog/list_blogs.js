import React from 'react';
import "../../styles/list_blogs.css"
import BlogPreview from "./blog_preview"
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default class BlogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
        }
    }

    componentDidMount() {

        fetch('/blogs')
            .then(resp => {
                return resp.json();
            })
            .then(body => {
                this.setState({
                    blogs: body
                })
            })

    }

    render() {


        return (
            <div className="list-blogs">

                {this.state.blogs.map((blog) => (
                    <div key={blog.id}>
                        <BlogPreview key={blog.id} blog={blog}/>
                    </div>
                ))}
            </div>
        )
    }

}