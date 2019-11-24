import React from 'react';
import AddStudent from './AddStudent';
import AddFaculty from './AddFaculty';
import AddCourse from './AddCourse';
import Profile from './Profile';

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            faculty: false
        };
    }

    handleClick = (e) => {
        this.setState({faculty : !(this.state.faculty)});
        // console.log(this.state.faculty);
    }
    
    render(){

        // const style = {
        //     backgroundImage: 'url(images/background.jpg)',
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center center',
        //     backgroundRepeat: 'no-repeat',
        //     overview : 'hidden'
        // };

        if (this.state.faculty){
            return (
                <div>
                    <AddStudent />
                    <br />
                    <AddCourse />
                    <br />
                    <AddFaculty />
                    <br />
                    <button onClick={this.handleClick} >Change State</button>
                </div>
            );
        }
        return (
            <div className="ui segment container">
                <div className="ui three item menu">
                    <a className="item active">Log in</a>
                    <a className="item">DashBoard</a>
                    <a className="item">About us</a>
                </div>
                <Profile />
                <button onClick={this.handleClick} >Change State</button>
            </div>
        );
        
    };
}

export default App;