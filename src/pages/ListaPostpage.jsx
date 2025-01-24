import { useState,useEffect } from "react";
import axios from "axios";

const ListaDeiPost = () => {

  const defaultPost = {
    title: ``,
    content:``,
    image:``,
    tags: []
  }

  const baseApiUrl = "http://localhost:3000"

  const [posts, setPosts] = useState ([]);

  const fetchPosts = () => {
    axios.get(`${baseApiUrl}/posts`)
      .then(res => {
        console.log(res.data);
        setPosts(res.data)
      })
      .catch(error => {
        console.error('Errore durante il caricamento dei post:', error)
      })
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  
  
  
  return(
    <>
    <div className="row">
      {posts.map((post) => (
        <div className="col-md-4 mb-4" key={post.id}>
          <div className="card">
            <img src={post.image} className="card-img-top" alt={post.title} />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">
                {post.tags.map((tag, index) => (
                  <span key={index} className="badge bg-primary me-1">
                    {tag}
                  </span>
                ))}
              </p>
              <button className="btn btn-danger" onClick={() => handleDeletePost(post.title)}>
                  Delete
                </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    </>

        
  )
}

export default ListaDeiPost