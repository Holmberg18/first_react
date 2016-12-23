var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');
import NameForm from './name-form'

var List = function(props) {

	var cardComponent;
	
			if (props.cards){
			 cardComponent = props.cards.map(function(item,index){
				return (
					<Card text = {item} key={index} />
					
				);
			
			 });//end for
			}
	
	
	return (
	<div>
		{cardComponent}
		<NameForm />
	</div>
		);



}//end List

export default List;

