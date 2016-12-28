var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');
import NameForm from './name-form'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submission: false,
            input:false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onInput = this.onInput.bind(this);
    }
    
    onSubmit(){
        this.setState({
            submission: !this.state.submission //when submit is entered, this state flips.   
        });
        
    }
    
    onInput(){
        this.setState({
            input: !this.state.input //when input is changed, this state flips.   
        });
        
    }

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
		<NameForm onSubmit={this.onSubmit} onInput={this.onInput} />
	</div>
		);



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