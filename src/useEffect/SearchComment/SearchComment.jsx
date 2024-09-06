import React, { useState } from "react";
import axios from "axios";
import "./SearchComment.css"; 

function CommentSearch() {
  const [postIdInput, setPostIdInput] = useState("");
  const [fetchedComments, setFetchedComments] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const retrieveComments = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => {
        setFetchedComments(response.data);
        if (response.data.length === 0) {
          setFetchError("No comments found for this postId");
        } else {
          setFetchError(null); 
        }
      })
      .catch(() => {
        setFetchError("Failed to fetch comments");
      });
  };

  const handleSearchClick = () => {
    setFetchedComments([]);
    setFetchError(null);

    if (postIdInput.trim() === "") {
      setFetchError("Please enter a valid postId");
      return;
    }

    retrieveComments(postIdInput);
  };

  return (
    <div className="comment-search-container">
      <input
        className="post-id-input"
        type="text"
        value={postIdInput}
        onChange={(e) => setPostIdInput(e.target.value)}
        placeholder="Enter postId"
      />
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>

      {fetchError && <p className="error-message">{fetchError}</p>}

      <div className="comments-container">
        {fetchedComments.map((comment) => (
          <div className="comment-card" key={comment.id}>
            <p className="comment-name">{comment.name}</p>
            <p className="comment-email">
              <b>Email: </b> {comment.email}
            </p>
            <p className="comment-body">{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentSearch;