import React from 'react';
import Media from '../Media/Media';
import Posts from '../Posts/Posts';
import PostShare from '../PostShare/PostShare';
import './PostSide.css';

const PostSide = () => {
  return (
    <div className='PostSide'>
     <PostShare/>
     <Media/>
    </div>
  );
};

export default PostSide;