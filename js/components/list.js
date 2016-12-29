var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');
import NameForm from './name-form'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: '' ,
            cards: []
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onInput = this.onInput.bind(this);
    }
    
    onSubmit(event){
        this.setState({
            cards: this.state.cards.concat(this.state.textInput)//pushes to a new array rather than same array, creates a new array object.
        });
       console.log("submission has been made, the submission value is now" , this.state.cards);
        
    }
    
    onInput(event){
        this.setState({
            textInput: event.target.value //when input is entered textInput is logged as what is submitted to text input
        });
         console.log("input has been made, the input is now" , this.state.textInput);
        
    }
render(){
	var cardComponent;
	
			if (this.state.cards){
			 cardComponent = this.state.cards.map(function(item,index){
				return (
					<Card text = {item} key={index} />
					
				);
			
			 });//end for
			}
	
	
	return (
	<div>
		{cardComponent}
		<NameForm onSubmit={this.onSubmit} onInput={this.onInput} />
	</div>
		);
}//end render


}//end List

export default List;

//var List = function(props) {
//
//	var cardComponent;
//	
//			if (props.cards){
//			 cardComponent = props.cards.map(function(item,index){
//				return (
//					<Card text = {item} key={index} />
//					
//				);
//			
//			 });//end for
//			}
//	
//	
//	return (
//	<div>
//		{cardComponent}
//		<NameForm />
//	</div>
//		);
//
//
//
//}//end List