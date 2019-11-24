import React from 'react';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user : {
                ID : "12345",
                name : "Aravindh",
                department : "IST"
            }
        };
    }

    render(){
        return(
            <div>
                <label>ID</label>
                <p>{this.state.user.ID}</p>
                <label>Name</label>
                <p>{this.state.user.name}</p>
                <label>Department</label>
                <p>{this.state.user.department}</p>
            </div>
        );
    }
}

export default Profile;