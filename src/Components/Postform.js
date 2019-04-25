import React, { Component } from 'react';

export class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  HandleSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        post
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));

    this.setState({ title: '', body: '' });
  };

  render() {
    return (
      <div className="container">
        <h1>Add Post</h1>
        <hr />
        <form onSubmit={this.HandleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Enter Title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Body</label>
            <textarea
              className="form-control"
              name="body"
              rows="3"
              placeholder="Enter Body"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </form>
        <hr />
      </div>
    );
  }
}

export default Postform;
