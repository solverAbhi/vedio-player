// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoApp = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [playedSeconds, setPlayedSeconds] = useState(0);

  const handleProgress = state => {
    setPlayedSeconds(state.playedSeconds);
  };

  const handleCommentSubmit = event => {
    event.preventDefault();
    setComments([
      ...comments,
      { text: newComment, timestamp: playedSeconds }
    ]);
    setNewComment('');
  };

  return (
    <div>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        onProgress={handleProgress}
      />
      <form onSubmit={handleCommentSubmit}>
        <input
          type='text'
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
        />
        <button type='submit'>Comment</button>
      </form>
      {comments.map((comment, index) => (
        <div key={index} style={{backgroundColor: 'black', margin: '10px', padding: '10px', borderRadius: '5px'}}>
          <span style={{fontWeight: 'bold'}}>Time: </span>
          <span>{comment.timestamp.toFixed(2)}s</span>
          <br/>
          <span style={{fontWeight: 'bold'}}>Comment: </span>
          <span>{comment.text}</span>
        </div>
      ))}``
    </div>
  );
};

export default VideoApp;
