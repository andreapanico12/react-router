import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function NuovoPostpage() {


  const baseApiUrl = "http://localhost:3000"
  const navigate = useNavigate();

  const defaultPost = {
    title: ``,
    content:``,
    image:``,
    tags: []
  }
  
  const tagsOptions = [
    "Dolci",
    "Torte",
    "Ricette vegetariane",
    "Ricette al forno",
    "Antipasti",
    "Primi piatti",
    "Dolci veloci",
    "Ricette veloci",
    "Dolci al cioccolato",
    "Secondi piatti"
  ]

  const [newPost, setNewPost] = useState(defaultPost);

  const handleInputChange = (e) => {
    const {name, value,type,checked} = e.target;
    if (type === "checkbox" && name === "tags"){
      setNewPost( (prevNewForm) => ({
        ...prevNewForm,
        tags: checked ? [...prevNewForm.tags,value]: data.tags.filter((tag)=>tag !== value),
      }))
    } else {
      setNewPost({...newPost, [name]:value})
    }
    
  }
  
  const handleAddPost = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.image) {
        const newPostPosted = newPost
        axios.post(`${baseApiUrl}/posts`, newPostPosted)
            .then(res => {

            setNewPost(defaultPost);

            navigate(`/lista-post`)
                })
      
    } else {
      alert('Please fill in the title and image URL.');
    }

  };
  
  
  return (
    <div>
            <form onSubmit={handleAddPost} className="mt-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={newPost.image}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            rows="10"
            value={newPost.content}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Tags</label>
          <div>
            {tagsOptions.map((tag) => (
              <div className="form-check form-check-inline" key={tag}>
                <input
                  className="form-check-input"
                  name='tags'
                  type="checkbox"
                  id={`tag-${tag}`}
                  value={tag}
                  checked={newPost.tags.includes(tag)}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor={`tag-${tag}`}>
                  {tag}
                </label>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Add Post
        </button>
      </form>

    </div>
  )
}

export default NuovoPostpage