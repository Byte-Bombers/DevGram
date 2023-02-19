import React, { useState, useEffect } from "react";
import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import axios from "axios";

const CommentBox = ({ comments, setComments }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  //  const [comments, setComments] = useState([]);
  const getAllComments = () => {
    axios
      .get(process.env.REACT_APP_SERVER_URL + "/api/comments")
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllComments();
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      comment: comment,
    };
    axios
      .post(process.env.REACT_APP_SERVER_URL + "/api/comments", data)
      .then((response) => {
        setComments([...comments, response.data]);
        setName("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto" }}>
      <Box sx={{ mb: "1rem" }}>
        <Typography variant="h4">Leave a Comment</Typography>
        <Divider />
      </Box>
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: "1rem" }}>
          <TextField
            required
            label="Name"
            fullWidth
            value={name}
            onChange={handleNameChange}
          />
        </Box>
        <Box sx={{ mb: "1rem" }}>
          <TextField
            required
            label="Comment"
            fullWidth
            multiline
            minRows={3}
            value={comment}
            onChange={handleCommentChange}
          />
        </Box>
        <Box>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </form>
      {comments.map((comment, i) => {
        return (
          <Box key={`${comment.name}-${i}`} mt="1rem">
            <Divider />
            <Typography variant="h5" mt="1rem">
              {comment.name}
            </Typography>
            <Typography variant="body1" mt="0.5rem">
              {comment.comment}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default CommentBox;
