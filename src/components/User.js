import React from 'react';

class User extends React.Component{

    render(){
        return(
            <div>
                <img src ={this.props.getProfile.avatar_url} alt='Profile Picture'/>
                <h2>Full Name: {this.props.getProfile.name}</h2>
                <h3>Repositories: {this.props.getProfile.public_repos}</h3>
                <h3>Followers: {this.props.getProfile.followers}</h3>
            </div> 
        );
    }
}
export default User;