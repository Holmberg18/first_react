var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');
var Card = require('./card');
var ListContainer = require('./list-container');

class Board extends React.Component {


render(){

	return (
	<div class="board">
		<ListContainer />
	</div>
		);
}//end render
    
    
} // end board

module.exports = Board;

//Next make the Board component that will render three lists to view progress and finished state