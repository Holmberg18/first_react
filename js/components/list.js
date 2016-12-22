var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');

var List = function(props) {
	
	
	 var cardComponent = props.cards.map(function(item,index){
		return (
			<Card text = {item} key={index} />
		);
	
	 });
	
 return (
			 <div className="cards">
                <div className="title">{props.title}</div>
				<div className="cards">{cardComponent}</div>
				<form>
				  <input type="text" name="firstname"><br>
				   <input type="submit" value="Submit">
				</form>
             </div>
			 );

};

module.exports = List;