import React from 'react';

class Follower extends React.Component{
    state =({
        user: ''
    })

    render(){
        return(<div>
            <img src={this.props.img} alt= 'Profile Pic'/>
            <h3>Name: {this.props.name}</h3>
        </div>)
    }
}
export default Follower;