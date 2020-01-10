import React from 'react';
import AddStudent from './AddStudent';
import AddFaculty from './AddFaculty';
import AddCourse from './AddCourse';
import Profile from './Profile';
import AddSubject from './AddSubject';
// import Loader from './Loader'
import Home from './Home'
// import Router from './Router';
import { BrowserRouter, Route, Link } from 'react-router-dom';

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
                <div className="ui raised container segment">
                    <Home />
                    <br />
                    <button onClick={this.handleClick}  className="ui button">Change State</button>
                </div>
            );
        }
        return (
            <div className="ui raised container segment">
                   <Profile />
                <BrowserRouter>
                <div className="ui four item menu">
                    <Link to="/addstudent" className="item">Add Student</Link>
                    <Link to="/addcourse" className="item">Add Course</Link>
                    <Link to="/addfaculty" className="item">Add Faculty</Link>
                    <Link to="/addsubject" className="item">Add Subject</Link>
                </div>
                    <Route path="/addstudent" component={AddStudent} />
                    <Route path="/addcourse" component={AddCourse} />
                    <Route path="/addfaculty" component={AddFaculty} />
                    <Route path="/addsubject" component={AddSubject} />
                </BrowserRouter>
                <button onClick={this.handleClick} className="ui button" >Change State</button>
            </div>
        );
        
    };
}

export default App;