import { useState } from "react";

function CommentBox() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Add a comment:
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        {comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
      </div>
    </div>
  );
}

export default CommentBox;
