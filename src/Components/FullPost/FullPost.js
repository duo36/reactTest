import React, { Component } from 'react';

class FullPost extends Component {
  render() {
    let post = <p> select a post</p>;
    post = (
    		<div className="FullPost">
    			<h1>title</h1>
    			<p>content</p>
    			<div className="Edit">
    				<button className="Delete">Delete</button>
    			</div>
    		</div>)
    		return post;
  }
}

export default FullPost;
