var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var List = function(props) {
	
	
	 var cardComponent = props.cards.map(function(item,index){
		return (
			<Card text = {item} key={index} />
		);
	
	 });
	 
class NameForm extends React.Component {
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
                 <div className="title">{props.title}</div>
				 <div className="cards">{cardComponent}</div>
				  <form onSubmit={this.handleSubmit}>
					<label>
					  Name:
					  <input type="text" value={this.state.value} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				  </form>
	</div>
    ); // end return
  } //end render
} //end NameForm
}; // end List

module.exports = List;

