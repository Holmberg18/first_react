var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');
var Card = require('./card');
var ListContainer = require('./list-container');

class Board extends React.Component {
      constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }


render(){

	return (
	<div>
		<ListContainer />
	</div>
		);
}//end render
    
    
} // end board

module.exports = Board;

//Next make the Board component that will render three lists to view progress and finished state