import React from 'react';

class AddSubject extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            subjectID : "",
            subjectName : "",
            courseID : ""
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            subjectID: "",
            subjectName: "",
            courseID: ""
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
            subjectID: "",
            subjectName: "",
            courseID: ""
        });
        console.log(this.state);
    }

    render(){
        return (
            <div className="ui raised container segment">
                <h4 className="ui header">Add a Subject</h4>
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="field">
                        <label>Subject ID</label>
                        <br />
                        <input className="ui input" type="text" name="subjectID" placeholder="eg. S1001" onChange={this.handleChange} value={this.state.subjectID} />
                        <br />
                    </div>
                    <div className="field">
                        <label>Subject Name</label>
                        <br />
                        <input className="ui input" type="text" name="subjectName" placeholder="eg. Operating Systems" onChange={this.handleChange} value={this.state.subjectName} />
                        <br />
                    </div>
                    <div className="field">
                        <label>Course ID</label>
                        <br />
                        <input className="ui input" type="text" name="courseID" placeholder="eg. C1001" onChange={this.handleChange} value={this.state.courseID} />
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
    }
    
}

export default AddSubject;