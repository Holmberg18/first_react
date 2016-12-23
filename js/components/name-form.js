var React = require('react');
var ReactDOM = require('react-dom');


export default class NameForm extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
   <div className="cards">
                 <div className="title">{this.props.title}</div>
				 <form onSubmit = {this.handleSubmit}>
				   <input type="text" name="firstname" onChange = {this.handleChange}/><br/>
				   <input type="submit" value="Submit" />
				 </form>
				 </div>
    ); // end return
  } //end render
} //end NameForm

