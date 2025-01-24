import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"



function DettaglioPostpage() {

    const {title} = useParams();
    const baseApiUrl = "http://localhost:3000"
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    const fetchPost = () => {
      axios.get(`${baseApiUrl}/posts/${title}`)
        .then(res => {
          console.log(res.data)
          setPost(res.data)
        })
        .catch(error => {
          console.error('Errore durante il caricamento del post:', error)
        })
    }

    const handleDeletePost = (title) => {
    
      axios.delete(`${baseApiUrl}/posts/${title}`)
      .then(res => {
        fetchPost()
        navigate(`/lista-post`)
      })
      .catch(error => {
        console.error("Errore ", error)
      })
    };
  
    useEffect(() => {
      fetchPost()
    }, [])






  return (
    <div className="container my-5 ">
      <div className="card">
        <div className="card-body">
          <h1>{post?.title}</h1>
          <p className="card-text justify-content-center">
            {post?.content}
          </p>
          <p className="card-text">
                {post?.tags.map((tag, index) => (
                  <span key={index} className="badge bg-primary me-1">
                    {tag}
                  </span>
                ))}
              </p>
              <img className="my-3 img-fluid" src={post?.image} alt={post?.title} />
              <div className="d-flex justify-content-around">
              <button className="btn btn-danger" onClick={() => handleDeletePost(post.title)}>
                  Delete
               </button>
               <button className="btn btn-warning" onClick={() => navigate(-1)}>
                Back 
               </button>
                
              </div>
        </div>
      </div>

    </div>
  )
}

export default DettaglioPostpage