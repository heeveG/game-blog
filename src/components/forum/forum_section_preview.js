import React from 'react';
import "../../styles/forum_section_preview.css"

function ForumSectionPreview({forum}) {
    return (
        <div className="forum-section-preview">


            <div><strong>{forum.title}</strong></div>
            <br/>
            <div>{forum.preview_text}</div>

            <br/>

        </div>
    )
}

export default ForumSectionPreview;
