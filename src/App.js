import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state ={
    gitProfile: {},
    user:'',
    followers:[]
  }
  componentDidMount(){
    axios.get('https://github.com/narayanan-nithya')
    .then(res => {
      this.setState({
        ...this.state,
        getProfile: res.data,
      })
    })
    .catch(err => {
      console.error(err)
    })
    axios.get('https://github.com/narayanan-nithya/followers')
    .then(resp => {
      this.setState({
        ...this.state,
        followers: resp.data,
      })
    })
    .catch(err => {
      console.error(err)
    })
  }


  render() {
    return(<div>
      <h1>Github Card</h1>
      <form>
        <input onChange={this.handleChange} type='text' placeholder='Github Profile' value ={this.state.user}/>
        <button onClick={this.handleClick}>Lookup</button>
      </form>
      <User gitProfile={this.state.gitProfile}/>
      <h1>Followers List</h1>
      <FollowerList followers={this.state.followers}/>
    </div>);
  }
}

export default App;
