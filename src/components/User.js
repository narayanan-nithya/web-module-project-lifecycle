import React from 'react';

class User extends React.Component{

    render(){
        return(
            <div>
                <img src ={this.props.gitProfile.avatar_url} alt='Profile Picture'/>
                <h2>Full Name: {this.props.gitProfile.name}</h2>
                <h3>Repositories: {this.props.gitProfile.public_repos}</h3>
                <h3>Followers: {this.props.gitProfile.followers}</h3>
            </div> 
        );
    }
}
export default User;