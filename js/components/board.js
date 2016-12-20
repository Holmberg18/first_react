var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');
var Card = require('./card');

var Board = function(props) {
var cardsList = ['card1','card2']	
	
var listComponent = props.lists.map(function(item,index){
	
	return (
			<List title = {item} cards= {cardsList} key={index} />
			
			
	);
	
	
});

// var cardComponent = props.cards.map(function(item){
	
	// return (
			

	// );
	
// }};


  return (
            <div>
			 <div className="title">{props.title}</div>
			 <div className="Lists">{listComponent}</div>
            </div>
        );
};

module.exports = Board;