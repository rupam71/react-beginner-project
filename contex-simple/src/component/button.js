import React, { Component } from 'react';
import languageContex from '../contex/languageContex';
import colourContext from '../contex/colourContext';

class Button extends Component {
    // static contextType = languageContex;
    // if we use <Consumer> we do not need = static contextType 

    renderSubmit(value){
        if (value === 'english') return 'Submit' ;
        else if (value === 'dutch') return 'Voorleggen' ;
        else return 'জমা দিন' ;
    }
    
    renderButton(colour){
        return (
            <button className= {`ui button ${colour}`} >
                        <languageContex.Consumer>
                            {/* {(value) => value === 'english' ? 'Submit' : 'Voorleggen'  } */}
                            {(value) => this.renderSubmit(value) }
                        </languageContex.Consumer>
                    </button>
        )
    }

    render() { 
        console.log(this.context);
        //const text = this.context === 'english' ? 'Submit' : 'Voorleggen' ;
        return ( 
            <colourContext.Consumer>
                {colour => this.renderButton(colour) }
            </colourContext.Consumer>
         );
         // where we will use <Consumer>
         // This whole bock should be wrapped
    }
}
 
export default Button;