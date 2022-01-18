import React from 'react'
import cs from './Post.css'

const Post = (props) => {
    return (
        <div className={cs.Post}>
            <h3>{props.title}</h3>
            <p>{props.author}</p>
        </div>
    )
}

export default Post
