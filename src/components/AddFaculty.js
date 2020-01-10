import React from 'react';

class AddFaculty extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
           facultyID : "",
           facultyName : "",
           department : "",
           expertise : "" 
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            facultyID: "",
            facultyName: "",
            department: "",
            expertise: ""
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
            facultyID: "",
            facultyName: "",
            department: "",
            expertise: ""
        });
        console.log(this.state);
    }

    render(){
        return (
            <div className="ui raised container segment">
                <h4 className="ui header">Add a Faculty</h4>
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="field">
                        <label>Faculty ID</label>
                        <br />
                        <input className="ui input" type="text" name="facultyID" placeholder="eg. F1001" onChange={this.handleChange} value={this.state.facultyID} />
                        <br />
                    </div>
                    <div className="field">
                        <label>Faculty Name</label>
                        <br />
                        <input className="ui input" type="text" name="facultyName" placeholder="eg. Aravindh" onChange={this.handleChange} value={this.state.facultyName} />
                        <br />
                    </div>
                    <div className="field">
                        <label>Department</label>
                        <br />
                        <input className="ui input" type="text" name="department" placeholder="eg. Information Science & Technology" onChange={this.handleChange} value={this.state.department} />
                        <br />
                    </div>
                    <div className="field">
                        <label>Expertise</label>
                        <br />
                        <input className="ui input" type="text" name="expertise" placeholder="eg. Operating System" onChange={this.handleChange} value={this.state.expertise} />
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

export default AddFaculty;