import React, { Component } from 'react';

class InputForm extends Component {
    state = {  }
    onFormSubmit =(event)=>{
        
        event.preventDefault();

        if(this.state.name !== "" && Object.keys(this.state).length ){
            console.log("onFormSubmit called",this.state);

        this.props.handleSubmit(this.state);   
    }                                                                                                                                                                                           
    }
    handleChange= (event)=>{
        
        let input= event.target.value;
        
        let fruit= input.split("-"); 
        console.log('handlechange', input)

        this.setState({name :fruit[0], quantity:parseInt(fruit[1])});
    }
    render() { 
        return ( 
        <form onSubmit={this.onFormSubmit}>

            <input onChange ={this.handleChange} type="text" name="name" id="name"/>
            <input type="submit" value="Add" />
      
        </form>
         );
    }
}
 
export default InputForm;