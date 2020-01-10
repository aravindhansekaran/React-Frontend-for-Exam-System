import React from 'react';
// import Container from '@material-ui/core/Container';

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
        if(this.state.user.department)
        {
            return (
                <div className="ui raised segment">
                    <label className="ui">User profile</label>
                    <br />
                    <div className="ui two column stackable grid">
                        <div className="column">
                            <div className="ui segment">
                                <label>ID</label>
                                <p>{this.state.user.ID}</p>
                            </div>
                            <div className="ui segment">
                                <label>Name</label>
                                <p>{this.state.user.name}</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="ui segment">
                                <label>Department</label>
                                <p>{this.state.user.department}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            );
        }

        return (
            <div className="ui segment">
                <label className="ui">User profile</label>
                <div className="ui two column stackable grid">
                    <div className="column">
                        <div className="ui raised segment">
                            <div className="ui placeholder">
                                <div className="paragraph">
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui raised segment">
                            <div className="ui placeholder">
                                <div className="paragraph">
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}

export default Profile;