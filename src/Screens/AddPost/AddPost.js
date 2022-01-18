import React from 'react'
import cs from './AddPost.css'
import ind from '../../index.css'
import { useNavigate } from 'react-router'

const AddPost = () => {

    const navigate = useNavigate()
    
    const changePage = () => {
        navigate('/posts', {replace: true})

    }

    return (
        <div className={[cs.AddPost, ind.container].join(' ')}>
            <div>
                <h2>Add a Post</h2>
                <h4>Title</h4>
                <input/>
                <h4>Content</h4>
                <textarea/>
                <h4>Author</h4>
                <button
                    onClick={changePage}>Add Post</button>
            </div>
        </div>
    )
}

export default AddPost
