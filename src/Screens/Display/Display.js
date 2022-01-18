import React, { useEffect, useState } from 'react'
import cs from './Display.css'
import { useParams } from 'react-router'
import { findPost} from '../../dummy'

const Display = () => {

    const postId = useParams().postId

    const [post, setpost] = useState(null)

    useEffect(() => {
        console.log('did update here');
        setpost(findPost(postId));
    }, [postId])

    let displayMessage = <h2>Please select a post to see the Full Post</h2>

    if (post){
        displayMessage = (
            <div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <button>delete</button>
            </div>
        )
    }

    return (
        <div className={cs.Display}>
            {displayMessage}
        </div>
    )
}

export default Display
