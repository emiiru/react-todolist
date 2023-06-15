import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Loader from '../components/Loader'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";

export default function Blog() {
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const id = params.id;
  const fetchPost = async () => {
    try {
      const responsePost = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
      setPost(responsePost.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPost().then(() => setLoading(false));
  }, [])
  return (
    <>
      {loading ? <Loader /> :
        <div className="container">
          <div>
            <NavBar className="mb-5" />
            <div className="row mt-5">
              <div className="col-md-12">
                <h3 className='text-center'>{post.title}</h3>
                <div>
                  <p>{post.body}</p>
                  <hr />
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <Link to={'/blogs/'} className='nav-link pull-right' aria-current='page'><h3>Back</h3></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

    </>
  )
}
