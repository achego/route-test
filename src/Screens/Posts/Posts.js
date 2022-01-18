import React from 'react'
import Post from './Post/Post'
import ind from '../../index.css'
import cs from './Posts.css'
import posts from '../../dummy'
import { useEffect, useState} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useHref } from 'react-router'

const Posts = (props) => {

    const route = useHref('')
    console.log(route);

    const [myPosts, setmyPosts] = useState([])
    useEffect(() => {
        const updatedPosts = posts.map(post => (
            <NavLink
                to={route + '/' + post.id}
                key={post.id}>
                <Post 
                    title={post.title}
                    author={post.author}/>
            </NavLink>
        ))

        setmyPosts(updatedPosts)
    }, [])

    return (
        <div className={ind.container}>
            <div className={cs.Posts}>
                {myPosts}
            </div>
            <Outlet />
        </div>
    )
}

export default Posts
