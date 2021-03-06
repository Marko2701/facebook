import React, { useState, useEffect } from 'react';
import db from '../../firebase';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';
import StoryReel from '../StoryReel/StoryReel';
import './Feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    ));
  }, []);
  

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      {posts.map(post => (
        <Post 
          key={post.id}
          profilePicture={post.data.profilePicture}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}  
    </div>
  );
};

export default Feed;
