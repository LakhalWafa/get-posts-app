import React, { Component } from 'react';

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data =>
        this.setState({
          posts: data
        })
      );
  }

  render() {
    const posts = this.state.posts.map(post => (
      <div className="card text-center text-white bg-secondary" key={post.id}>
        <div className="card-body">
          <h1 className="card-title">{post.title}</h1>
          <p className="card-text">{post.body}</p>
        </div>
      </div>
    ));
    return (
      <div className="container">
        <h1> Posts </h1>
        <hr />
        {posts}
      </div>
    );
  }
}

export default Posts;
