import React from 'react';
import "../styles/list_blogs.css"
import BlogPreview from "./blog_preview"

export default class BlogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [
                {
                    id: 1,
                    title: "First Blog",
                    preview_text: "cool blog"

                },
                {
                    id: 2,
                    title: "Second Blog",
                    preview_text: "cool blog"

                },
                {
                    id: 3,
                    title: "Third Blog",
                    preview_text: "cool blog"
                }
            ]
        }
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