import React from 'react';
import "../styles/blog_preview.css"


function BlogPreview({blog}) {
    return (
        <div className="blog-preview">

            <div><strong>{blog.title}</strong></div>
            <br/>
            <div>{blog.preview_text}</div>
            <br/>
        </div>
    )
}

export default BlogPreview;
