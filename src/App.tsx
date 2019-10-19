import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import countService from './services/countService';


class App extends PureComponent<MyProps, MyState> {

  constructor(props: MyProps) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    // countService.getCount().subscribe(count => this.setState({ count }));
    countService.getCount().subscribe({
      next: count => {
        this.setState({ count })
      }
    })
  }

  handleSetCount = () => {
    countService.setCount(7);
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => {countService.increment()}}>+</button>
        { this.state.count }
        <button onClick={() => {countService.decrement()}}>-</button>
      </div>
    );
  }
}

type MyProps = {
  // using `interface` is also ok
 
};
type MyState = {
  count: number; // like this
};



export default App;
