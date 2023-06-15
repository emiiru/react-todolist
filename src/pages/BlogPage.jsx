import React, { useState,useEffect } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'

export default function BlogPage() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchPost = async () => {
        try {
          const responsePost = await axios.get('https://jsonplaceholder.typicode.com/posts');
          setPosts(responsePost.data);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
      
    useEffect(() => {
        fetchPost().then(() => setLoading(false));
    }, [])
  return (
    <>
    <div className="container">
        {
        loading ? <div>Data Is Loading</div> : 
        <div>
            <NavBar className="mb-5" />
        <div className="row">
            <div className="col-md-12">
                <h1 className='text-center'>Blogs</h1>
                {
                    posts.map((post, index) =>
                        <div key={index}>
                            <h3>#{index+1}. {post.title}</h3>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                    )
                }
            </div>
        </div>
        </div>
        }
        
    </div>
</>
  )
}
