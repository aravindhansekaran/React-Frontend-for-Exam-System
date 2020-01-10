import React from 'react';

class AddStudent extends React.Component{

    constructor(props){
        super(props);

        this.state={
            studentID : "",
            studentName : "",
            department : "",
            course : ""
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            studentID: "",
            studentName: "",
            department: "",
            course: ""
        });
        console.log(this.state);
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({...this.state,[e.target.name]:e.target.value});
    }

    handleReset = (e) => {
        e.preventDefault();
        this.setState({
            studentID: "",
            studentName: "",
            department: "",
            course: ""});
            console.log(this.state);
    }

    render(){
        return (
            <div className="ui raised container segment">
                <h4 className="ui header">Add a Student</h4>
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="field">
                        <label>Student ID</label>
                        <br />
                        <input className="ui input" type="text" name="studentID" placeholder="eg. S1001" onChange={this.handleChange} value={this.state.studentID} />
                        <br />
                    </div>
                    <div className="field">
                        <label>Student Name</label>
                        <br />
                        <input className="ui input" type="text" name="studentName" placeholder="eg. Aravindh" onChange={this.handleChange} value={this.state.studentName} />
                        <br />
                    </div>
                    <div className="field">
                        <label>Department</label>
                        <br />
                        <input className="ui input" type="text" name="department" placeholder="eg. Information Science & Technology" onChange={this.handleChange} value={this.state.department} />
                        <br />
                    </div>
                    <div className="field">
                        <label>Course</label>
                        <br />
                        <input className="ui input" type="text" name="course" placeholder="eg. Operating System" onChange={this.handleChange} value={this.state.course} />
                        <br />
                    </div>
                    <br />
                    <div className="ui buttons">
                        <button type="reset" className="ui button" onClick={this.handleReset}>Erase</button>
                        <div className="or"></div>
                        <button type="submit" className="ui positive button">Add</button>
                    </div>
                </form>
                <br />
            </div>
        );
    };
}

export default AddStudent;