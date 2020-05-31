import React from 'react';
import "../../styles/forum_preview.css"

function ForumPreview({forum}) {
    return (
        <div className="forum-preview">
            {forum.title}

        </div>
    )
}

export default ForumPreview;
