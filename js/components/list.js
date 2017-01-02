var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');


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
		
	</div>
		);


<<<<<<< HEAD
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
=======
}//end List
>>>>>>> cf35fe3ce6e5d9fd75c27276a137763f69521938

export default List;

<<<<<<< HEAD
=======

//Next make the Board component that will render three lists to view progress and finished state
>>>>>>> cf35fe3ce6e5d9fd75c27276a137763f69521938
