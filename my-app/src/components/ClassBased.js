import { Component } from 'react';

class ClassBased extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      description: 'lorem ipsum dolor sit amet... bla bla 🍎',
      year: 2019,
      message: null,
    }

    // this.handleInput = this.handleInput.bind(this);
  }

  handleInput = (event) => {
    console.log('input is changing!!!', this)
    this.setState({ 
      description: event.target.value,
      message: '42 is the answer to life and everything else 𝟰²'
    })
  }

  render() {
    return (
      <article style={{
        backgroundColor: 'melon',
        width: '300px',
        marginTop: '16px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h2>Class component title: {this.props.title}</h2>
        <p>{this.state.description}</p>
        <input
          onChange={this.handleInput}
          value={this.state.description} />
        <img alt='emo llama' src={this.props.imageURL} />
      </article>
    )
  }
}

export default ClassBased;
