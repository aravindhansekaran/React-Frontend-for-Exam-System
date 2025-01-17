import React from 'react';

class AddCourse extends React.Component{
    constructor(props){
        super(props);
        this.state={
            courseID: "",
            courseName: "",
            department: ""
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            courseID: "",
            courseName: "",
            department: ""
        });
        console.log(this.state);
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }

    handleReset = (e) => {
        e.preventDefault();
        this.setState({
            courseID: "",
            courseName: "",
            department: ""
        });
        console.log(this.state);
    }

    render(){
        return (
            <div className="ui raised container segment">
                <h4 className="ui header">Add a Course</h4>
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="field">
                        <label>Course ID</label>
                        <br />
                        <input className="ui input" type="text" name="courseID" placeholder="eg. C1001" onChange={this.handleChange} value={this.state.courseID} />
                        <br />
                    </div>
                    <div className="field">
                        <label>Course Name</label>
                        <br />
                        <input className="ui input" type="text" name="courseName" placeholder="eg. MCA" onChange={this.handleChange} value={this.state.courseName} />
                        <br />
                    </div>
                    <div className="field">
                        <label>Department</label>
                        <br />
                        <input className="ui input" type="text" name="department" placeholder="eg. Information Science & Technology" onChange={this.handleChange} value={this.state.department} />
                        <br />
                    </div>
                    <div className="ui buttons">
                        <button type="reset" className="ui button" onClick={this.handleReset}>Erase</button>
                        <div className="or"></div>
                        <button type="submit" className="ui positive button">Add</button>
                    </div>
                </form>
                <br />
            </div>
        );
    }
}

export default AddCourse;