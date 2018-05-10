import React, { Component } from 'react';
import FullPost from '../../Components/FullPost/FullPost';
import Post from'../../Components/Post/Post';
import axios from 'axios';


class Blog extends Component {
	state = {
			posts: []
	}
	componentDidMount() {
		axios.get('https://my.api.mockaroo.com/users.json?key=19ca5080')
		.then(response => {
			this.setState({posts:response.data});
		});
	}
  render() {
	  const posts = this.state.posts.map(post => {
		  return <Post key={post.ip_address} email={post.email} title={post.first_name}/>
	  });
    return (
      <div>
      	<section className="Posts">
      		{posts}
      	</section>
      	<section>
  			<FullPost />
  		</section>
      </div>
    );
  }
}

export default Blog;
