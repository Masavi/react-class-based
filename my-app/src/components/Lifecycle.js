import { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', idInterval: null };
  }

  // useEffect with an empty dependency list []
  componentDidMount() {
    console.log('Component has been mounted!')

    // socket connection, timer, side effect
    const idInterval = setInterval(() => {
      console.log('timer ticks...');
    }, 1000);

    this.setState({ idInterval })
  }

  // useEffect with dependencies [name]
  componentDidUpdate(prevProps, prevState) {
    console.log('Component was updated!');
    // if (prevProps.name !=== props.name ...)
  }

  // memory clearings and cleaning side effects
  componentWillUnmount() {
    console.log('This component is being dettached 🤓')

    clearInterval(this.state.idInterval);
  }

  render() {
    return (
      <>
        <h2>Lifecycle Methods 🌀</h2>
        <input
          value={this.name}
          onChange={(event) => this.setState({ name: event.target.value })} />
      </>
    )
  }
}

export default Lifecycle;
